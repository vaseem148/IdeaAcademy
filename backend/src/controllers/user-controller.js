import User from "../models/user-model.js";
import { generateTokenAndSendCookie } from "../utils/auth.js";

export const handleUserSignUp = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const isAlreadyUser = await User.findOne({ email });

        if (isAlreadyUser) {
            return res.status(400).json({ msg: "User Already There. Please Login!" });
        }

        const createdUser = await User.create({ name, email, password });
        const { password: _, ...userWithoutPwd } = createdUser.toObject();
        generateTokenAndSendCookie(createdUser, res);

        return res.status(201).json({ msg: "User Signup Successfully!", user: userWithoutPwd });

    } catch (err) {
        console.log(err)
        return res.status(500).json({ error: err.message })
    }
}

export const handleUserSignIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("🔑 LOGIN ATTEMPT:", email);
        
        const user = await User.findOne({ email });
        if (!user) {
            console.log("❌ USER NOT FOUND:", email);
            return res.status(400).json({ msg: "User not found!" });
        }

        const verified = await user.verifyPassword(password);
        if (!verified) {
            console.log("❌ WRONG PASSWORD FOR:", email);
            return res.status(400).json({ msg: "Wrong password!" });
        }

        console.log("✅ LOGIN SUCCESS:", email);
        const { password: _, ...userWithoutPwd } = user.toObject();

        generateTokenAndSendCookie(user, res);
        return res.status(200).json({ msg: `User Signin successful`, user: userWithoutPwd });
    } catch (err) {
        console.error("❌ LOGIN ERROR:", err);
        return res.status(500).json({ error: err.message })
    }
};

export const handleGetCurrentUser = async (req, res) => {
    try {
        const { email } = req.user;

        const user = await User.findOne({ email }).select('-password ');
        return res.status(200).json({ msg: `Welcome Back ${user.name}`, user });

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
};

export const handleLogoutUser = async (req, res) => {
    try {
        res.clearCookie("auth_token", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
        });

        return res.status(200).json({ msg: "User LogOut Successfully!" });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ msg: `Internal Server Error : ${err.message}` })
    }
}
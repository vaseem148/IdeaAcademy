import express from "express";
import { 
    handleUserSignUp, 
    handleUserSignIn, 
    handleGetCurrentUser, 
    handleLogoutUser 
} from "../controllers/user-controller.js";
import { handleCheckAuthentication } from "../middlewares/auth.js";

const router = express.Router();

router.post("/register", handleUserSignUp); 
router.post("/login", handleUserSignIn);
router.get("/me", handleCheckAuthentication, handleGetCurrentUser);
router.post("/logout", handleLogoutUser);

export default router;
import express  from "express";
import { newTask ,getMyTask, updateTask, deleteTask } from "../controllers/taskFunction.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express();

router.post("/new",isAuthenticated,newTask);
router.get("/my",isAuthenticated,getMyTask);
router.route("/:id").put(isAuthenticated,updateTask).delete(isAuthenticated,deleteTask);


export default router;
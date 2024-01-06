import ErrorHandler from "../middlewares/error.js";
import { Task } from "../model/task.js";


export const newTask = async(req,res,next)=> {
    try {
        const{tittle,description} = req.body;

        await Task.create({
            tittle,
            description,
            user:req.user,
        });
    
        res.status(201).json({
            success:true,
            message:"Task added Succesfully",
        });
    } catch (error) {
        next(error);
    }
   
};

export const getMyTask = async(req,res,next)=>{
    try {
        const userid = req.user._id;

    const tasks = await Task.find({ user: userid });

    res.status(200).json({
        success:true,
        tasks,
    });
    } catch (error) {
        next(error);
    }

};
export const updateTask = async(req,res,next)=>{

try {
    const task = await Task.findById(req.params.id);
//Error handling linked with app.js file
 if(!task) return next(new ErrorHandler("Task not found",404));

 task.iscompleted = !task.iscompleted;

 await task.save();


    res.status(200).json({
        success:true,
        message:"Task Updated",
    });
} catch (error) {
    next(error);
}

};
export const deleteTask = async(req,res,next)=>{
  
    try {
        const task = await Task.findById(req.params.id);

    if(!task) return next(new ErrorHandler("Task not found",404));
    await task.deleteOne();
    
    res.status(200).json({
        success:true,
        message:"task Deleted",
    });
    } catch (error) {
        next(error);
    }

};
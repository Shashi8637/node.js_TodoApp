import mongoose from "mongoose";

const schema = mongoose.Schema({
    tittle:{
        type:String,
        required:true,
    },
    description:{
        type: String,
        required:true,
    },
    iscompleted:{
        type: Boolean,
        default: false,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        require:true,
    },


    createdAt:{
        type:Date,
        default:Date.now,
    }
});
 export const Task = mongoose.model("Task",schema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema= new Schema ({
    title: String,
    done: {
        type:Boolean
    },
    user: String,
})

module.exports=mongoose.model("Task", taskSchema)
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema= new Schema ({
    title: String,
    done: {
        type:Boolean
    },
})

module.exports=mongoose.model("Task", taskSchema)
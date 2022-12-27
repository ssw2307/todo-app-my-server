const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema({
    id:{
        type:"number",
        unique : "true",
    },
    title : "String",
    done : "Boolean",
});

module.exports = mongoose.model("todo",TodoSchema);
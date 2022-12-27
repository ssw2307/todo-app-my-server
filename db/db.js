const mongoose = require("mongoose");

const db = mongoose.connect(`mongodb+srv://tisedu:${process.env.MONGO_PASSWORD}@cluster0.lhbjwez.mongodb.net/?retryWrites=true&w=majority`,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    dbName : "todo",
})
.then(()=>{console.log("todo 디비연결 성공")})
.catch((e)=>{console.log(e)})

module.exports = db;
const express = require("express");
const app= express();

/*
const cors = require("cors");
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());


const dotenv = require("dotenv");
dotenv.config();
const db = require("./db/db");
const todoSchema = require("./models/TodoSchema");

*/
app.set("port",process.env.PORT || 5000);
const PORT = app.get("port");




app.get("/",(req,res)=>{
    res.send("express start77")
})

/*
app.get("/todo/list",(req,res)=>{

    todoSchema.find()
    .then((response)=>{
        res.json(response);
    })
    .catch((e)=>{console.log(e)})
    
})


app.post("/todo/insert",(req,res)=>{
    const {id, title, done } = req.body;

    const insertTodo = new todoSchema({id, title, done });
    insertTodo.save()
    .then((response)=>{console.log("insert 성공")})
    
})

app.delete("/todo/delete/:id",(req,res)=>{
    const {id} = req.params;
    todoSchema.deleteOne({id:id})
    .then((response)=>{console.log("삭제 성공")})
    .catch((e)=>{console.log(e)})
})


app.put("/todo/modify/:id",(req,res)=>{
    const {id} = req.params;
    const {done} = req.body;
    //console.log(id,":",done)
    todoSchema.updateOne({id:id},{done:done})
    .then((response)=>{console.log("수정 성공")})
    .catch((e)=>{console.log(e)})

})
*/

app.listen(PORT, ()=>{
    console.log(PORT + " : 포트에서 노드 서버 대기중")
});
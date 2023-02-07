const express=require('express');
const app=express();
const cors=require('cors');
const port= 8000;
const dotenv=require('dotenv');
dotenv.config();

const dbService=require('./dbService');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    extended:false
}))
app.get('/home',(request,response)=>{
    response.send("Im your Aashish Bhandari");
})
//create
app.post('/insert',(request,response)=>{
    //console.log("hello");
   const {name}=request.body;
   const db=dbService.getDbServiceInstance();

   const result = db.insertNewName(name);
    
   result
    .then(data=>response.json({data:data}))
    .catch(err=>console.log(err));
});

//read
app.get('/getAll',(request,response)=>{
    const db=dbService.getDbServiceInstance();
    const result=db.getAllData();
    result
        .then(data=>response.json({data:data}))
        .catch(err=>console.log(err));
})

//update
app.patch('/update',(request,response)=>{
    const {id,name} = request.body;
    const db=dbService.getDbServiceInstance();

    const result=db.updateRowById(id,name);

    result
         .then(data=>response.json({success:true}))
         .catch(err=>console.log(err));
})

//delete
app.delete('/delete/:id',(request,response)=>{
    const {id}=request.params;
    const db=dbService.getDbServiceInstance();

    const result = db.deleteRowById(id);

    result
        .then(data=>response.json({success:data}))
        .catch(err=>console.log(err));
})

app.get('/search/:name',(request,response)=>{
    const {name}=request.params;
    console.log(name)
     const db=dbService.getDbServiceInstance();

     const result=db.searchByName(name);

     result 
         .then(data=>response.json({data:data}))
         .then(err=>console.log(err));
})

app.listen(port,()=>console.log(`app is running at port:${port}`));
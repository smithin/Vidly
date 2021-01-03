const express = require('express')

const app = express()
app.use(express.json())
app.listen(3000)

const genres = [{id:1,name:'thriller'},{id:2,name:'Horror'},{id:3,name:'scifi'}]

//list
app.get('/vidly/genres',(req,res)=>{
    res.send(genres)
})

//create
app.post('/vidly/genre',(req,res)=>{
    const genre = {id:genres.length+1,name:req.body.name}
    genres.push(genre)
    res.send(genres)
})

//select
app.get('/vidly/genre/:id',(req,res)=>{
    const genre = genres.find(g=>g.id==req.params.id)
    res.send(genre)
})

//delete
app.delete('/vidly/genre/:id',(req,res)=>{
    const newGenres = []
     genres.forEach(g=>{
         if(g.id!=req.params.id){
             newGenres.push(g);
         }
     })
    res.send(newGenres)
})

//update
app.put('/vidly/genre/:id',(req,res)=>{
    const newGenres = []
     genres.forEach(g=>{
         if(g.id==req.params.id){
            g.name=req.body.name
         }
         newGenres.push(g);
     })
    res.send(newGenres)
})

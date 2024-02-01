const express = require('express');
const cors = require('cors');

const db = require('./database/index.js');

const port = 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/api/cats', (req, res) => {
  db.getAllCats((error,results)=>{
    if (error){
      console.log(error)
      res.status(500).send(error)
    }
    else {res.status(200).send(results)}

  })

});
app.get('/api/cats/:name',(req,res)=>{
const { name }= req.params
db.getOneCat(name, (error,results)=>{
  if (error){
    console.log(error)
    res.status(500).send(error)
  }
  else { res.status(200).json(results)}
})
});
app.post('/api/cats/',(req,res)=>{
  const newCat= req.body
  db.postCat(newCat,(error,results)=>{
    if (error){
      console.log(error)
      res.status(500).send(error)
    } else {
      res.status(201).json(results)
    }

  })
 })
;
app.put('/api/cats/:id',(req,res)=>{
  const { id } = req.params
  const updated = req.body
  db.updateCat(id,updated,(error,results)=>{
    if (error){
      console.log(error)
      res.status(500).send(error)
    }
    else{
      res.status(200).json(results)
    }
  })
}) ; 

app.delete('/api/cats/:id',(req,res)=>{
  const { id } = req.params 
  db.deleteCat(id,function(error,results){
    if (error){
      console.log(error)
      res.status(500).send(error)
    }
    else {
      res.status(200).json(results)
    }
  })
})

app.get('/api/dogs', (req, res) => {
    db.getAllDogs((error,results)=>{
      if (error){
        console.log(error)
        res.status(500).send(error)
      }
      else {res.status(200).send(results)}
  
    })
  
  });
  app.get('/api/dogs/:name',(req,res)=>{
  const { name }= req.params
  db.getOneDog(name, (error,results)=>{
    if (error){
      console.log(error)
      res.status(500).send(error)
    }
    else { res.status(200).json(results)}
  })
  });
  app.post('/api/dogs/',(req,res)=>{
    const newDog= req.body
    db.postDog(newDog,(error,results)=>{
      if (error){
        console.log(error)
        res.status(500).send(error)
      } else {
        res.status(201).json(results)
      }
  
    })
   })
  ;
  app.put('/api/dogs/:id',(req,res)=>{
    const { id } = req.params
    const updated = req.body
    db.updateDog(id,updated,(error,results)=>{
      if (error){
        console.log(error)
        res.status(500).send(error)
      }
      else{
        res.status(200).json(results)
      }
    })
  }) ; 
  
  app.delete('/api/dogs/:id',(req,res)=>{
    const { id } = req.params 
    db.deleteDog(id,function(error,results){
      if (error){
        console.log(error)
        res.status(500).send(error)
      }
      else {
        res.status(200).json(results)
      }
    })
  })
  
; app.get('/api/fishes', (req, res) => {
    db.getAllFishes((error,results)=>{
      if (error){
        console.log(error)
        res.status(500).send(error)
      }
      else {res.status(200).send(results)}
  
    })
  
  });
  app.get('/api/fishes/:name',(req,res)=>{
  const { name }= req.params
  db.getOneFish(name, (error,results)=>{
    if (error){
      console.log(error)
      res.status(500).send(error)
    }
    else { res.status(200).json(results)}
  })
  });
  app.post('/api/fishes/',(req,res)=>{
    const newFish= req.body
    db.postFish(newFish,(error,results)=>{
      if (error){
        console.log(error)
        res.status(500).send(error)
      } else {
        res.status(201).json(results)
      }
  
    })
   })
  ;
  app.put('/api/fishes/:id',(req,res)=>{
    const { id } = req.params
    const updated = req.body
    db.updateFish(id,updated,(error,results)=>{
      if (error){
        console.log(error)
        res.status(500).send(error)
      }
      else{
        res.status(200).json(results)
      }
    })
  }) ; 
  
  app.delete('/api/fishes/:id',(req,res)=>{
    const { id } = req.params 
    db.deleteFish(id,function(error,results){
      if (error){
        console.log(error)
        res.status(500).send(error)
      }
      else {
        res.status(200).json(results)
      }
    })
  })
  







app.listen(port, () => {
  console.log(`listening on ${port} 🎉`);
});

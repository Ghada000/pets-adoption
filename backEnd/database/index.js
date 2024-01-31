const mysql = require('mysql2');
const config = {
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'petstore'
  };

const connection = mysql.createConnection(config)
connection.connect((err)=>{
    if (err) {
        console.log(err)
    }
    else {
        console.log("MYSQL connected 🥳🔥")
    }
})

const getAllCats = (callback) => {
    const sql = 'SELECT * from `cats`'
   connection.query(sql,function(error,results,fields){
    callback(error,results)
   })
};
const getOneCat=(name,callback)=>{
    const sql = 'SELECT * FROM `cats` WHERE name = ?'
    connection.query(sql,[name],function(error,results,fields){
        callback(error,results)
    })

};
const postCat=(body,callback)=>{
  const sql='INSERT INTO `cats` SET name = ?, description = ? ,  image_Url= ? '
  connection.query(sql,[body.name,body.description,body.image_Url],function(error,results,fields){
    callback(error,results)
  })
};
const updateCat=(id,body,callback)=>{
    const sql = 'UPDATE `cats` SET name = ?,  description = ?  , image_Url= ?  WHERE id = ? '
    connection.query(sql,[body.name,body.description,body.image_Url,id],function(error,results,fields){
        callback(error,results)
    })

};
const deleteCat=(id,callback)=>{
    const sql = 'DELETE FROM `cats` WHERE id = ?'
    connection.query(sql,[id],function(error,results,fields){
        callback(error,results)
    })


}

const getAllDogs = (callback) => {
    const sql = 'SELECT * from `dogs`'
   connection.query(sql,function(error,results,fields){
    callback(error,results)
   })
};
const getOneDog=(name,callback)=>{
    const sql = 'SELECT * FROM `dogs` WHERE name = ?'
    connection.query(sql,[name],function(error,results,fields){
        callback(error,results)
    })

};
const postDog = (body, callback) => {
    const sql = 'INSERT INTO `dogs` SET name = ?, description = ?, image_Url = ?';
    connection.query(sql, [body.name, body.description, body.image_Url], function (error, results, fields) {
      if (error) {
        console.error(error);
        return callback(error, null);
      }
      callback(null, results);
    });
  };
  
const updateDog=(id,body,callback)=>{
    const sql = 'UPDATE `dogs` SET name = ?,  description = ?  , image_Url= ?  WHERE id = ? '
    connection.query(sql,[body.name,body.description,body.image_Url,id],function(error,results,fields){
        callback(error,results)
    })

};
const deleteDog=(id,callback)=>{
    const sql = 'DELETE FROM `dogs` WHERE id = ?'
    connection.query(sql,[id],function(error,results,fields){
        callback(error,results)
    })


}

const getAllFishes = (callback) => {
    const sql = 'SELECT * from `fishes`'
   connection.query(sql,function(error,results,fields){
    callback(error,results)
   })
};
const getOneFish=(name,callback)=>{
    const sql = 'SELECT * FROM `fishes` WHERE name = ?'
    connection.query(sql,[name],function(error,results,fields){
        callback(error,results)
    })

};
const postFish=(body,callback)=>{
  const sql='INSERT INTO `fishes` SET name = ?, description = ? ,  image_Url= ? '
  connection.query(sql,[body.name,body.description,body.image_Url],function(error,results,fields){
    callback(error,results)
  })
};
const updateFish=(id,body,callback)=>{
    const sql = 'UPDATE `fishes` SET name = ?,  description = ?  , image_Url= ?  WHERE id = ? '
    connection.query(sql,[body.name,body.description,body.image_Url,id],function(error,results,fields){
        callback(error,results)
    })

};
const deleteFish=(id,callback)=>{
    const sql = 'DELETE FROM `fishes` WHERE id = ?'
    connection.query(sql,[id],function(error,results,fields){
        callback(error,results)
    })


}

module.exports= { getAllCats, getOneCat ,postCat, updateCat, deleteCat , getAllDogs, getOneDog ,postDog, updateDog, deleteDog , getAllFishes, getOneFish ,postFish, updateFish, deleteFish};

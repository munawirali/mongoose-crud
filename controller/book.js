const modelBook = require('../models/book')

class Book {
  constructor() {

  }
  static findAll(req,res){
    modelBook.find({})
    .then(rows=>{
      // console.log(rows);
      res.send(rows)
    })
    .catch(err=>{
      res.send(err);
    })
  }
  static create(req,res){
    modelBook.create({
      isbn:req.body.isbn,
      title:req.body.title,
      author:req.body.author,
      category:req.body.category,
      stock:req.body.stock,
    })
    .then(rows=>{
      // console.log(rows);
      res.json({
        "message":"inserting data succesfull",
        "data":rows
      })
    })
    .catch(err=>{
      res.send(err);
    })
  }
  static update(req,res){
    modelBook.findOneAndUpdate({
      _id: req.params.id
    },{
      isbn:req.body.isbn,
      title:req.body.title,
      author:req.body.author,
      category:req.body.category,
      stock:req.body.stock,
    })
    .then(rows=>{
      // console.log(rows);
      res.json({
        "message":"updating data succesfull",
        "data":rows
      })
    })
    .catch(err=>{
      res.send(err);
    })
  }
  static delete(req,res){
    modelBook.findOneAndRemove({_id:req.params.id})
    .then(rows=>{
      res.json({
        "message":"deleteting data succesfull",
        "data":rows
      })
    })
    .catch(err=>{
      res.send(err);
    })
  }
}

module.exports = Book

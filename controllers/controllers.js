const axios = require('axios');
const { response } = require('express');
const schema= require('../models/schems')

exports.homepath= (req,res)=>{
    axios.get('http://localhost:3000/alltasks')
    .then(function(response){
        res.render('home',{taskdata:response.data})
    })
    .catch(err=>{
        console.log(err);
    })
    // res.render('home')
}

exports.postuser = async (req, res) => {
    try {
        const blog = await schema.create(req.body)
        res.redirect('/')
    } catch (error) {
        res.status(500).send({ message: error })
    }
}

exports.getalltasks = async (req, res) => {
    try {
        const tasks = await schema.find({})
        res.status(200).send(tasks)
    } catch (error) {
        res.status(500).send({ message: error })
    }
}

exports.deletetask = async (req, res) => {
    try {
        // const { id: taskId } = req.params
        const id1=req.params.id
        const blog = await schema.findOneAndDelete({_id:id1})
        if (!blog) {
            return res.status(404).json({ msg: ' No blog with that Id no. ' })
        }
        res.redirect('/')
    }
    catch (error) {
        res.status(500).send({ msg: error })
    }
}

exports.getbyid= async(req,res)=>{
        const { id: taskID } = req.params
        const task = await schema.findOne({ _id: taskID })
        if (!task) {
            res.send('not found')
        }
      
        res.status(200).json({ task })
      }
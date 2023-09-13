const express = require('express')
const router = express.Router()
const Model = require('../model/model.js')

// Posting data to the database
router.post('/', async(req, res)=>{
    const data = new Model ({
        name: req.body.name,
        age: req.body.age
    })

    try {
        const dataToSave = await data.save();
        res.status(200).json(dataToSave)
    } catch (error) {
        res.status(400).json({message: error.message})   
    }
})

//Getting all the data from the database
router.get('/getAll', async(req, res)=>{
    try {
        const data = await Model.find()
        res.json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Getting data based on the id
router.get('/:id', async(req, res)=>{
    try {
        const data = await Model.findById(req.params.id)
        res.json(data)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
    res.send(req.params.id)
})

//Updating data based on the id
router.patch('/:id', async(req, res)=>{
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = {new:true};
        const result = await Model.findByIdAndUpdate(id, updatedData, options)
        res.send(result)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
})

//Deleting data based on the id
router.delete('/:id', async(req, res)=>{
    try {
       const id = req.params.id;
       const data = await Model.findByIdAndDelete(id) 
       res.send(`Document with ${data.name} has been deleted `)
    } catch (error) {
        
    }
})
module.exports = router;
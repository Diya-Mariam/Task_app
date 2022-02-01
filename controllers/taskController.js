const express = require('express')

const mongoose = require('mongoose')
const task = mongoose.model('Task')

var router= express.Router();

router.get('/', (req, res) => {

    res.render('task/addEdit',{
        viewTitle: 'Update your to do list'
    })

})

router.post('/', (req, res)=>{

    addTask(req, res);
})

function addTask(req, res){

    var Task = task();
    Task.taskName = req.body.taskname;
    Task.taskDesc = req.body.taskdesc;
    Task.save((err, docs)=> {
        if(!err){
            res.redirect('task/list')
        }
        else{
            console.log('Error while saving: '+err);
        }
    })

}

router.get('/list', (req, res) => {
    task.find((err, docs) =>{
        if(!err){
            res.render('task/list', {
                list: docs.map(docs => docs.toJSON())
            })
        }
    })
})

router.get('/delete/:id', (req, res) => {
    task.findByIdAndRemove(req.params.id, (err, docs) => {
        if(!err){
            res.redirect('/task/list')
        }
        else{
            console.log('Error in deleting '+err)
        }
    })
})

module.exports = router;
const express = require('express')

const mongoose = require('mongoose')
const task = mongoose.model('Task')

const method = require('method-override')
var router = express.Router();

router.get('/', (req, res) => {

    res.render('task/addEdit', {
        viewTitle: 'Update ToDo list'
    })

})

router.post('/', (req, res) => {

    addTask(req, res);
})

function addTask(req, res) {

    var Task = task();
    Task.taskName = req.body.taskname;
    Task.taskDesc = req.body.taskdesc;
    Task.save((err, docs) => {
        if (!err) {
            res.redirect('task/list')
        }
        else {
            console.log('Error while saving: ' + err);
        }
    })

}

router.get('/list', (req, res) => {
    task.find((err, docs) => {
        if (!err) {
            res.render('task/list', {
                list: docs.map(docs => docs.toJSON())
            })
        }
    })
})

router.get('/delete/:id', (req, res) => {

    console.log(req.params.id);

    task.findByIdAndRemove(req.params.id, (err, docs) => {
        if (!err) {
            res.redirect('/task/list')
        }
        else {
            console.log('Error in deleting ' + err)
        }
    })
})


router.put('/edit/:id', (req, res) => {

    console.log(req.params.id);

    const tname = req.body.taskName
    const tdesc = req.body.taskDesc

    task.findByIdAndUpdate(req.params.id, { taskName: tname, taskDesc: tdesc }, (err, doc) => {

        if (!err) {

            res.redirect('/task/list')
        }
        else {
            console.log('Roor in updating ' + err)
        }
    })


})


module.exports = router;
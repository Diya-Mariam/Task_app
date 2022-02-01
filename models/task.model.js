const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({

    taskName: {
        type: String
    },

    taskDesc: {
        type: String
    }

})

mongoose.model('Task', taskSchema);
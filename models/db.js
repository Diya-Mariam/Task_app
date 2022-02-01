const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/taskDB', { useNewUrlParser : true }, (err) => {

if(!err){
    console.log("mongodb is successfully connected");

}
else{
    console.log('error in mongodb: '+err);
}
})

require('./task.model')
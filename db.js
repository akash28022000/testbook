const mongoose=require('mongoose');

//define the mongoose connection url

const mongoURL = 'mongodb://localhost:27017/hotelschart'
//set up mongo db connection
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
    })
    const db=mongoose.connection;
    db.on('connected',()=>{
        console.log('connected to mongo db server');
    })
    db.on('error',(err)=>{
        console.log('connected to mongo db server error');
    })

    db.on('disconnected',()=>{
        console.log('connected to mongo db server disconnected');
    })

    // edxport a database connection

    module.exports = db;
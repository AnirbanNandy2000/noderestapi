let express=require('express');
let app = express();
let dotenv=require('dotenv');
dotenv.config()
let port = process.env.PORT || 7800;
let mongo=require('mongodb');
let MongoClient=mongo.MongoClient;
let mongoUrl=process.env.LiveMongo;
let db;

//Api for orders
app.get('/order',(req,res)=>{
    db.collection('order').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//Api for users
app.get('/user',(req,res)=>{
    db.collection('user').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//Api for product details
app.get('/pdetails',(req,res)=>{
    db.collection('pdetails').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//Api for product variety 
app.get('/pvariety',(req,res)=>{
    db.collection('pvariety').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//Api for wishhlist items
app.get('/wishlist',(req,res)=>{
    db.collection('wishlist').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})


//connection with db
MongoClient.connect(mongoUrl,(err,client) => {
    if(err) console.log('Error while connecting');
    db=client.db('orders');
    app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
    })

})

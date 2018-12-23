// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if(err) {
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5c200a4b03327b5ea679fccd')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result)
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c20066d03327b5ea679fb9f')
    }, {
        $set: {
            name: 'Ben'
        },
        $inc: {
            age: 27
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result)
    })
    // client.close();
}); 
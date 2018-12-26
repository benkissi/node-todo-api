const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

var id = '5c237597076c0fac309a7cb7';
var userId = '5c209700853e22542c272a50';

if(!ObjectID.isValid(userId)) {
    return console.log('Id not valid');
}

// Todo.find({_id: id}).then((todos) => {
//     console.log('Todos', todos)
// });

// Todo.findOne({_id: id}).then((todo) => {
//     console.log('Todo', todo)
// });

// Todo.findById(id).then((todo) => {
//     if(!todo) {
//         return console.log('Id not found')
//     }

//     console.log('Todo By id', todo)  
// }).catch((e) => console.log(e));

User.findById(userId).then((user) => {
    if(!user) {
        return console.log('User not found');
    }

    console.log('User found', user);
}, (e)=>console.log('Id not valid',e))
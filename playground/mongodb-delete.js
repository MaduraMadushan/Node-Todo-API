const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
       return console.log('Unable to connect to MongoDB sever');
    }
    console.log('Connected to MongoDB server');
   
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    //db.collection('Users').deleteMany({name: 'Madura'});
    db.collection('Users').findOneAndDelete({_id: new ObjectID("5c25e24c9cec8fdaf4695a45")}).then((result) => {
        console.log(JSON.stringify(result, undefined, 2));
    });;
    //db.close();
});
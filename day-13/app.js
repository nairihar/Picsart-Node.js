const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://adminuser:AdminAdmin@cluster0.lgeyc.mongodb.net/test', {useNewUrlParser: true, useUnifiedTopology: true});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));


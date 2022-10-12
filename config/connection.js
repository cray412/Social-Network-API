const { connect, connection} = require('mongoose');

connect('mongoose://localhost/socialNetwork', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

module.exports = connection;
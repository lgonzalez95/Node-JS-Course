var configValues = require('./config');

module.exports = {
    getDbConnectionString: function() {
        return `mongodb+srv://${configValues.uname}:${configValues.pwd}@cluster0.gfouu.mongodb.net/TodosDB?retryWrites=true&w=majority`;
    }
}
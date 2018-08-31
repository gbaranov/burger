const connection = require('./connection.js');

var orm = {
    selectAll: function(cb) {
        var queryLine = "SELECT * FROM burgers";
        connection.query(queryLine, function (err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    insertOne: function(burgername, cb) {
        var queryLine = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryLine, [burgername], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    },
    updateOne: function(bool, id, cb) {
        var queryLine = "UPDATE burgers SET devoured = ? WHERE id = ?";
        connection.query(queryLine, [bool, id], function(err, result) {
            if (err) throw err;
            console.log(result);
            cb(result);
        });
    }
};

module.exports = orm;


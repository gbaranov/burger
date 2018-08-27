const connection = require('./connection.js');

var orm = {
    selectAll: function() {
        var queryLine = "SELECT * FROM burgers";
        connection.query(queryLine, function (err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(burgername) {
        var queryLine = "INSERT INTO burgers (burger_name) VALUES (?)";
        connection.query(queryLine, [burgername], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(id, bool) {
        var queryLine = "UPDATE burgers SET devoured = ? WHERE id = ?";
        connection.query(queryLine, [bool, id], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
};

module.exports = orm;


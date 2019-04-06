const bcrypt = require("bcrypt");

exports.hash = text => {
    return new Promise(function (resolve, reject) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) reject(err);
            bcrypt.hash(text, salt, function (err, hash) {
                if (err) reject(err);
                resolve(hash);
            });
        });
    })
};

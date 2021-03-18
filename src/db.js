const mongoose = require("mongoose");

module.exports = {
    connect: DB_HOST => {
        mongoose.set('useNewUrlParser', true);
        mongoose.set('useFindAndModify', false);
        mongoose.set('useCreateIndex', true);
        mongoose.set('useUnifiedTopology', true);
        mongoose.connect(DB_HOST);
        mongoose.connection.on(
            ("error"),
            (errMsg) => {
                console.error(errMsg);
                console.log("DB connection failed; make sure mongod.service is up");
                process.exit();
            }
        );
    },
    close: () => {
        mongoose.connection.close();
    }
}
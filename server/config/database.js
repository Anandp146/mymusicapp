const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
exports.connect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
        .then(() => {
            // console.log(process.env.DATABASE_URL)
            console.log(`Database Connection established  `)
        })
        .catch((err) => {
            console.error(err)
            console.log("Connection Issues with Database");
            process.exit(1);
        })
}
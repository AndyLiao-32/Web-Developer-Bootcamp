const mongoose = require("mongoose");
const {Schema} = mongoose; // equals to the code => const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleId: String
});

mongoose.model('users', userSchema);
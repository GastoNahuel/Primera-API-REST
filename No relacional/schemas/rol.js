const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rolSchema = new Schema({
    id: String,
    name: String,
    description: String
    }
);

const rolModel = mongoose.model("rol", rolSchema);

module.exports = rolModel;
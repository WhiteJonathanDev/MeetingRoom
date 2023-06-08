const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const meetingRoomSchema = new Schema({
    roomName: String,
    location: String,
});

module.exports = mongoose.model("MeetingRoom", meetingRoomSchema);
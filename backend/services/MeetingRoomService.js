const MeetingRoomModel = require("../models/MeetingRoom");

exports.getAllMeetingRooms = async () => {
    return await MeetingRoomModel.find();
};
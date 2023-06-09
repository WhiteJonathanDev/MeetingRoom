const MeetingRoomModel = require("../models/MeetingRoom");

exports.getAllMeetingRooms = async () => {
    return MeetingRoomModel.find()
};

exports.createMeetingRoom = async (data) => {
    const newMeetingRoom = new MeetingRoomModel(data)
    return await newMeetingRoom.save();
};
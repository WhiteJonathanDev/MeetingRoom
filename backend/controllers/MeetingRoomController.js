const meetingRoomService = require("../services/MeetingRoomService");

exports.getAllMeetingRooms = async (req, res) => {
    try {
        const meetingRooms = await meetingRoomService.getAllMeetingRooms();
        res.json({ data: meetingRooms, status: "success" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
const express = require("express");
const { getAllMeetingRooms } = require("../controllers/MeetingRoomController");

const router = express.Router();

router.route("/test").get(getAllMeetingRooms)

module.exports = router;
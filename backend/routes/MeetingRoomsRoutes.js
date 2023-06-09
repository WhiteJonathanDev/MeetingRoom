const express = require("express");
const { getAllMeetingRooms, createMeetingRoom } = require("../controllers/MeetingRoomController");

const router = express.Router();

router.route("/").get(getAllMeetingRooms)
router.route("/create").post(createMeetingRoom)

module.exports = router;
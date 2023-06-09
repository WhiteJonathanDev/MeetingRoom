const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')
const meetingRoomsRouter = require("./routes/MeetingRoomsRoutes");


const url = "mongodb+srv://jonathanwhitedev:G31gMWozDoxAg8Od@MeetingRoomReservation.zjrawj5.mongodb.net/MeetingRoomReservation?retryWrites=true&w=majority"


const app = express();

app.use(cors())
app.use(express.json());

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

app.use("/api", meetingRoomsRouter);

//configure mongoose
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('MongoDB database Connected...')).catch((err) => console.log(err))

module.exports = app;
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const meetingRoomsRouter = require("./routes/MeetingRoomsRoutes");
const url = "mongodb+srv://jonathanwhitedev:G31gMWozDoxAg8Od@meetingroomreservation.zjrawj5.mongodb.net/?retryWrites=true&w=majority"

//middleware
app.use(express.json());

app.listen(3001, () => {
    console.log("Server is running on port 3001");
});

app.use("/api/meetingRooms", meetingRoomsRouter);

//configure mongoose
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB database Connected...')).catch((err) => console.log(err))

module.exports = app;
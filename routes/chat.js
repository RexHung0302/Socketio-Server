var express = require("express");
var router = express.Router();
const socket = require("../bin/www");
const moment = require("moment");

/* GET users listing. */
router.post("/", function (req, res, next) {
  const io = socket.getSocketIo();

  io.emit("announcement", {
    id: "announcement",
    name: "announcement",
    data: {
      type: "text",
      text: `公告：${req.body.msg ? req.body.msg : "全體公告！"}`,
    },
    create_at: moment().format("YYYY-MM-DD HH:mm:ss"),
  });

  res.json({
    success: true,
    message: "Success",
  });
});

router.delete("/delete-all-rooms", function (req, res, next) {
  socket.cleanChatRooms();
  socket.updateSocketInfo();

  res.json({
    success: true,
    message: "Success",
  });
});

module.exports = router;

const socketService = (socket: any) => {
  // 접속한 클라이언트의 정보가 수신되면
  socket.on("login", function (data: any) {
    console.log(
      "Client logged-in:\n name:" + data.name + "\n userid: " + data.userid
    );

    socket.name = data.name;
    socket.userid = data.userid;
  });

  socket.on("chat", (data) => {
    console.log("Message from %s: %s", socket.name, data.msg);

    const msg = {
      from: {
        name: socket.name,
        userid: socket.userid,
      },
      msg: data.msg,
    };

    socket.broadcast.emit("chat", msg);
  });

  socket.on("forceDisconnect", () => {
    socket.disconnect();
  });

  socket.on("disconnect", () => {
    console.log("user disconnected: " + socket.name);
  });
};

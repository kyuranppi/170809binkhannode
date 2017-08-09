module.exports = function(io){
    io.on('connection', function (socket) {
        var nickk;
        socket.on('msg',function(data){
            io.sockets.emit('msg',{msg: data.msg});
        });
        socket.on('NewNick',function(data){
            nickk = data.nick;
            console.log(data.nick)
            io.sockets.emit('NickChange',{id:socket.id,nick:nickk});
        })
    });
}
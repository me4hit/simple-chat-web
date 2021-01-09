module.exports.on = async () => {

    io.on('connection', (socket) => {
        var username;
        var id;
        socket.on('joinroom', (msg) => {
            socket.join(msg.id);
            username= msg.username;
            id= msg.id;
            socket.to(`${msg.id}`).emit('check-online', msg.username+' đã tham gia vào cuộc trò chuyện')
        },username, id);

        socket.on('chat-send', (msg) => {
            socket.to(`${msg.romid}`).emit('chat-receive', msg);
        })
        
        socket.on('disconnecting', async () => {
            socket.to(`${id}`).emit('check-online', username+' đã rời khỏi cuộc trò chuyện')
        });
    })
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const socket = io();
const urlParams = new URLSearchParams(window.location.search);
var username = prompt("Nhập vào tên của bạn");
if (!username) {
    username = 'Ẩn danh'
}
function Element(id) {
    return document.getElementById(id)
}


const picker = new EmojiButton({
    position: 'top-end'
});
picker.on('emoji', emoji => {
    Element('input-chat').value += emoji;
    // Element('input-chat').focus()
});

Element('btn-icon').addEventListener('click', () => {
    picker.pickerVisible ? picker.hidePicker() : picker.showPicker(Element('btn-icon'));
});

socket.on('connect', function () {
    socket.emit('joinroom', {
        username: username,
        id: urlParams.get('id')
    })
    var noti = ' <div class="d-flex justify-content-center m-1"><small>' + username + ' đã tham gia vào cuộc trò chuyện</small></div>'
    Element('content-chat').insertAdjacentHTML('beforeend', noti)
})

socket.on('check-online', function (msg) {
    console.log(msg)
    var noti = ' <div class="d-flex justify-content-center m-1"><small>' + msg + '</small></div>'
    Element('content-chat').insertAdjacentHTML('beforeend', noti)
})

socket.on('chat-receive', function (msg) {
    console.log(msg)
    var newmess = '<div class=""><span class="content-mess you d-flex flex-column">' +
        '    <small class="you ">Fr: <ins><i>' + msg.username + '</i></ins></small>' +
        '  <span class="you">' + msg.content + '</span>' +
        '</span></div>';
    Element('content-chat').insertAdjacentHTML('beforeend', newmess)
})



Element('btn-send').addEventListener('click', () => {
    sendMess()

})

Element('input-chat').addEventListener("keyup", function (event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        sendMess()

    }
});


function sendMess() {
    var content = Element('input-chat').value;
    if (content) {
        Element('input-chat').value = ''
        socket.emit('chat-send', { username: username, content: content, romid: urlParams.get('id') })
        var newmess = ' <div class=""><span class="content-mess me">' + content + '</span></div>'
        Element('content-chat').insertAdjacentHTML('beforeend', newmess)
    }
}
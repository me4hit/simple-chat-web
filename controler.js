module.exports.generateNewIDRoom =  (socket) => {
    var newID;
    let flag = true
    while (flag == true) {
        newID = Math.floor(Math.random() * (9000 - 1000)) + 1000;
        var check = true;
        for (let i = 0; i < rooms.length; i++) {
            if (newID === rooms[i]) {
                check = false;
            }
            if (i == rooms.length - 1 && check == true) {
                flag = false;  
            }
        }
    }
    return newID;
}


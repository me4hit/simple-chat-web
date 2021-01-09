

function Element(id){
    return document.getElementById(id)
}

function openModalJoinRoom(){
    $('#exampleModalCenterJoinchat').modal();
    Element('btn-joinroom').addEventListener('click', ()=>{
        window.location.href = '/room?id=' +Element('input-romid').value;
     })
}
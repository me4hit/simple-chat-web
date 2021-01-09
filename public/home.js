

function Element(id){
    return document.getElementById(id)
}

function openModal() {
    $('#exampleModalCenter').modal();

    Element('btn-generateid').addEventListener('click', () => {
        fetch('/generatenewidroom')
            .then(response => response.json())
            .then(data => {
                var newId = data.newId.toString();
                Element('numberinput1').value = newId.charAt(0);
                Element('numberinput2').value = newId.charAt(1);
                Element('numberinput3').value = newId.charAt(2);
                Element('numberinput4').value = newId.charAt(3);
                Element('numberinput1').readOnly = true;
                Element('numberinput2').readOnly = true;
                Element('numberinput3').readOnly = true;
                Element('numberinput4').readOnly = true;

            });
    })

    Element('btn-joinroom').addEventListener('click', ()=>{
       window.location.href = '/room?id='+Element('numberinput1').value+Element('numberinput2').value+Element('numberinput3').value+Element('numberinput4').value
    })



}

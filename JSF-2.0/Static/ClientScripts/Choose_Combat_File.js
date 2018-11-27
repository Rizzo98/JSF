$(document).ready(()=>{

  var socket = io.connect('http://localhost:8080');
  socket.emit('Choose_cb_request',usrId)

  socket.on('Choose_cb_response',(cb)=>{
    cb.map((el)=>{
      $('#cb_table > tbody:last-child').append('<tr cbID = '+ el.id+'><td><input type="checkbox" value=""></td><td>'+el.name+'</td><td>cost</td>');
    })
  })

  $('#confirm').click(()=>{
    cbList = []
    $('input[type=checkbox]').each(function () {
      if(this.checked){
        cbList.push(parseInt($(this).parent().parent().attr('cbID')))
      }
    })

    if(cbList.length>0){
      //TODO cbList contiene gli id dei combat file selezionati
    }

  })

})

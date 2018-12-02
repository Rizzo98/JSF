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
      socket.emit('New_Match_request',{type:1})
      socket.on('New_Match_response',(id)=>{
            post('/match/'+id,{cbL:cbList.join(';')})
      })
    }

  })

})


function post(path, params, method) {
    method = method || "post";

    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
        }
    }

    document.body.appendChild(form);
    form.submit();
}

//Form Validation
function validateForm() {
  var campaign = document.getElementById("campaign");
  var userEmail = document.getElementById("userEmail");
  var userPsw = document.getElementById("userPsw");
  var destination = document.getElementById("destination");
  var form2 = document.getElementById("form2");
    
  if (campaign.value == "") {
      alert("Nome da campanha não informado.");
      campaign.focus()
      return false;
    }

    if (userEmail.value == "") {
      alert("Email não informado.");
      userEmail.focus()
      return false;
    }

    if (userPsw.value == "") {
      alert("Senha não informada.");
      userPsw.focus()
      return false;
    }

    if (destination.value == "") {
      alert("Destino não informado");
      destination.focus()
      return false;
    }


  }

// Mouse form event
function mouseDown() {
  document.getElementById("form-button").style.backgroundColor = "#51f307";
}

function mouseUp() {
  document.getElementById("form-button").style.backgroundColor = "#00CC33";
}

//Published campaign

function publish(event){
  var completeName = document.getElementById("completeName");
  var cpf = document.getElementById("cpf");
  var birthday = document.getElementById("birthday");
  var limit_date = document.getElementById("limit_date");
  var mensagem = document.getElementById("mensagem");

  if (completeName.value == "") {
      alert("Nome não informado");
      completeName.focus();
      return false;
    }

  else if (cpf.value == "" | cpf.length < 11) {
      alert("Verifique o campo CPF.")
      cpf.focus()
      return false;
    }

    else if (birthday.value == "") {
      alert("Verifique data de nascimento");
      birthday.focus()
      return false;
    }

    else if (limit_date.value == "") {
      alert("Verifique data final da campanha");
      limit_date.focus()
      return false;
    }

    else if (mensagem.value == "") {
      alert("Verifique campo de mensagem");
      mensagem.focus()
      return false;
    } else {
      alert("CoTrip publicada com sucesso!\n Que tal compartilhar o link com geral!?");
      form2.submit();
    }
  }


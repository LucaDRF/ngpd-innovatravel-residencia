var form0 = document.getElementById("form0");

function validateForm0() {

  var origin = document.getElementById("origin");
  var destination = document.getElementById("destination");
  var moneyGoal = document.getElementById("moneyGoal");

  if (origin.value == "") {
    alert("Origem não informada.");
    origin.focus()
    return false;
  }

  if (destination.value == "") {
    alert("Destino não informado.");
    destination.focus()
    return false;
  }

  if (moneyGoal.value == "") {
    alert("Preencha o valor a ser arrecadado.");
    moneyGoal.focus()
    return false;
  }

  form0.submit();

}

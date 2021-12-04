
var form1 = document.getElementById("form1");


function setHiddenFildsValuesFromURLParameters(){

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const originQueryStringParameterValue = urlParams.get('origin');
  const destinationQueryStringParameterValue = urlParams.get('destination');
  const moneyGoalQueryStringParameterValue = urlParams.get('moneyGoal');

  var origin = document.getElementById("origin");
  var destination = document.getElementById("destination");
  var moneyGoal = document.getElementById("moneyGoal");

  origin.value = originQueryStringParameterValue;
  destination.value = destinationQueryStringParameterValue;
  moneyGoal.value = moneyGoalQueryStringParameterValue;

}

setHiddenFildsValuesFromURLParameters();


//Form Validation
function validateForm() {

  var campaign = document.getElementById("campaign");
  var userEmail = document.getElementById("userEmail");
  var userPsw = document.getElementById("userPsw");

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

    form1.submit();

}

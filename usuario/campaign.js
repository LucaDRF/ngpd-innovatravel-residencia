function configPageFromURLParameters(){

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const originQueryStringParameterValue = urlParams.get('origin');
  const destinationQueryStringParameterValue = urlParams.get('destination');
  const moneyGoalQueryStringParameterValue = urlParams.get('moneyGoal');
  const campaignQueryStringParameterValue = urlParams.get('campaign');
  const messageQueryStringParameterValue = urlParams.get('message');
  const limit_dateQueryStringParameterValue = urlParams.get('limit_date');

  var limitDate = new Date(limit_dateQueryStringParameterValue);

  var options = {
    year: "numeric",
    month: "long"
};

  var campaign = document.getElementById("mainText");
  var origin = document.getElementById("origin");
  var destination = document.getElementById("destination");
  var message = document.getElementById("sobreParagrafo");
  var moneyGoal = document.getElementById("greenprice");
  var limit_date = document.getElementById("limit_date");

  campaign.innerHTML = campaignQueryStringParameterValue;
  origin.innerHTML = originQueryStringParameterValue;
  destination.innerHTML = destinationQueryStringParameterValue;
  message.innerHTML = messageQueryStringParameterValue;
  moneyGoal.innerHTML = "R$ " + moneyGoalQueryStringParameterValue;
  limit_date.innerHTML = limitDate.toLocaleString("pt-BR", options);;

}

configPageFromURLParameters();
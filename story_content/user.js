function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5nGoAXDCxzA":
        Script1();
        break;
      case "6ZAKoYXepv4":
        Script2();
        break;
  }
}

function Script1()
{
  var currentTime = new Date()
var day = currentTime.getDate()
var month = currentTime.getMonth() + 1
var year = currentTime.getFullYear()
var dateString=day + "/" + month + "/" + year
var player = GetPlayer();
player.SetVar("SystemDate",dateString);
player.SetVar("day",day);
player.SetVar("month",month);
player.SetVar("year",year);
}

function Script2()
{
  const url = "https://script.google.com/macros/s/AKfycbyMevshqKP1VXga9XoadZl6pDXjzCkETnlhXaqTGIFkQdyRuwYojRrxfZ6FTuKKjUq7Hw/exec";

const player = GetPlayer();
let feedBack1 = player.GetVar("vremya");
let feedBack2 = player.GetVar("UserFeedback");
let feedBack3 = player.GetVar("balls");
let feedBack4 = player.GetVar("proxodballs");
let feedBack5 = player.GetVar("failpoints");
let feedBack6 = player.GetVar("misspoints");

fetch(url,{
  method: 'POST',
  mode: 'no-cors', 
  cache: 'no-cache', 
  headers: {'Content-Type': 'application/json'},
  redirect: 'follow',
  body: JSON.stringify({text1: feedBack1, text2: feedBack2, text3: feedBack3, text4: feedBack4, text5: feedBack5, text6: feedBack6}) 
});
}


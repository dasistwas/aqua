function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6pRnBg4HfGK":
        Script1();
        break;
      case "6hJ2qCuCVzP":
        Script2();
        break;
      case "6oXZz4v4iWa":
        Script3();
        break;
      case "6WLDtjTlpE8":
        Script4();
        break;
      case "6iInWCs8VPp":
        Script5();
        break;
      case "6l8slKViLcD":
        Script6();
        break;
      case "5rO8NozcHDR":
        Script7();
        break;
      case "6Gs6LRXWutg":
        Script8();
        break;
      case "5tG4sZFTWDo":
        Script9();
        break;
      case "5b5hQUEiNzX":
        Script10();
        break;
      case "5ZgIl5uwzLo":
        Script11();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var myName = "";
var lastname = "";
var firstname = "";

if (typeof lmsAPI !== "undefined" && typeof lmsAPI.GetStudentName == 'function') { 
  myName  = lmsAPI.GetStudentName();
  var arrayOfNames = myName.split(', ');
  if (arrayOfNames.length > 1) {
   lastname = arrayOfNames(arrayOfNames.length-1);
  }
   firstname = arrayOfNames[0];
   player.SetVar("Name", lastname);
} else {
  myName = "Test User";
}

player.SetVar("username", myName);
}

function Script2()
{
  var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var year = currentTime.getFullYear();
var day = currentTime.getDate();
var month = currentTime.getMonth() + 1;
var seconds = currentTime.getSeconds();
if (hours == 0){
  hours = 12;
}

var player =  GetPlayer();
player.SetVar("day", day);
player.SetVar("minutes", minutes);
player.SetVar("year", year);
player.SetVar("month", month);
player.SetVar("hours", hours);
player.SetVar("seconds", seconds);
}

function Script3()
{
  var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var year = currentTime.getFullYear();
var day = currentTime.getDate();
var month = currentTime.getMonth() + 1;
var seconds = currentTime.getSeconds();
if (hours == 0){
  hours = 12;
}

var player =  GetPlayer();
player.SetVar("day", day);
player.SetVar("minutes", minutes);
player.SetVar("year", year);
player.SetVar("month", month);
player.SetVar("hours", hours);
player.SetVar("seconds", seconds);
}

function Script4()
{
  var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var year = currentTime.getFullYear();
var day = currentTime.getDate();
var month = currentTime.getMonth() + 1;
var seconds = currentTime.getSeconds();
if (hours == 0){
  hours = 12;
}

var player =  GetPlayer();
player.SetVar("day", day);
player.SetVar("minutes", minutes);
player.SetVar("year", year);
player.SetVar("month", month);
player.SetVar("hours", hours);
player.SetVar("seconds", seconds);
}

function Script5()
{
  var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var year = currentTime.getFullYear();
var day = currentTime.getDate();
var month = currentTime.getMonth() + 1;
var seconds = currentTime.getSeconds();
if (hours == 0){
  hours = 12;
}

var player =  GetPlayer();
player.SetVar("day", day);
player.SetVar("minutes", minutes);
player.SetVar("year", year);
player.SetVar("month", month);
player.SetVar("hours", hours);
player.SetVar("seconds", seconds);
}

function Script6()
{
  var player=GetPlayer();
var gegeben = player.GetVar("gegeben");
var gewaehlterscheinmuenze = player.GetVar("gewaehlterScheinMuenze");
var scheinemuenzen = parseFloat(player.GetVar("gegebenScheineMuenzen"));
var numpadgedrueckt = player.GetVar("numPadGedrueckt");
var gesamtpreis = player.GetVar("Gesamtpreis");

var gesamteingabe = scheinemuenzen + gegeben;
var retourgeld = gesamtpreis - gesamteingabe;

var txtnumpad = gegeben.toFixed(2);
txtnumpad = txtnumpad.replace(".", ",");

var txtgesamtpreis = gesamtpreis.toFixed(2);
txtgesamtpreis = txtgesamtpreis.replace(".", ",");

var txtscheinemuenzen = scheinemuenzen.toFixed(2);
txtscheinemuenzen = txtscheinemuenzen.replace(".", ",");

var txtretourgeld = retourgeld.toFixed(2);
txtretourgeld = txtretourgeld.replace(".", ",");

if ((numpadgedrueckt == "nichts") && (gewaehlterscheinmuenze == "nichts")) {
    txtretourgeld = "0,00";
    txtnumpad = txtgesamtpreis;
    txtscheinemuenzen = "0,00";
}

player.SetVar("txtNumPad", txtnumpad);
player.SetVar("txtScheineMuenzen", txtscheinemuenzen);
player.SetVar("Retourgeld", retourgeld);
player.SetVar("txtRetourgeld", txtretourgeld);
player.SetVar("txtGesamtpreis", txtgesamtpreis);
}

function Script7()
{
  var player=GetPlayer();
var gegeben = player.GetVar("gegeben");
var gewaehlterscheinmuenze = player.GetVar("gewaehlterScheinMuenze");
var scheinemuenzen = parseFloat(player.GetVar("gegebenScheineMuenzen"));
var numpadgedrueckt = player.GetVar("numPadGedrueckt");
var gesamtpreis = player.GetVar("Gesamtpreis");

var gesamteingabe = scheinemuenzen + gegeben;
var retourgeld = gesamtpreis - gesamteingabe;

var txtnumpad = gegeben.toFixed(2);
txtnumpad = txtnumpad.replace(".", ",");

var txtgesamtpreis = gesamtpreis.toFixed(2);
txtgesamtpreis = txtgesamtpreis.replace(".", ",");

var txtscheinemuenzen = scheinemuenzen.toFixed(2);
txtscheinemuenzen = txtscheinemuenzen.replace(".", ",");

var txtretourgeld = retourgeld.toFixed(2);
txtretourgeld = txtretourgeld.replace(".", ",");

if ((numpadgedrueckt == "nichts") && (gewaehlterscheinmuenze == "nichts")) {
    txtretourgeld = "0,00";
    txtnumpad = txtgesamtpreis;
    txtscheinemuenzen = "0,00";
}

player.SetVar("txtNumPad", txtnumpad);
player.SetVar("txtScheineMuenzen", txtscheinemuenzen);
player.SetVar("Retourgeld", retourgeld);
player.SetVar("txtRetourgeld", txtretourgeld);
player.SetVar("txtGesamtpreis", txtgesamtpreis);
}

function Script8()
{
  var player=GetPlayer();
var number = 0;
var text = number.toFixed(2);
text = text.replace(".", ",");
player.SetVar("gegeben", number);
player.SetVar("txtNumPad", text);
}

function Script9()
{
  var player=GetPlayer();
var number = player.GetVar("gegeben");
number = number/10;
var text = number.toFixed(3);
if (text.length > 1){
text = text.substr(0,text.length-1);
} else if (text.length == 1) {
text = "0";
}
number = parseFloat(text);
text = number.toFixed(2);
text = text.replace(".", ",");
player.SetVar("gegeben", number);
player.SetVar("txtNumPad", text);
}

function Script10()
{
  var player=GetPlayer();
var gesamtpreis = player.GetVar("Gesamtpreis");
var txtgesamtpreis = gesamtpreis.toFixed(2);
txtgesamtpreis = txtgesamtpreis.replace(".", ",");

player.SetVar("gegeben", 0);
player.SetVar("gegebenScheineMuenzen",0);
player.SetVar("txtNumPad", txtgesamtpreis);
player.SetVar("txtScheineMuenzen", "0,00");
player.SetVar("Retourgeld",0);
player.SetVar("txtRetourgeld","0,00");
player.SetVar("gewaehlterScheinMuenze","nichts");
player.SetVar("numPadGedrueckt", "nichts");

}

function Script11()
{
  var currentTime = new Date();
var hours = currentTime.getHours();
var minutes = currentTime.getMinutes();
var year = currentTime.getFullYear();
var day = currentTime.getDate();
var month = currentTime.getMonth() + 1;
var seconds = currentTime.getSeconds();
if (hours == 0){
  hours = 12;
}

var player =  GetPlayer();
player.SetVar("day", day);
player.SetVar("minutes", minutes);
player.SetVar("year", year);
player.SetVar("month", month);
player.SetVar("hours", hours);
player.SetVar("seconds", seconds);
}


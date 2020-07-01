// Catching all needed element with DOM
var capital = document.getElementById("capital");
var flag = document.querySelector("#flag-containe img");
var population = document.getElementById("population");
var currencies = document.getElementById("currencies");
var subregion = document.getElementById("subregion");
var region = document.getElementById("region");
var dialingCode = document.getElementById("dialing-code");
var flagImage = document.getElementById("flagImage");

// array use to stock my global object
var arrayGlobal = [];



function ajaxGet(url, callback) {
  //  HTTP requets
  var req = new XMLHttpRequest();
  req.open("GET", url);
  req.addEventListener("load", function () {
    if (req.status >= 200 && req.status < 400) {
      // Appelle la fonction callback en lui passant la réponse de la requête
      callback(req.responseText);
    } else {
      console.error(req.status + " " + req.statusText + " " + url);
    }
  });
  req.addEventListener("error", function () {
    console.error("Erreur réseau avec l'URL " + url);
  });
  req.send(null);
}
ajaxGet("https://restcountries.eu/rest/v2/all", function (response) {
  var countries = JSON.parse(response);
  // myArrayOfCountry.push(countries);

  countries.forEach((countrie) => {
    
    var myArrayOfCountry = countrie.name;
    arrayGlobal.push(countrie)
    
      // add <option> to <select>
    var selectList = document.createElement("option");
    document.getElementById("countries").appendChild(selectList);

    //Create and append the options
    for (var i = 0; i < myArrayOfCountry.length; i++) {
      var option = document.createElement("option");
      option.value = myArrayOfCountry[i];
      option.text = myArrayOfCountry[i];
      selectList.appendChild(option);
    }
  });
});



function selectChange() {
  var selectCountry = document.getElementById("countries").value;
  // finc the input in arrayGlobal
  const found = arrayGlobal.find(element => element.name == selectCountry);

  // country Info
  capital.textContent = found.capital;
  population.textContent = found.population;
  currencies.textContent = found.currencies[0].symbol + " - " + found.currencies[0].code + ", " + found.currencies[0].name;
  subregion.textContent = found.subregion;
  region.textContent = found.region;
  dialingCode.textContent = found.callingCodes;

  // flag image
  var flagUrl = found.flag
  flagImage.setAttribute("src", flagUrl);
  // document.body.style.backgroundImage = "url('img_tree.png')";

}

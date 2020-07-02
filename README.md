
# Project Name : rest-countries-API
> This website will show you a lot of information about many countries.

## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Technologies](#technologies)
* [Code example](#Code Example)
* [Contact](#contact)
* [Website](#website)

## General info
My teacher ask me to use rescontries API using ajax request.
So i made this project.
After chosing a country in the list all the information of the country will dynamicly change.

## Screenshots
![Example screenshot]
<img src="https://user-images.githubusercontent.com/56839789/86288514-53bf2a80-bbea-11ea-8f25-9216f06266ef.png" alt="" width="50%;">
<img src="https://user-images.githubusercontent.com/56839789/86289352-d7c5e200-bbeb-11ea-8d89-bb45ba5ba062.gif" alt="" width="50%;">


## Technologies
* HTML
* CSS
* JavaScript
* restcountries API
* Ajax
* Json


## Code Example
Show examples of usage:
`function ajaxGet(url, callback) {
  //  HTTP requets
  var req = new XMLHttpRequest();
  // open the request and past HTTP method name and the resource as parameters
  req.open("GET", url);
  req.addEventListener("load", function () {
    // if request succes
    if (req.status >= 200 && req.status < 400) {
      // callback
      callback(req.responseText);
    } else {
      console.error(req.status + " " + req.statusText + " " + url);
    }
  });
  // listen for error
  req.addEventListener("error", function () {
    console.error("Erreur réseau avec l'URL " + url);
  });
  req.send(null);
}`

## What i learn, pratice: 
<ul>
 <li>XMLHttpRequest()
 <li>Handle the answer of the server
 <li>Get
 <li>JSON
</ul>
 
 
## Status
Project is:  _finished_


## Contact
Created by Alexandre Rodriguez
revolalex@gmail.com


## Website
link: https://my-countries-api.netlify.app

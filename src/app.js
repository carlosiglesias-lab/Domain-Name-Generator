/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];

  let DnsGenerator = (pronoumArray, adjArray, noumArray) => {
    let dns = [];
    for (
      let iteratorOne = 0;
      iteratorOne < pronoumArray.length;
      iteratorOne++
    ) {
      for (let iteratorTwo = 0; iteratorTwo < adjArray.length; iteratorTwo++) {
        for (
          let iteratorThree = 0;
          iteratorThree < noumArray.length;
          iteratorThree++
        ) {
          dns.push(
            pronoumArray[iteratorOne] +
              adjArray[iteratorTwo] +
              noumArray[iteratorThree] +
              ".com"
          );
        }
      }
    }
    return dns;
  };
  let divContainer = "";
  DnsGenerator(pronoun, adj, noun).forEach(element => {
    divContainer =
      divContainer + '<li class="list-group-item">' + element + "</li>";
  });
  document.querySelector("#possibleDNS").innerHTML = divContainer;
  //console.log(DnsGenerator(pronoun, adj, noun));
};

/* FUTURA VERSION QUE ADMITA INPUT DE PALABRAS Y AL  HACER CLIC EJECUTE

document.querySelector("#myBtn").onclick = console.log("gdfgdf");

function hola() {
  document.querySelector("#possibleDNS").innerHTML = "hello";
}
*/

//let pronoum = document.querySelector("#pronoum-input");

//console.log(pronoum);

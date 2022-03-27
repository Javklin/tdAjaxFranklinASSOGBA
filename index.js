var indexpage = 1;
console.log(indexpage);
var lienPrec = document.getElementById("pagePre");
var lienSui = document.getElementById("pageSui");

lienSui.addEventListener("click", function () {
  console.log(indexpage);
  if (indexpage != 19) {
    indexpage++;
    readTextFile(
      " https://iutdoua-web.univ-lyon1.fr/~p2000108/book/chapitre" +
        indexpage +
        ".json",
      function (text) {
        var toRemove = document.querySelectorAll("p");
        toRemove.forEach((message) => {
          message.remove();
        });
        var data = JSON.parse(text);
        console.log(data);
        var dataToInsert = document.createElement("p");
        dataToInsert.innerHTML = JSON.stringify(data.txt);
        var textNode = document.getElementById("txtLivre");
        textNode.parentNode.insertBefore(dataToInsert, textNode.nextSibling);
      }
    );
    history.pushState({}, "tdAjaxFranklinASSOGBA/index.html");
  }
});

lienPrec.addEventListener("click", function () {
  console.log(indexpage);
  if (indexpage != 1) {
    indexpage--;
    readTextFile(
      " https://iutdoua-web.univ-lyon1.fr/~p2000108/book/chapitre" +
        indexpage +
        ".json",
      function (text) {
        var toRemove = document.querySelectorAll("p");
        toRemove.forEach((message) => {
          message.remove();
        });
        var data = JSON.parse(text);
        console.log(data);
        var dataToInsert = document.createElement("p");
        dataToInsert.innerHTML = JSON.stringify(data.txt);
        var textNode = document.getElementById("txtLivre");
        textNode.parentNode.insertBefore(dataToInsert, textNode.nextSibling);
      }
    );
    history.pushState({}, "tdAjaxFranklinASSOGBA/index.html");
  }
});

function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function () {
    if (rawFile.readyState === 4 && rawFile.status == "200") {
      callback(rawFile.responseText);
    }
  };
  rawFile.send(null);
}

//usage
readTextFile(
  " https://iutdoua-web.univ-lyon1.fr/~p2000108/book/chapitre" +
    indexpage +
    ".json",
  function (text) {
    var data = JSON.parse(text);
    console.log(data);
    var dataToInsert = document.createElement("p");
    dataToInsert.innerHTML = JSON.stringify(data.txt);
    var textNode = document.getElementById("txtLivre");
    textNode.parentNode.insertBefore(dataToInsert, textNode.nextSibling);
  }
);

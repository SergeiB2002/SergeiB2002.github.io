function isAN(value) {
    if(value instanceof Number)
    value = value.valueOf();
    return  isFinite(value) && value === parseFloat(value, 10);
  }

  function sum() {
    let kol = document.getElementsByName("kolvo");
    let cena = document.getElementsByName("cena");
    let s = parseFloat(cena[0].value) * parseFloat(kol[0].value);
    let c = parseFloat(cena[0].value);
    let k = parseFloat(kol[0].value);
    if(!isAN(c) || c<0){
      alert("Укажите цену правильно");
      return false;
    }
    if(!Number.isInteger(k)){
      alert("Укажите количество товаров правильно");
      return false;
    }
    document.getElementById("result").innerHTML =
            parseFloat(cena[0].value) * parseFloat(kol[0].value);
    document.getElementById("result").innerHTML = "Стоимость: "+s+" руб";
    return false;
  }

  function onClick() {
    return sum();
  }

  window.addEventListener("DOMContentLoaded", function (event) {
     console.log("DOM fully loaded and parsed");
     let b = document.getElementById("button");
     b.addEventListener("click", onClick);
  });
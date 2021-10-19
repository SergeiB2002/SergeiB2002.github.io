let param = {
    "Options": {
    "option1": 34800,
    "option2": 6000,
    "option3": 5
    },
    "checkbox1": {
    "prop-1": 1
    },
    "prodType":
    [17900, 230000, 3000000]
};
console.log(param);
let pr=0;
let pch=0;
window.addEventListener("DOMContentLoaded", function (event) {
    let p1 = document.getElementsByName("pole1");
    let r = document.getElementById("Stoimost");
    let s = document.getElementsByName("prodType");
    s[0].addEventListener("change", function(event) {
      let select = event.target;
      console.log(select.value);
      let re = /^\s*\d+\s*$/;
      if(re.exec(p1[0].value))
      {
        if (select.value == "1")
        {r.innerHTML=param.prodType[0]*p1[0].value;}
        if (select.value == "2")
        {
          r.innerHTML=(param.prodType[1]+pr)*p1[0].value;
          let rad = document.querySelectorAll(".prodOptions input[type=radio]");
          rad.forEach(function(radio) {
          radio.addEventListener("change", function(event) {
          rad = event.target;
          console.log(rad.value);
          if(re.exec(p1[0].value))
          {
            if(document.getElementById("option1").checked)
            {
                r.innerHTML=(param.prodType[1]+
                             param.Options.option1)*p1[0].value;
                pr=param.Options.option1;
            }
            if(document.getElementById("option2").checked)
            {
                r.innerHTML=(param.prodType[1]+
                             param.Options.option2)*p1[0].value;
                pr=param.Options.option2;
            }
            if(document.getElementById("option3").checked)
            {
                r.innerHTML=(param.prodType[1]+
                             param.Options.option3)*p1[0].value;
                pr=param.Options.option3;
            }
        }
        else {alert("Некорректный ввод");}
        });    });
        }
        if (select.value == "3")
        {
          r.innerHTML=(param.prodType[2]+pch)*p1[0].value;
          let ch = document.querySelectorAll(".checkbox1 input[type=checkbox]");
          ch.forEach(function(checkbox) {
          checkbox.addEventListener("change", function(event) {
          ch = event.target;
          console.log(ch.value);
          if(re.exec(p1[0].value))
          {
            if(document.getElementById("ch1").checked)
            {
                r.innerHTML=(param.prodType[2]+
                             param.checkbox1["prop-1"])*p1[0].value;
                pch=param.checkbox1["prop-1"];
            }
            else
            {
                r.innerHTML=(param.prodType[2])*p1[0].value;
                pch=0;
            }
          }
          else alert("Некорректный ввод");
        });
      });
      }
    }
  else {alert("Некорректный ввод");}
    });
    return false;
});
window.addEventListener("DOMContentLoaded", function (event) {
let s = document.getElementsByName("prodType");
s[0].addEventListener("change", function(event) {
let select = event.target;
let radios = document.getElementById("prodOptions");
console.log(select.value);
radios.style.display = (select.value == "2" ? "block" : "none");
});
let r = document.querySelectorAll(".prodOptions input[type=radio]");
r.forEach(function(radio) {
radio.addEventListener("change", function(event) {
  let r = event.target;
  console.log(r.value);
});
});
});
window.addEventListener("DOMContentLoaded", function (event) {
let s = document.getElementsByName("prodType");
s[0].addEventListener("change", function(event) {
  let select = event.target;
  let checkboxes = document.getElementById("checkbox1");
  console.log(select.value);
  checkboxes.style.display = (select.value == "3" ? "block" : "none");
});
let r = document.querySelectorAll(".checkbox1 input[type=checkbox]");
c.forEach(function(checkbox) {
  checkbox.addEventListener("change", function(event) {
    let c = event.target;
    console.log(r.value);
  });
});
});

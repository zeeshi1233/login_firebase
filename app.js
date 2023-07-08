function fetchQna() {
    
    fetch("question.JSON")
    .then(function(data) {
        return data.json();
    })
    .then(function(quest) {
        
        localStorage.setItem("questions", JSON.stringify(quest));
    });
    
};

var old=JSON.parse(localStorage.getItem("questions"));
if (!old) {
    fetchQna();
}
  
  function full() {
     var whr = document.getElementById("js");
    var qn = document.getElementById("qn");
    var op1 = document.getElementById("op1");
    var op2 = document.getElementById("op2");
    var op3 = document.getElementById("op3");
    var op4 = document.getElementById("op4");
    var ans = document.getElementById("ans");
  if (whr.value!="" && qn.value!=""&&op1.value!=""&&op2.value!=""&&op3.value!=""&&op4.value!=""&&ans.value!="") {
    
      var addQna = {
          ques: qn.value,
          op1: op1.value,
          op2: op2.value,
          op3: op3.value,
          op4: op4.value,
          ans: ans.value
        };
        var old=JSON.parse(localStorage.getItem("questions"));
        var part=old[whr.value]
        part.push(addQna);
        old[whr.value]=part
        
        localStorage.setItem("questions",JSON.stringify(old))
  alert("Question added successfully!");
  whr.value =" "
  qn.value =" "
  op1.value=" "
  op2.value=" "
  op3.value=" "
  op4.value=" "
  ans.value=" "
}
else{
    whr.style.border ="1px solid red "
    qn.style.border ="1px solid red "
    op1.style.border="1px solid red"
    op2.style.border="1px solid red"
    op3.style.border="1px solid red"
    op4.style.border="1px solid red"
    ans.style.border="1px solid red"
    
}
}
window.onload = function() {
    
    
    
    var question=document.getElementById("question") 
var op1=document.getElementById("qn1") 
var op2=document.getElementById("qn2") 
var op3=document.getElementById("qn3") 
var op4=document.getElementById("qn4") 
var btn=document.getElementById("next");
var btn1=document.getElementById("csnext");
var btn2=document.getElementById("jsnext");
var i=0;
var q=0;
var points=0;
function html() {
    var quest=JSON.parse(localStorage.getItem("questions")); 
    if (i<quest.html.length) {
        question.innerHTML= quest.html[i].ques;
        op1.innerHTML = quest.html[i].op1;
        op2.innerHTML = quest.html[i].op2;
        op3.innerHTML = quest.html[i].op3;
        op4.innerHTML = quest.html[i].op4;
    }
    else{
        alert("res")
        document.getElementById("first").style.display="none"
        document.getElementById("load").style.display="flex" 
    }
}
html() 
function css() {
    var quest=JSON.parse(localStorage.getItem("questions")); 
    if (i<quest.css.length) {
        document.getElementById("css_ques").innerHTML=quest.css[i].ques;
        document.getElementById("cs1").innerHTML=quest.css[i].op1; 
        document.getElementById("cs2").innerHTML=quest.css[i].op2;
        document.getElementById("cs3").innerHTML=quest.css[i].op3;
        document.getElementById("cs4").innerHTML=quest.css[i].op4;   
    }
    else{
        alert("res") 
        document.getElementById("second").style.display="none"
        document.getElementById("load").style.display="flex" 
    }
    
}
css() 



function js() {
    var quest=JSON.parse(localStorage.getItem("questions")); 
    if (i<quest.js.length) {
        document.getElementById("js_ques").innerHTML=`Q ${q=q+1}`+ " " + quest.js[i].ques;
        document.getElementById("js1").innerHTML=quest.js[i].op1; 
        document.getElementById("js2").innerHTML=quest.js[i].op2;
        document.getElementById("js3").innerHTML=quest.js[i].op3;
        document.getElementById("js4").innerHTML=quest.js[i].op4;   
    }
    else{
        alert("res") 
        document.getElementById("third").style.display="none"
        document.getElementById("load").style.display="flex" 
    }
}
js() 



function enable(){
    var input=document.querySelector("input:checked");
    input.checked=false
}

btn.addEventListener("click", check);

function check() {
    var quest=JSON.parse(localStorage.getItem("questions"));
    console.log(quest);
    var input = document.querySelector("input[name='ans']:checked + label");
    if (input.innerText == quest.html[i].ans) {
        points += 5;
        console.log(points);
    }
    i++;
    enable();
    per();
    html();
}

function per() {
    var quest=JSON.parse(localStorage.getItem("questions"));
    var whr=JSON.parse(localStorage.getItem("categ")); 
    var total=whr.length * 5;
    var per= Math.floor((points /total ) * 100);
    let circularProgress = document.querySelector(".circular-progress");
    let progressValue = document.querySelector(".progress-value");
    let progressStartValue = -1;
    let progressEndValue = per;
    let speed = 20;
    let progress = setInterval(() => {
        progressStartValue++;
        progressValue.textContent = `${progressStartValue}%`;
        circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`;
        if (progressStartValue == progressEndValue) {
            clearInterval(progress);
        }
        
        if (progressEndValue <= 100 && progressEndValue >= 90) {
            document.getElementById("grd").textContent = "Grade A+1";
        } else if (progressEndValue <= 90 && progressEndValue >= 80) {
            document.getElementById("grd").textContent = "Grade A1";
        } else if (progressEndValue <= 80 && progressEndValue >= 70) {
            document.getElementById("grd").textContent = "Grade A";
        } else if (progressEndValue <= 70 && progressEndValue >= 60) {
            document.getElementById("grd").textContent = "Grade B";
        } else if (progressEndValue <= 60 && progressEndValue >= 50) {
            document.getElementById("grd").textContent = "Grade C";
        } else if (progressEndValue <= 40 && progressEndValue >= 33) {
            document.getElementById("grd").textContent = "Grade D";
        } else  {
            document.getElementById("grd").textContent = "Grade F";
        }
    }, speed);
}




btn1.addEventListener("click",cscheck);
function cscheck() {
        var quest=JSON.parse(localStorage.getItem("questions"));
    var input=document.querySelector("input[name='css']:checked + label");
    console.log(quest.css[i].ans);
    if (input.innerText==quest.css[i].ans) {
           points+=5;
   console.log(points);
}
i++;
css()   
enable()
per()
}


btn2.addEventListener("click",jscheck);
function jscheck() {
        var quest=JSON.parse(localStorage.getItem("questions"));
    var input=document.querySelector("input[name='js']:checked + label");
    console.log(quest.js[i].ans);
    if (input.innerText==quest.js[i].ans) {
           points+=5;
           console.log(points);
        }
        i++;
        js() 
        enable()
        per()
        }
        // // circle loader
    }

    
function first() {
    var quest=JSON.parse(localStorage.getItem("questions"));
    localStorage.setItem("categ",JSON.stringify(quest.html))
    document.getElementById("first").style.display = "grid";
    document.getElementById("cont").style.display = "none";
}
function sec() {
    var quest=JSON.parse(localStorage.getItem("questions"));
    localStorage.setItem("categ",JSON.stringify(quest.css))
    document.getElementById("second").style.display="grid" 
    document.getElementById("cont").style.display="none" 
}
function third() {
    var quest=JSON.parse(localStorage.getItem("questions"));
    localStorage.setItem("categ",JSON.stringify(quest.js))
    document.getElementById("third").style.display="grid" 
    document.getElementById("cont").style.display="none" 
}
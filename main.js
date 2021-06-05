function getJson(file,callback){
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json")
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status== "200"){
            callback(xhr.responseText);
        }
 
 
    }
xhr.send();
}

getJson("js/data.json",function(text)
{
    var data = JSON.parse(text);
    console.log(data)
    displayData(data.data)
    tdd(data.trainers);
})
var bodyElement = document.querySelector("body");
var maindiv = document.createElement("div");
maindiv.classList.add("maindiv");
bodyElement.appendChild(maindiv);

function displayData(info){

var leftdiv = document.createElement("div");
leftdiv.classList.add("leftdiv");
maindiv.appendChild(leftdiv);
var img = document.createElement("img");
img.src = info.image;
leftdiv.appendChild(img);
var h1 = document.createElement("h1");
h1.textContent=info.name;
leftdiv.appendChild(h1);
var h3  = document.createElement("h3");
h3.textContent = "OUR COURSES";
leftdiv.appendChild(h3);
for(i in info.courses){
    var span = document.createElement("span");
    span.textContent=info.courses[i];
    leftdiv.appendChild(span);

}
}
function tdd(trd){
    var rightdiv = document.createElement("div");
     rightdiv.classList.add("rightdiv");
    maindiv.appendChild(rightdiv);
    for (i in trd){
    
        var tdiv = document.createElement("div");
        tdiv.classList.add("tdiv");
        rightdiv.appendChild(tdiv);
        
var img = document.createElement("img");
img.src = trd[i].image;
tdiv.appendChild(img);


var h2 = document.createElement("h2");
h2.textContent=trd[i].name;
tdiv.appendChild(h2);

var h2 = document.createElement("h2");
h2.textContent=trd[i].id;
tdiv.appendChild(h2);

var p = document.createElement("p");
p.textContent = trd[i].phonenumber;
tdiv.appendChild(p);

var h5 = document.createElement("h5");
h5.textContent = trd[i].salari;
tdiv.appendChild(h5);





    }

}
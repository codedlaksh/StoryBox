var myimage=document.getElementById("imageid");
var imagearray=["image2.jpeg","image3.jpeg","image4.jpeg","image5.jpeg","image6.jpeg","image7.jpeg","image8.jpeg"]
var imageindex=0;
function changeimage() {
   myimage.setAttribute("src",imagearray[imageindex]);
   imageindex++;
   if(imageindex>=imagearray.length) {
       imageindex=0;
   }
}
var intervalhandle=setInterval(changeimage,3000);
myimage.onclick=function(){
    clearInterval(intervalhandle);
}
var agegroup1=document.getElementById("id1");
var agegroup2=document.getElementById("id2");
var agegroup3=document.getElementById("id3");
var agegroup4=document.getElementById("id4");
var agegroup5=document.getElementById("id5");
var article1=document.getElementById("article");
article1.setAttribute("color","red");

var currentPos=0;
var intervalHandle;

function animate(){
    document.getElementById("froggy").style.position="absolute";
    document.getElementById("froggy").style.left="0px";
    document.getElementById("froggy").style.top="10px";
    intervalHandle=setInterval(animatebox,50);
   
}

function animatebox(){
    currentPos+=20;
    document.getElementById("froggy").style.left=currentPos + "px";
  

    if(currentPos>1400){
        
        document.getElementById("froggy").style.position="";
        document.getElementById("froggy").style.left="";
        document.getElementById("froggy").style.top="";
        currentPos=0;
    }
   
}


window.onload=function(){
   
    setTimeout(animate,0);
}
$("#popupbye").hide(7000);
$("#popupbye").show(10000);


/*
function articlechange1(){
    article.innerHTML="A lion was once sleeping in the jungle when a mouse started running up and down his body just for fun.Read more here";

}



function articlechange2(){
    article.innerHTML="This age is the period of eploration to a new world of dreams and creativity..Nurture your creativity with us.";
}



function articlechange3(){
    article.setAttribute(innerHTML)="Openup your mind.run through those diversity inside you.";
}

function articlechange4(){
   article.innerHTML="Learning swimming from Grandpa.Hearing his childhood stories, hearing grandma's epic stories,hearing friend's blunder stories..They do miss all these..so this is for them." ;
   
}

    agegroup1.onclick=articlechange1();
    agegroup2.onclick= articlechange2();
    agegroup3.onclick= articlechange3();
    agegroup4.onclick=articlechange4();*/







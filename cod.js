function obiective(){
var o1=parseInt(document.getElementById('o1').value)
var o2=parseInt(document.getElementById('o2').value)
var o3=parseInt(document.getElementById('o3').value)

document.getElementById('obiective1').innerHTML="MAX(100%) :" + ((o1+o2+o3)/3).toPrecision(2) + '%'
document.getElementById('iobiect').innerHTML=((o1+o2+o3)/3).toPrecision(2) + '%'
total()
}



function total(){
	var o1=parseInt(document.getElementById('o1').value)
var o2=parseInt(document.getElementById('o2').value)
var o3=parseInt(document.getElementById('o3').value)
var ototal=((o1+o2+o3)/3).toPrecision(2)
var c11=parseInt(document.getElementById('c11').value)
var c12=parseInt(document.getElementById('c12').value)
var c13=parseInt(document.getElementById('c13').value)
var c14=parseInt(document.getElementById('c14').value)
var c21=parseInt(document.getElementById('c21').value)
var c22=parseInt(document.getElementById('c22').value)
var c23=parseInt(document.getElementById('c23').value)
var c24=parseInt(document.getElementById('c24').value)
var c31=parseInt(document.getElementById('c31').value)
var c32=parseInt(document.getElementById('c32').value)
var c33=parseInt(document.getElementById('c33').value)
var c34=parseInt(document.getElementById('c34').value)
var c41=parseInt(document.getElementById('c41').value)
var c42=parseInt(document.getElementById('c42').value)
var c43=parseInt(document.getElementById('c43').value)
var c44=parseInt(document.getElementById('c44').value)
var c51=parseInt(document.getElementById('c51').value)
var c52=parseInt(document.getElementById('c52').value)
var c53=parseInt(document.getElementById('c53').value)
var c54=parseInt(document.getElementById('c54').value)
var c61=parseInt(document.getElementById('c61').value)
var c62=parseInt(document.getElementById('c62').value)
var c63=parseInt(document.getElementById('c63').value)
var c64=parseInt(document.getElementById('c64').value)
var x=c11+c12+c13+c14+c21+c22+c23+c24+c31+c32+c33+c34+c41+c42+c43+c44+c51+c52+c53+c54+c61+c62+c63+c64
document.getElementById('totalc').innerHTML=x+"/240 - "+((x*100)/240).toPrecision(2) + '%'
document.getElementById('totaln').innerHTML=((x*100)/2400).toPrecision(1)
var calif=(x*100)/240
if(calif<50){
document.getElementById('calificativ').innerHTML="Nesatisfacator"
}
else if(calif<70){
document.getElementById('calificativ').innerHTML="Satisfacator"
}
else if(calif<=85){
document.getElementById('calificativ').innerHTML="Bine"
}
else if(calif>=86){
document.getElementById('i').innerHTML="Foarte bine"
}
document.getElementById('punct').style.bottom=(calif/100)*200
document.getElementById('punct').style.left=(ototal/100)*200


}

function media1(){
var  m1=document.getElementById('medie1')
var c11=document.getElementById('c11').value
var c12=document.getElementById('c12').value
var c13=document.getElementById('c13').value
var c14=document.getElementById('c14').value
c11=parseInt(c11, 10);
c12=parseInt(c12, 10);
c13=parseInt(c13, 10);
c14=parseInt(c14, 10);
m1.innerHTML="Medie: "+(c11+c12+c13+c14)/4+"/10"
}
function media2(){
var  m2=document.getElementById('medie2')
var c21=document.getElementById('c21').value
var c22=document.getElementById('c22').value
var c23=document.getElementById('c23').value
var c24=document.getElementById('c24').value
c21=parseInt(c21, 10);
c22=parseInt(c22, 10);
c23=parseInt(c23, 10);
c24=parseInt(c24, 10);
m2.innerHTML="Medie: "+(c21+c22+c23+c24)/4+"/10"
}

function media3(){
var  m3=document.getElementById('medie3')
var c31=document.getElementById('c31').value
var c32=document.getElementById('c32').value
var c33=document.getElementById('c33').value
var c34=document.getElementById('c34').value
c31=parseInt(c31, 10);
c32=parseInt(c32, 10);
c33=parseInt(c33, 10);
c34=parseInt(c34, 10);
m3.innerHTML="Medie: "+(c31+c32+c33+c34)/4+"/10"
}
function media4(){
var  m4=document.getElementById('medie4')
var c41=document.getElementById('c41').value
var c42=document.getElementById('c42').value
var c43=document.getElementById('c43').value
var c44=document.getElementById('c44').value
c41=parseInt(c41, 10);
c42=parseInt(c42, 10);
c43=parseInt(c43, 10);
c44=parseInt(c44, 10);
m4.innerHTML="Medie: "+(c41+c42+c43+c44)/4+"/10"
}
function media5(){
var  m5=document.getElementById('medie5')
var c51=document.getElementById('c51').value
var c52=document.getElementById('c52').value
var c53=document.getElementById('c53').value
var c54=document.getElementById('c54').value
c51=parseInt(c51, 10);
c52=parseInt(c52, 10);
c53=parseInt(c53, 10);
c54=parseInt(c54, 10);
m5.innerHTML="Medie: "+(c51+c52+c53+c54)/4+"/10"
}

function media6(){
var  m6=document.getElementById('medie6')
var c61=document.getElementById('c61').value
var c62=document.getElementById('c62').value
var c63=document.getElementById('c63').value
var c64=document.getElementById('c64').value
c61=parseInt(c61, 10);
c62=parseInt(c62, 10);
c63=parseInt(c63, 10);
c64=parseInt(c64, 10);
m6.innerHTML="Medie: "+(c61+c62+c63+c64)/4+"/10"
}

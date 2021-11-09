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





//admin

var control=0
function admin(){
	if(control==0){
var plus1 = document.createElement("INPUT"); 
    plus1.type = "button"	
	plus1.id="plus1"
	plus1.setAttribute("value","+")
	document.getElementById("div1").appendChild(plus1); 
var plus2 = document.createElement("INPUT"); 
    plus2.type = "button"	
	plus2.id="plus2"
	plus2.setAttribute("value","+")	
	document.getElementById("div2").appendChild(plus2);
var plus3 = document.createElement("INPUT"); 
    plus3.type = "button"	
	plus3.id="plus3"
	plus3.setAttribute("value","+")	
	document.getElementById("div3").appendChild(plus3);
var plus4 = document.createElement("INPUT"); 
    plus4.type = "button"	
	plus4.id="plus4"
	plus4.setAttribute("value","+")	
	document.getElementById("div4").appendChild(plus4); 
var plus5 = document.createElement("INPUT"); 
    plus5.type = "button"	
	plus5.id="plus5"
	plus5.setAttribute("value","+")	
	document.getElementById("div5").appendChild(plus5); 
var plus6 = document.createElement("INPUT"); 
    plus6.type = "button"	
	plus6.id="plus6"
	plus6.setAttribute("value","+")	
	document.getElementById("div6").appendChild(plus6); 
control=1
	}
	for(var i=1;i<7;i++){
	for(var j=1;j<5;j++){
		var t="c"+i+j
		document.getElementById(t).disabled = false;
		
	}
}
document.getElementById("o1").disabled = false;
document.getElementById("o2").disabled = false;
document.getElementById("o3").disabled = false;
for(var i=1;i<10;i++){
	var t="argument"+i
	document.getElementById(t).disabled = false;
}
}

function evaluator(){
	if(control==1){
	var minus1 = document.getElementById("plus1");
	minus1.parentNode.removeChild(minus1);
	var minus2 = document.getElementById("plus2");
	minus2.parentNode.removeChild(minus2);
	var minus3 = document.getElementById("plus3");
	minus3.parentNode.removeChild(minus3);
	var minus4 = document.getElementById("plus4");
	minus4.parentNode.removeChild(minus4);
	var minus5 = document.getElementById("plus5");
	minus5.parentNode.removeChild(minus5);
	var minus6 = document.getElementById("plus6");
	minus6.parentNode.removeChild(minus6);
	control=0
	}
	
for(var i=1;i<7;i++){
	for(var j=1;j<5;j++){
		var t="c"+i+j
		document.getElementById(t).disabled = false;
		
	}
}
document.getElementById("o1").disabled = false;
document.getElementById("o2").disabled = false;
document.getElementById("o3").disabled = false;
for(var i=1;i<10;i++){
	var t="argument"+i
	document.getElementById(t).disabled = false;
}
}

function vizitator(){
for(var i=1;i<7;i++){
	for(var j=1;j<5;j++){
		var t="c"+i+j
		document.getElementById(t).disabled = true;
		
	}
}
document.getElementById("o1").disabled = true;
document.getElementById("o2").disabled = true;
document.getElementById("o3").disabled = true;
for(var i=1;i<10;i++){
	var t="argument"+i
	document.getElementById(t).disabled = true;
}
}
function departament()
{
	var x=document.getElementById("departament").value
	switch (x) {
  default:
     alert("1")
    break;
	case "Administrativ":
    alert("2")
    break;
	case "ArheoTim":
    alert("3")
    break;
	 case "Biroul Audit public Intern":
    alert("4")
    break;
	 case "Biroul Juridic":
    alert("5")
    break;
	 case "Cabinet Rector":
    alert("6")
    break;
	 case "Cancelaria Rectorului":
    alert("7")
    break;
	 case "Centrul de Dezvoltare Academica":
    alert("8")
    break;
	 case "Cercetare stiintifica si creatie universitara":
    alert("9")
    break;
	 case "Comunicare, Imagine si Marketing Institutional":
    alert("10")
    break;
	 case "Consiliere Psihologica si Orientare in Cariera":
    alert("11")
    break;
	 case "Consiliere Psihologica si Orientare in Cariera":
    alert("12")
    break;
	 case "Corp de control intern":
    alert("13")
    break;
	 case "Departamentul pentru Relatia cu Mediul Preuniversitar":
    alert("14")
    break;
	 case "Departamentul pt. Pregatire a Personalului Didactic":
    alert("15")
    break;
	 case "Digitalizare si Analiza Date":
    alert("16")
    break;
	 case "Director General Administrativ":
    alert("17")
    break;
	 case "Economico-Financiar":
    alert("18")
    break;
	 case "Educatie continua, Invatamant la distanta si frecventa redusa":
    alert("19")
    break;
	 case "Evidenta patrimoniu, achizitii si monitorizare investitii":
    alert("20")
    break;
	 case "Facultatea de Arte si Design":
    alert("21")
    break;
     case "Facultatea de Chimie, Biologie, Geografie":
    alert("22")
    break;
	 case "Facultatea de Drept":
    alert("23")
    break;
	 case "Facultatea de Economie si Administrare a Afacerilor":
    alert("24")
    break;
	 case "Facultatea de Educatie Fizica si Sport":
    alert("25")
    break;
	 case "Facultatea de Fizica":
    alert("26")
    break;
	 case "Facultatea de Litere, Istorie si Teologie":
    alert("27")
    break;
     case "Facultatea de Matematica si Informatica":
    alert("28")
    break;
     case "Facultatea de Muzica SI Teatru":
    alert("29")
    break;
     case "Facultatea de Sociologie si Psihologie":
    alert("30")
    break;
     case "Facultatea de St. Politice Filosofie si St. ale Comunicarii":
    alert("31")
    break;
     case "Institutul pentru Cercetari Avansate de Mediu":
    alert("32")
    break;
	case "Managementul Calitatii":
    alert("33")
    break;
	 case "Relatia cu Mediul Socio-Economic si ALUMNI":
    alert("34")
    break;
     case "Relatii Internationale":
    alert("35")
    break;
     case "Resurse Umane":
    alert("36")
    break;
     case "Secretariat General UVT":
    alert("37")
    break;
     case "Serviciul IT&C":
    alert("38")
    break;
     case "Social":
    alert("39")
    break;
	case "Tipografie":
    alert("40")
    break;
	
    
	
	
}
}
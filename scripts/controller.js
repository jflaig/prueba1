var ctx;var width = 320;
var des;
var height=320;
var intervalId;
var barraCodigo =0;
var semaforoCodigo =1;
var zetea =12;
var semaforoLineas =1;
var semaforor = -1;
var explicacion = new Array();
var   = new Scanner(System.in);
var   = ;
var   = ;
var   = 0;
explicacion[0] = '';
explicacion[1] = '';
explicacion[2] = '';
explicacion[3] = '';
explicacion[4] = '';
explicacion[5] = '';
explicacion[6] = '';
explicacion[7] = '';
explicacion[8] = '';
explicacion[9] = '';
explicacion[10] = '';
explicacion[11] = '';
function draw(){
ctx.strokeRect(0,0,700,400);
};
function init(){
ctx = document.getElementById('canvas').getContext('2d');
des = document.getElementById('canvas').getContext('2d');
 intervalId = setInterval(draw, 10);
};
function cargado(){
if(semaforoCodigo == 1){
var objetoCanvas = document.getElementById('canvas');
if(objetoCanvas.getContext){
var contextoCanvas = objetoCanvas.getContext('2d')
contextoCanvas.font = '20px Times New Roman';
contextoCanvas.textAlign='left';
 contextoCanvas.fillText('import java.util.*;',10,40);
 contextoCanvas.fillText('public class ProyectoiLO00{',10,60);
 contextoCanvas.fillText('  public static void main (String args[]){',10,80);
 contextoCanvas.fillText('    Scanner teclado = new Scanner(System.in);',10,100);
 contextoCanvas.fillText('    System.out.print("Ingrese primer entero: ");',10,120);
 contextoCanvas.fillText('    int N1= teclado.nextInt();',10,140);
 contextoCanvas.fillText('    System.out.print("Ingrese segundo entero: ");',10,160);
 contextoCanvas.fillText('    int N2= teclado.nextInt();',10,180);
 contextoCanvas.fillText('    int suma = N1 + N2;',10,200);
 contextoCanvas.fillText('    System.out.println("La suma es: "+suma);',10,220);
 contextoCanvas.fillText('  }',10,240);
 contextoCanvas.fillText('} ',10,260);
semaforoCodigo = 2;
}
}
};
function Siguiente(){
if(semaforoLineas <= zetea){
des.strokeStyle = '#CCCC00';
 des = document.getElementById('canvas').getContext('2d');
if(barraCodigo != 0){
des.clearRect (0, 0,  700, 400);
 semaforoCodigo=1;
 cargado();
}
barraCodigo = barraCodigo + 20;
semaforor=semaforor+1;
des.strokeRect(5,barraCodigo, 690, 20);
document.getElementById('tejecucion').value = '';
document.getElementById('texplicacion').value = explicacion[semaforor];
 if(semaforor==3){
document.getElementById('tmemoria').value = document.getElementById('tmemoria').value + salto() + '    Scanner teclado  =  new Scanner(System.in);';
}
 if(semaforor==4){
document.getElementById('tejecucion').value = "Ingrese primer entero: ";
}
if(semaforor==5){
 mostrar('No','botones');
 mostrar('Si','input');
}
 if(semaforor==5+1){
 =  document.getElementById("tinput").value;
document.getElementById('tmemoria').value =  document.getElementById('tmemoria').value + salto() + '    int N1 = ' + ' ' + document.getElementById("tinput").value;
}
 if(semaforor==6){
document.getElementById('tejecucion').value = "Ingrese segundo entero: ";
}
if(semaforor==7){
 mostrar('No','botones');
 mostrar('Si','input');
}
 if(semaforor==7+1){
 =  document.getElementById("tinput").value;
document.getElementById('tmemoria').value =  document.getElementById('tmemoria').value + salto() + '    int N2 = ' + ' ' + document.getElementById("tinput").value;
}
 if(semaforor==8){
   =   N1 + N2;;
document.getElementById('tmemoria').value = document.getElementById('tmemoria').value + salto() + '    int suma  = ' + ;
}
 if(semaforor==9){
document.getElementById('tejecucion').value = "La suma es: "+suma;
}
semaforoLineas = semaforoLineas+1;
}
else
{
alert('Se ha acabado el programa');
}
}
function Anterior(){
if(semaforoLineas > 2){
des= document.getElementById('canvas').getContext('2d');
if(barraCodigo >= 20){
des.clearRect (0, 0,  700, 400);
semaforoCodigo=1;
cargado();
}
 barraCodigo = barraCodigo - 20;
semaforor=semaforor-1;
des.strokeRect(5,barraCodigo, 690, 20);
document.getElementById('texplicacion').value = explicacion[semaforor];
semaforoLineas = semaforoLineas-1;
}
else{
alert('Comienzo del programa');
}
}

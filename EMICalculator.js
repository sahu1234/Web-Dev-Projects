
/* 

    Fill with appropriate javascript code here 

*/
function calculateEMI(){
     
    var p=document.getElementById("principalAmount").value;
    var R=document.getElementById("interestRate").value;
    var t=document.getElementById("tenure").value;
    var r= R / (12 * 100);
    var emi =  (p * r * Math.pow(1 + r, t))/(Math.pow(1 + r, t) - 1);
    var res=emi.toFixed(2);
document.getElementById("result").innerHTML ="EMI is Rs."+res;
       return false;

}
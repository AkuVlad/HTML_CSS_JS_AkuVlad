function ShowResult()
{
let Qwe = 'Javascript is the main language of front-end programming';
let PHP = ', PHP is one of the best languages of back-end developing';
let OtterNames = ["Sakura","Aty","Ui"];
document.getElementById("Noone").innerHTML += Qwe.concat(PHP)+OtterNames[0];
let x = prompt("R U Happy? Yes or No?");
if (x.toLowerCase() == "yes")
{
	alert("I'm glad that U R happy!");
}
else{if (x.toLowerCase() == "no")
{
	alert("It's very sad to hear that");
}
else
{
	alert("Sorry! THis is invalid answer!");
                          }	
                        }
                     }
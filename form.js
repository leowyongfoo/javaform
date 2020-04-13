function formValidation()
{
var yintake = document.registration.intake;
var ucountry = document.registration.country;
var ySecchoice = document.registration.Secchoice;
var yTrdchoice = document.registration.Trdchoice;
var yhostelyes = document.registration.hostelyes;
var yhostelno = document.registration.hostelno;
var uname = document.registration.username;
var ymsex = document.registration.msex;
var yfsex = document.registration.fmsex;
var ynas = document.registration.nation;
var ynric = document.registration.NRIC;
var yrace = document.registration.race;
var yreli = document.registration.reli;
var yph = document.registration.ph;
var ypoc = document.registration.poc;
var ystate = document.registration.state;
var ysec = document.registration.sec;
var ysec3 = document.registration.sec3;
var ycerti = document.registration.certi;
var ysub = document.registration.sub;
var ygrd = document.registration.grd;

if(validyintake(yintake))
{
if(countryselect(ucountry))
{
if(ySecchoiceselect(ySecchoice))
{
if(yTrdchoiceselect(yTrdchoice))
{ 
if(validhostel(yhostelyes,yhostelno))
{
if(allword(uname))
{
if(validsex(ymsex,yfsex))
{
if(nasselect(ynas))
{
if(validnric(ynric))
{
if(raceselect(yrace))
{
if(reliselect(yreli))
{
if(numph(yph))
{
if(validpoc(ypoc))
{
if(stateselect(ystate))
{
if(secselect(ysec))
{
if(sec3select(ysec3))
{
if(certiselect(ycerti))
{
if(subselect(ysub))
{
if(grdselect(ygrd))
{
}
}
}
}
}
}
}
}
}
}
}  
}
}
}
}
}
}
} 
}
return false;
} 
function validyintake(yintake){

    x=0;
    if(yintake.checked) 
    {
    x++;
    return true;
    } 
    if(x==0)
    {
    alert('pleace select year intake');
    yintake.focus();
    return false;
    }
    
}
function countryselect(ucountry)
{
if(ucountry.value == "Default")
{
alert('Select your 1st choice from the list');
ucountry.focus();
return false;
}
else
{
return true;
}
}
function ySecchoiceselect(ySecchoice)
{
if(ySecchoice.value == "Default")
{
alert('Select your 2 choice from the list');
ySecchoice.focus();
return false;
}
else
{
return true;
}
}

function yTrdchoiceselect(yTrdchoice)
{
if(yTrdchoice.value == "Default")
{
alert('Select your 3 choice from the list');
yTrdchoice.focus();
return false;
}
else
{
return true;
}
}

function validhostel(yhostelyes,yhostelno)
{
    x=0;
    if(yhostelyes.checked) 
    {
    x++;
    return true;
    }
    if(yhostelno.checked)
    {
        x++;
        return true;
    }
    if(x==0)
    {
    alert('pleace atleast one option in hostel ');
    yhostelyes.focus();
    return false;
    } 
}

function allword(uname)
{ 
var letters = /^[A-Za-z]+$/;
if(uname.value.match(letters))
{
return true;
}
else
{
alert('Username must have alphabet characters only');
uname.focus();
return false;
}
}
function validsex(ymsex,yfsex)
{
    x=0;
    if(ymsex.checked) 
    {
    x++;
    return true;
    }
    if(yfsex.checked)
    {
        x++;
        return true;
    }
    if(x==0)
    {
    alert('pleace select your gender ');
    ymsex.focus();
    return false;
    } 
}

function nasselect(ynas)
{
if(ynas.value == "Default")
{
alert('Select your nationality');
ynas.focus();
return false;
}
else
{
return true;
}
}

function validnric(ynric)
{ 
var numbers = /^[0-9]+$/;
if(ynric.value.match(numbers))
{
return true;
}
else
{
alert('NRIC must have number character only');
ynric.focus();
return false;
}
}

function raceselect(yrace)
{
if(yrace.value == "Default")
{
alert('Select your race');
yrace.focus();
return false;
}
else
{
return true;
}
}

function reliselect(yreli)
{
if(yreli.value == "Default")
{
alert('Select your religion');
yreli.focus();
return false;
}
else
{
return true;
}
}

function numph(yph)
{ 
var numbers = /^[0-9]+$/;
if(yph.value.match(numbers))
{
return true;
}
else
{
alert('mobile number must have number character only');
yph.focus();
return false;
}
}

function validpoc(ypoc)
{ 
var numbers = /^[0-9]+$/;
if(ypoc.value.match(numbers))
{
return true;
}
else
{
alert('Postcode number must have number character only');
ypoc.focus();
return false;
}
}

function stateselect(ystate)
{
if(ystate.value == "Default")
{
alert('Select your state');
ystate.focus();
return false;
}
else
{
return true;
}
}

function secselect(ysec)
{
if(ysec.value == "Default")
{
alert('Select state of your sec school');
ysec.focus();
return false;
}
else
{
return true;
}
}

function sec3select(ysec3)
{
if(ysec3.value == "Default")
{
alert('Select year of graduate');
ysec3.focus();
return false;
}
else
{
return true;
}
}

function certiselect(ycerti)
{
if(ycerti.value == "Default")
{
alert('Select the certificate type');
ycerti.focus();
return false;
}
else
{
return true;
}
}

function subselect(ysub)
{
if(ysub.value == "Default")
{
alert('Select the certificate type');
ysub.focus();
return false;
}
else
{
return true;
}
}

function subselect(ysub)
{
if(ysub.value == "Default")
{
alert('Select your subject');
ysub.focus();
return false;
}
else
{
return true;
}
}

function grdselect(ygrd)
{
if(ygrd.value == "Default")
{
alert('Select your subject grade');
ygrd.focus();
return false;
}
else
{
    alert('Form Succesfully Submitted, thanks for your corporation');
    window.location.reload()
return true;
}
}










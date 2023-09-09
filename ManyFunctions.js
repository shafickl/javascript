<script>
  
  //GET CURRENT WINDOW WIDTH IN PIXELS AND DISPLAY THE APPROPRIATE ELEMENTS THERE
var body1 = document.getElementsByTagName('body')[0];

function resizeB(){
var wSize = window.innerWidth;
var dViews = document.getElementsByClassName("desktop");
var mViews = document.getElementsByClassName("mobile");
if(wSize >= 933){
body1.style.paddingLeft = "5";
body1.style.paddingRight = "5";
for(var i = 0; i < dViews.length; i++){
dViews[i].style.display = "block";
}
for(var i = 0; i < mViews.length; i++){
mViews[i].style.display = "none";
}
}else{
body1.style.paddingLeft = "0";
body1.style.paddingRight = "0"
for(var i = 0; i < dViews.length; i++){
dViews[i].style.display = "none";
}
for(var i = 0; i < mViews.length; i++){
mViews[i].style.display = "block";
}
}
}
// CALLING THE FUNCTION
resizeB();
//ATTACHING THE FUNCTION TO THE WINDOW
window.addEventListener('resize', function (){
resizeB();
});


//GETTING THE TEXT FORM OF AN ELEMENT'S CSS
var div = document.getElementByById('div');
var divStyle = div.style.cssText;

// checking wherther a word exists in a phrase
let text = "Hello world, welcome to the universe.";
if(text.includes('welcome')){ 
alert("It includes welcome");
}
</script>

//  MAKING OWN ALERT
<div id="alertContainer" style="
    position: fixed; display:none;
    top: 100px;
    left: 0;
    right: 0;z-index:10000;
    text-align: center;
">
    <div style="
    text-align: left;
    max-width: 350px;
    display: inline-block;
    background: white;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 10px 10px 10px;
">
        <p id="alertTitle" style="
    font-weight: bold;
    font-size: 20px;
    color: orangered;
">Success !!!</p>
        <p id="alertMessage" style="
    color: gray;
">The News has been added successfully, Congrats...</p>
    </div>
</div>


<script>
function makeAlert(title,msg){
var TT = document.getElementById("alertTitle");
var MM = document.getElementById("alertMessage");
var DD = document.getElementById("alertContainer");

TT.innerHTML = title;
MM.innerHTML = msg; 
DD.style.display = "block";
setTimeout(function(){ DD.style.display = "none";},5000);
}

</script>


//DISPLAYING A CRETAIN ELEMT AND DISPLAYING NONE ALL THOSE OF A CERTAIN CLASS

	<script>
function displayD(clav,elem){
var cla = document.getElementsByClassName(clav); 
for(var i = 0; i < cla.length; i++){
cla[i].style.display = "none"; 
}
document.getElementById(elem).style.display = "block";
}
</script>




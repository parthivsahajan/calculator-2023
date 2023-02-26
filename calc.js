function buttonclick(num){
    console.log("hi")
    document.getElementById("screen").value=document.getElementById("screen").value+num;

}
function clearDisplay(){
    document.getElementById("screen").value=""
}
function equalClick(){
    document.getElementById("screen").value=eval(document.getElementById("screen").value)
}
function backClick(){
    document.getElementById("screen").value=document.getElementById("screen").value.slice(0,-1)
}
function buttonClick(val){
    document.getElementById("inputscreen").value=document.getElementById("inputscreen").value+val;
}
function cleardisplay(){
    document.getElementById("inputscreen").value=""
}
function buttonTotal(){
    var screen=document.getElementById("inputscreen").value
    var result=eval(screen)
    document.getElementById("inputscreen").value=result
}
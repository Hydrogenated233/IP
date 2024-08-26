var now_place = "1_1";
if(localStorage.getItem("points") !== null){
    var points = new ExpantaNum(localStorage.getItem("points"));  
    var gainps = new ExpantaNum(localStorage.getItem("gainps"));
    var up_buyed = localStorage.getItem("up_buyed").split(); 
    for(var i=0;i<up_buyed.length;i+=1){
        if(up_buyed[i]=="false") up_buyed[i]=false;
        else up_buyed[i]=true;
    }
}
else{
    var points = new ExpantaNum(0);  
    var gainps = new ExpantaNum(1);
    var up_buyed = [false,false]; 
}
function save(){
    localStorage.setItem("points",points.toString());
    localStorage.setItem("gainps",gainps.toString());
    localStorage.setItem("up_buyed",up_buyed.toString());
}
function hard_reset(){
    localStorage.clear();
    location.href = location.href;
}
setInterval(save,30000);
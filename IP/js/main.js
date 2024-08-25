const up_effect=[
    [10],
    ["gainps.mul(2)"]
];
const element = document.querySelector('.rainbow_text');  
const red = '#FF0000';  
const purple = '#800080';  
const duration = 1000; 
function switch_to(where) {  
    document.getElementById(now_place).style.display = 'none';  
    document.getElementById(where).style.display = 'block';  
    now_place = where;  
}
function up(x){
    if(points.gte(ExpantaNum(up_effect[0][x-1]))&& !up_buyed[x-1]){
        points=points.sub(up_effect[0][x-1]);
        gainps=eval(up_effect[1][x-1])
        up_buyed[0]=true;
    }
}
function update_display(){
    var display_points = points.toString();
    var display_place = document.getElementById("points");  
    display_place.innerHTML = format(display_points);
    var display_gainps = gainps.toString();
    display_place = document.getElementById("gainps");  
    display_place.innerHTML = format(display_gainps);
}
function update_points(){
    if(gainps.div(20)>ExpantaNum(1)) points=points.add(gainps.div(40).floor());
    else points=points.add(gainps.div(20));
}
function update_up_style(){
    for(var i=0;i<1;i+=1){
        if(up_buyed[i]){
            document.getElementById("up"+(i+1)).className="up_buyed";
        }
    }
}
function main() {
    update_points();
    update_display();
    update_up_style();
}  
setInterval(main, 50);
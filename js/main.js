const up_effect=[
    [10, 50],
    ["gainps.mul(2)","gainps.mul(2).pow(1.7).floor()"]
];
function switch_to(where) {  
    document.getElementById(now_place).style.display = 'none';  
    document.getElementById(where).style.display = 'block';  
    now_place = where;  
}
function up(x){
    if(points.gte(ExpantaNum(up_effect[0][x-1]))&& !up_buyed[x-1]){
        points=points.sub(up_effect[0][x-1]);
        gainps=eval(up_effect[1][x-1])
        up_buyed[x-1]=true;
    }
}
function update_points(){
    if(gainps.div(20)>ExpantaNum(1)) points=points.add(gainps.div(40).floor());
    else points=points.add(gainps.div(20));
}
function update_up_style(){
    for(var i=0;i<up_effect[0].length;i+=1){
        if(up_buyed[i]){
            document.getElementById("up"+(i+1)).className="up_buyed";
        }
    }
}
function update_display() {  
    var display_points = points.format();  
    document.getElementById("points").innerHTML = display_points;  
    var display_gainps = gainps.format();  
    document.getElementById("gainps").innerHTML = display_gainps;  
    document.getElementById("title").innerHTML = "点数增量 点数:" + display_points;  
}
 
function main() {  
    update_points();  
    update_display();  
    update_up_style();  
} 
setInterval(main, 50);
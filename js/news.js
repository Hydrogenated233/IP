const news=[
    "!这不是一条滚动假新闻。",
    "|0`````1````2````3````3````3|是的，这是一把尺子但<a class='softcap'>(受硬上限限制)</a>",
    "<a id='news3'></a>点数？弱爆了！",
    "|0`````1````2````2.5````2.7````2.8````2.85````2.89````2.91```...```3|是的，这是一把尺子但<a class='softcap'>(受一重软上限限制)</a>",
    "<a id='news5'>点我获得1e10000点数</a>",
    "你有<a id='news6'></a>%的概率看到这条新闻"
]
function getRandomInt(min, max) {    
    min = Math.ceil(min);  
    max = Math.floor(max);  
    return Math.floor(Math.random() * (max - min)) + min;  
  }  
function update_news(){
    rand=getRandomInt(0,news.length);
    document.getElementById("conter").innerHTML=news[rand];
    if(rand==2)document.getElementById("news3").innerHTML=points.format();
    if(rand==4)document.getElementById("news5").onclick=open("https://www.bilibili.com/video/BV1UT42167xb/","100");
    if(rand==5)document.getElementById("news6").innerHTML=ExpantaNum(100).div(news.length).format();
}
setInterval(update_news,7000);
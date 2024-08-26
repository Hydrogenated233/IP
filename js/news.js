const news=[
    "!这不是一条滚动假新闻。",
    "|0`````1````2````3````3````3|是的，这是一把尺子但<a class='softcap'>(受硬上限限制)</a>"
]
function getRandomInt(min, max) {    
    min = Math.ceil(min);  
    max = Math.floor(max);  
    return Math.floor(Math.random() * (max - min)) + min;  
  }  
function update_news(){
    document.getElementById("news").innerHTML=news[getRandomInt(0,news.length)]
}
setInterval(update_news,7000)
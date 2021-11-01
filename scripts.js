
let change = 0
function trocaCampeao(){
    var img =["bucks.jpg", "lebron.jpg", "RP17447-toronto_raptors_-_k_leonard.jpg"];
    var fraseList = ["Milwaukee Bucks - 2021", "Los Angeles Lakers - 2020", "Toronto Raptors - 2019"]
    var figCaptionList = ["MVP Giannis Antetokounmpo - Geek Freak", "MVP Lebron James - King James", "MVP Kawhi Leonard - The Klaw"]

    document.getElementById("header").innerHTML = "<h1>"+"Últimos Campeões da NBA"+"</h1>"
    document.getElementById("img").innerHTML = "<img src='"+img[change]+"'>";
    document.getElementById("time").innerHTML = "<h1>"+fraseList[change]+"</h1>"
    document.getElementById("player").innerHTML = "<h3>"+figCaptionList[change]+"</h3>"
    
    change++
    if(change>=img.length){
        change = 0
    }

}
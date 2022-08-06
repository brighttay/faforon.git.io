let idList = [document.getElementById("topBar"),document.getElementById("middleBar"),document.getElementById("bottomBar")];
const classList1 = ["top-bar-close","middle-bar-close","bottom-bar-close"];
const classList2 = ["top-bar-open","middle-bar-open","bottom-bar-open"];
let opened = false;
function showHideMenu(){
console.log(opened);
if(opened == false){
            for(i = 0; i< idList.length; i++){
                idList[i].classList.add(classList1[i]);
                idList[i].classList.remove(classList2[i]);
        }   opened = true;
        
        document.getElementById("nav").style.right = "0px";
        document.getElementById("hero").style.filter = "blur(3px)";
     } else{
        for(j = 0; j< idList.length; j++){
                idList[j].classList.remove(classList1[j]);
                idList[j].classList.add(classList2[j]);
        } opened = false;
        document.getElementById("hero").style.filter = "blur(0px)";
        document.getElementById("nav").style.right = "-100%";
        
     }
}
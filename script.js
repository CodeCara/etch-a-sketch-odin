const gridContainer = document.createElement('div');
gridContainer.classList.add("gridContainer"); 
const body = document.querySelector('body');
body.appendChild(gridContainer);

for (i=0; i<256; i++){
    const div = document.createElement('div'); 
    div.classList.add("square");
   // div.innerText = parseInt(`${[i+1]}`);
   //div.innerText = "X";
    gridContainer.appendChild(div);
    div.addEventListener("mouseover", hoverEffect);
function hoverEffect (){
    div.setAttribute("style", "background-color:green;")}
    //div.style.backgroundColor= "blue";
}









//lines below are just checking for div creation 

//body.style.backgroundColor= "pink";



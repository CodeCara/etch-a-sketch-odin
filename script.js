const gridContainer = document.createElement('div');
gridContainer.classList.add("gridContainer"); 

const body = document.querySelector('body');
const button = document.createElement('button');

button.innerText = "Create new grid";
body.appendChild(button);
body.appendChild(gridContainer);



for (i=0; i<256; i++){
    const div = document.createElement('div'); 
    div.classList.add("square");
 
    gridContainer.appendChild(div);
    div.addEventListener("mouseover", hoverEffect);
    function hoverEffect (){
        div.setAttribute("style", "background-color:blue;")}
    
}

function removeAndCreateNewGrid() {
//new lopp code below (to enable multiple grids)
//let clicks = 0;
//clicks += 1;
//console.log(clicks);
//for (i=0; i <=clicks;i++) {let newGridContainer = [];}
//console.log(newGridContainer);







    let newGridContainer = document.createElement('div');
    newGridContainer.classList.add("newGridContainer");
    body.appendChild(newGridContainer);
    body.removeChild(gridContainer);
    //delete line below??
  
    let gridSize = prompt("Enter the number of sides you want each side of the grid to have (note: the number entered should not be greater than 100)");
 if (gridSize > 100) {let gridsize = prompt ("Enter a number not greater than 100")};
    let flexFactor = 100/gridSize;
    
    //remove line below
    console.log(flexFactor);
let gridSquared = gridSize*gridSize;

//remove line below
console.log(gridSquared);
for (i=0; i<gridSquared; i++){
    const div = document.createElement('div');
   
    div.style.flex = `1 0 ${flexFactor}%`;
 
    newGridContainer.appendChild(div);
    div.addEventListener("mouseover", newHoverEffect);

 
function newHoverEffect (){
    div.style.backgroundColor=("blue");

};

}
//const gridContainer = document.createElement('div'); 
}



button.addEventListener("click", removeAndCreateNewGrid);

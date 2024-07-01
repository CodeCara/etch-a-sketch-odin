const gridContainer = document.createElement('div');
const body = document.querySelector('body');
body.appendChild(gridContainer);

for (i=0; i<256; i++){
    const div = document.createElement('div'); 
    div.innerText = parseInt(`${[i+1]}`);
    gridContainer.appendChild(div);
    //div.style.backgroundColor= "blue";
}



















//lines below are just checking for div creation 

//body.style.backgroundColor= "pink";



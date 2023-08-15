const container = document.querySelector('.main-container');


function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener('mouseover', ()=>{
        cell.classList.add('hovered')
    })
  };
 
};

makeRows(100, 100);

// let divs = container.children;
// for (e=0; e < divs.length; e++){
//     let div = document.querySelector('.grid-item')
//     div.addEventListener('mouseover', ()=>{
//         div.classList.add('.hovered')
//     })
// }

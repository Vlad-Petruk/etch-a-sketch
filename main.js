const container = document.querySelector('.grid-container');
const gridButton = document.querySelector('.grid-button')



function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
    cell.addEventListener('mouseenter', ()=>{
        cell.classList.add('hovered')
    })
  };
 
};

makeRows(16, 16);

gridButton.addEventListener('click',()=>{
  let input = Number(prompt('Enter grid size'))
if (input>100){
  alert('Value can be only <100')
  return
}
container.classList.add(".default")
  makeRows(input,input)
})
// let divs = container.children;
// for (e=0; e < divs.length; e++){
//     let div = document.querySelector('.grid-item')
//     div.addEventListener('mouseover', ()=>{
//         div.classList.add('.hovered')
//     })
// }

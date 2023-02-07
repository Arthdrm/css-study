const reset_btns = document.querySelectorAll(".fa-rotate-left");
const tables = document.querySelectorAll(".tbl-body");
const page_btns = document.querySelectorAll(".btn");
/**
 * We use 3D array to store the size of each boxes in each table.
 * 3D array elements (2D array) -> Represent individual table.
 * 2D array elements (1D array) -> Represent individual box.
 * 1D array elements (Actual values) -> Box's width & height.
 * Ex :
 * [
 *      //1st table
 *      [
 *          [200, 100], //1st box of the 1st table
 *          [800, 205]  //2nd box of the 1st table
 *      ],
 *      
 *      //2nd Table
 *      [
 *          [100, 105] //1st box of the 2nd table
 *      ]
 *      ...
 * ]
 * The elements of the 3D array itself will change each time user changed the active page.
 * This because, the 3D array only need to keep track of the size of each box within an active page.
 */

//The 3D array
var box_sizes = [];
//The 2D array 
var row = [];
for(let page_btn of page_btns){
    page_btn.addEventListener("click", (e) => {
        box_sizes = []; //Resetting the 3D array elements.
        const active_container = document.querySelector(".content-container.active");
        const tables = active_container.querySelectorAll(".tbl-body");
        for(let table of tables){
            const dotted_boxes = table.querySelectorAll(".dotted-box");   
            for(let box of dotted_boxes){
                row.push([box.offsetWidth, box.offsetHeight]);
            }
            box_sizes.push(row);
            row = []; //Resetting the 2D array elements
        }
    })
}

for(let btn of reset_btns){
    btn.addEventListener("click", (e)=>{
        e.target.classList.toggle("active");
        let index = [...reset_btns].indexOf(e.target); //Index reset btn == Index table
        let boxes = tables[index].querySelectorAll(".dotted-box");
        for(let i = 0; i < boxes.length; i++){
            boxes[i].style.transition = "all .6s";
            boxes[i].style.width = box_sizes[index][i][0] + "px";
            boxes[i].style.height = box_sizes[index][i][1] + "px";
            setTimeout(()=>{
                boxes[i].style.transition = "none";    
            }, 610);            
        }
    })
} 
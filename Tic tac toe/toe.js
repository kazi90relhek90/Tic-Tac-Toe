
//event listener
document.getElementById("resetBTN").addEventListener("click", resetgrid)
document.getElementById("Container").addEventListener("click" ,Winner)

//global Variables

let Grid = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]
let img1 =document.getElementById("photo1")
let img2 =document.getElementById("photo2")
let turn = 1

//creat first grid
createGrid()

//functions

function images (folder, img1, imgtype) {
    let StartingPhoto = "img/" + folder + img1 + imgtype
    return StartingPhoto
}

function resetgrid() {
        Grid = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
    ]
    turn = 1
    document.getElementById("winner").innerHTML = "-----"

}

function createGrid(){    
   for(var row = 0; row < 3; row++) {
       for(var coloum = 0; coloum < 3; coloum++) {
         // add div
         let div1 = document.createElement("div")
     
         //give divs id
         div1.id = "cell" + row + "-" + coloum

         //add data to dataset
         div1.dataset.x = row
         div1.dataset.y = coloum

         //add event listener to each div
         div1.classList = "blank"
         div1.addEventListener("click", CellClicked)
         //send to html
         document.getElementById("Container").append(div1)
     
         //add an img
         addIMG(row, coloum, div1.id)          
       }
   }
}

function addIMG(row, col, divId){
    //creat img for divs
    let img1 = document.createElement("img")

    //give id to img
    img1.id = "img" + row + "-" + col

    //add src to img
    img1.src = "img/blank.jpg"

    img1.classList = "blank"
    
    //send to div
    document.getElementById(divId).append(img1);
}

function CellClicked(event) {

    //row and coloum data
    let row = event.target.parentElement.dataset.x;
    let col = event.target.parentElement.dataset.y;

    //turn system
    if (Grid[row][col] == 0){
        if (turn == 1) {
            X(row, col)
            turn++
        } else if (turn == 2) {
            O(row, col)
            turn--
        }
    }
}

function X (row, col) {
    Grid[row][col] += 5
}

function O (row, col) {
    Grid[row][col] += 2
}

setInterval(gridChecker, 10)

function gridChecker () {
    for(var row = 0; row < 3; row++) {
        for(var coloum = 0; coloum < 3; coloum++) {
            if (Grid[row][coloum] == 5) {
             document.getElementById("img" + row + "-" + coloum).src = img1.src
            }   else if (Grid[row][coloum] == 2) {
             document.getElementById("img" + row + "-" + coloum).src = img2.src
            }  else if (Grid[row][coloum] == 0){
              document.getElementById("img" + row + "-" + coloum).src = "img/blank.jpg"
             }
        }
    }
}

function Winner(event) {
    //row var
    let r0 = Grid[0]
    let r1 = Grid[1]
    let r2 = Grid[2]
    
    //check row 1
    if (r0[0] + r0[1] + r0[2] == 15)  {
        document.getElementById("winner").innerHTML = "X WINS"
        gridId()
    } else if (r0[0] + r0[1] + r0[2] == 6) {
        document.getElementById("winner").innerHTML = "O WINS"
        gridId()
    }
    //check row 2
    if (r1[0] + r1[1] + r1[2] == 15) {
        document.getElementById("winner").innerHTML = "X WINS"
        gridId()
    } else if (r1[0] + r1[1] + r1[2] == 6) {
        document.getElementById("winner").innerHTML = "O WINS"
        gridId()
    }
    //check row 3
    if (r2[0] + r2[1] + r2[2] == 15)  {
        document.getElementById("winner").innerHTML = "X WINS"
        gridId()
    } else if (r2[0] + r2[1] + r2[2] == 6) {
        document.getElementById("winner").innerHTML = "O WINS"
        gridId()
    }

    //check col 1

    if (r0[0] + r1[0] + r2[0] == 15){
        document.getElementById("winner").innerHTML = "X wins"
        gridId()
    } else if (r0[0] + r1[0] + r2[0] == 6) {
        document.getElementById("winner").innerHTML = "O wins"
        gridId()
    }
    
    // check col 2
    
    if (r0[1] + r1[1] + r2[1] == 15){
        document.getElementById("winner").innerHTML = "X wins"
        gridId()
    } else if (r0[1] + r1[1] + r2[1] == 6) {
        document.getElementById("winner").innerHTML = "O wins"
        gridId()
    } 
    
    //check col 3
    
    if (r0[2] + r1[2] + r2[2] == 15){
        document.getElementById("winner").innerHTML = "X wins"
        gridId()
    } else if (r0[2] + r1[2] + r2[2] == 6) {
        document.getElementById("winner").innerHTML = "O wins"
        gridId()
    }

    //check diagonal 1
    
    if (r0[0] + r1[1] + r2[2] == 15) {
        document.getElementById("winner").innerHTML = "X wins"
        gridId()
    } else if (r0[0] + r1[1] + r2[2] == 6) {
        document.getElementById("winner").innerHTML = "O wins"
        gridId()
    }

    //check diagonaol 2

    if (r2[0] + r1[1] + r0[2] == 15) {
        document.getElementById("winner").innerHTML = "X wins"
        gridId()
    } else if (r2[0] + r1[1] + r0[2] == 6) {
        document.getElementById("winner").innerHTML = "O wins"
        gridId()
    }
}

function gridId() {
    for(var row = 0; row < 3; row++) {
        for(var coloum = 0; coloum < 3; coloum++) {
        if (Grid[row][coloum] == 0)
            Grid[row][coloum] += 20
        }
    }
}
//event listeners
document.getElementById("X & O").addEventListener("click", setBtnXO)
document.getElementById("A & Z").addEventListener("click", setBtnAZ)
document.getElementById("Chicken & Worm").addEventListener("click", setBtnCW)
document.getElementById("Meat & Potatoe").addEventListener("click", setBtnMP)
document.getElementById("Monkey & banana").addEventListener("click", setBtnMB)
document.getElementById("Sun & Moon").addEventListener("click", setBtnSM)
document.getElementById("Sword & shield").addEventListener("click", setBtnSS)
document.getElementById("Jedi & Sith").addEventListener("click", setBtnJS)
document.getElementById("Xwing & TIE").addEventListener("click", setBtnXT)

//global variables


//functions
function setBtnXO() {
    //Send to other function that will activat the button pressed
    ActivateBTN("X & O")
    imgs("X & O/", "X", "O" ,".png", ".png")
}
function setBtnAZ() {
    //Send to other function that will activat the button pressed
    ActivateBTN("A & Z")
    imgs("A & Z/" , "A", "Z", ".jpg", ".png")
}
function setBtnCW() {
    //Send to other function that will activat the button pressed
    ActivateBTN("Chicken & Worm")
    imgs("chicken & worms/" , "Chicken" , "worms", ".jpg" ,".jpg")
}
function setBtnMP() {
    //Send to other function that will activat the button pressed
    ActivateBTN("Meat & Potatoe")
    imgs("meat & potatoes/", "meat", "potatoe", ".jpg", ".jpg")
}
function setBtnMB() {
    //Send to other function that will activat the button pressed
    ActivateBTN("Monkey & banana")
    imgs("monkey & bananas/", "monkey", "banana", ".jpg", ".jpg")
}
function setBtnSM() {
    //Send to other function that will activat the button pressed
    ActivateBTN("Sun & Moon")
    imgs("sun & moon/", "Sun", "Moon", ".jpg", ".jpg")
}
function setBtnSS() {
    //Send to other function that will activat the button pressed
    ActivateBTN("Sword & shield")
    imgs("sword & shield/", "sword", "shield", ".jpg", ".jpg")
}

function setBtnJS() {
    //Send to other function that will activat the button pressed
    ActivateBTN("Jedi & Sith")
    imgs("Jedi & Sith/", "Jedi", "Sith" ,".jpg", ".jpg")
}

function setBtnXT() {
    //Send to other function that will activat the button pressed
    ActivateBTN("Xwing & TIE")
    imgs("X-wing & TIE/", "Xwing", "TIE" ,".jpg", ".jpg")
}

function ActivateBTN(BtnPressed) {
    //Unactivate Buttons
    document.getElementById("X & O").classList = "UnActiveBTN"
    document.getElementById("A & Z").classList = "UnActiveBTN"
    document.getElementById("Chicken & Worm").classList = "UnActiveBTN"
    document.getElementById("Meat & Potatoe").classList = "UnActiveBTN"
    document.getElementById("Monkey & banana").classList = "UnActiveBTN"
    document.getElementById("Sun & Moon").classList = "UnActiveBTN"
    document.getElementById("Sword & shield").classList = "UnActiveBTN"
    document.getElementById("Jedi & Sith").classList = "UnActiveBTN"
    document.getElementById("Xwing & TIE").classList = "UnActiveBTN"
    //Activate pressed button
    document.getElementById(BtnPressed).classList = "activeBTN"
}

function imgs(folder, img1, img2, imgtype, imgtype2) {
    let StartingPhoto = folder + img1 + imgtype
    let SecondPhoto = folder +img2 + imgtype2
    document.getElementById("photo1").src = "img/" + StartingPhoto
    document.getElementById("photo2").src = "img/" + SecondPhoto
}

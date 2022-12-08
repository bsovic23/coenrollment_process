// NPMS

// Logo Buttons
cuimcBtn = document.querySelector("#cuimc-btn");
bronxBtn = document.querySelector("#bronx-btn");
cornellBtn = document.querySelector("#cornell-btn");
harlemBtn = document.querySelector("#harlem-btn");
nybcBtn = document.querySelector("#nybc-btn");
rutgersBtn = document.querySelector("#rutgers-btn");

// Logo Button Click Functions
cuimcBtn.addEventListener("click", cuimcAlert);
bronxBtn.addEventListener("click", bronxAlert);
cornellBtn.addEventListener("click", cornellAlert);
harlemBtn.addEventListener("click", harlemAlert);
nybcBtn.addEventListener("click", nybcAlert);
rutgersBtn.addEventListener("click", rutgersAlert);


// General functions to ensure the buttons work

function cuimcAlert() {
    console.log('cuimc button');
};

function bronxAlert() {
    console.log('bronx button');
};

function cornellAlert() {
    console.log('cornell button');
};

function harlemAlert() {
    console.log('harlem button');
};

function nybcAlert() {
    console.log('nybc button');
};

function rutgersAlert() {
    console.log('rutgers button');
};

// Create mock function value returns to test the checkbox + site button combo


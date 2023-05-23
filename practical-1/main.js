let changeCount = document.getElementById("counter");
let personsPerHour = document.getElementById("personsPerHour");

 let countNum = 0;

function count() {
    let counting = countNum+=1;
    changeCount.innerHTML = counting;
}

function save() {
    changeCount.innerHTML = 0;
    let getCount = personsPerHour.innerHTML;
    let add =  getCount + countNum + "|";
    personsPerHour.innerHTML = add;
    
}
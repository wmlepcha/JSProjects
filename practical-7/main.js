// grabbing the buttons

let btnScenery = document.getElementById('btnScenery');
let btnNearby = document.getElementById('btnNearby');
let btnTrekking = document.getElementById('btnTrekking');

// grab the container

let sceneryBox = document.getElementById('scenery');
let trekkingBox = document.getElementById('trekking');
let nearbyBox = document.getElementById('nearbyBox');

btnScenery.addEventListener('click', () => {
    sceneryBox.style.display = 'block';
    trekkingBox.style.display = 'none';
    nearbyBox.style.display = 'none';
});

btnNearby.addEventListener('click', () =>{
    sceneryBox.style.display = 'none';
    trekkingBox.style.display = 'none';
    nearbyBox.style.display = 'block';
});

btnTrekking.addEventListener('click', () =>{
    sceneryBox.style.display = 'none';
    trekkingBox.style.display = 'block';
    nearbyBox.style.display = 'none';
});
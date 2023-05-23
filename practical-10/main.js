
/*
const secondHand = document.querySelector('.second-hand');:
 This line selects the HTML element with the class name 'second-hand' 
 using the document.querySelector() method and assigns it to a constant variable secondHand. 
 This element represents the second-hand of the clock.

const minsHand = document.querySelector('.min-hand');:
 This line selects the HTML element with the class name 'min-hand' and assigns 
 it to a constant variable minsHand. This element represents the minute-hand of the clock.

const hourHand = document.querySelector('.hour-hand');: 
This line selects the HTML element with the class name 'hour-hand' and 
assigns it to a constant variable hourHand. This element represents the hour-hand of 
the clock.

function setDate() { ... }: 
This is a function named setDate() that will be used to update the rotation angles of 
the clock hands based on the current time.

const now = new Date();: 
This line creates a new Date object representing the current date and time, 
and assigns it to a constant variable now.

const seconds = now.getSeconds();: 
This line retrieves the current seconds value from the now Date object using the getSeconds() 
method, and assigns it to a constant variable seconds.

const secondsDegrees = ((seconds / 60) * 360) + 90;: 
This line calculates the rotation angle in degrees for the second-hand based on the 
current seconds value. Since a clock has 60 seconds in a minute and the CSS rotate property 
uses degrees, the formula ((seconds / 60) * 360) calculates the percentage of seconds 
elapsed in the current minute, and then multiplies it by 360 to get the corresponding 
rotation angle. Adding 90 to the result is required to offset the initial rotation angle 
of 90 degrees in the CSS, so that the second-hand starts from the 12 o'clock position.

secondHand.style.transform = rotate(${secondsDegrees}deg);: 
This line updates the CSS transform property of the secondHand element, setting the 
rotation angle to secondsDegrees degrees, which effectively rotates the second-hand 
to the correct position on the clock.

Similar to steps 6-8, the code calculates the rotation angles for the 
minute-hand and hour-hand, based on the current minute and hour values 
retrieved from the now Date object, and updates the CSS transform properties 
of the minsHand and hourHand elements accordingly.

setInterval(setDate, 1000);: 
This line sets up a repeating timer that calls the setDate() function every 1000 milliseconds
 (1 second). This ensures that the clock hands will be updated every second
  to reflect the current time.

setDate();: 
This line immediately calls the setDate() function once when the page loads, 
to initialize the clock hands with the correct initial 
positions based on the current time.
*/

const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
  const now = new Date();

  //getting seconds hand
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // getting min hands
  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;

  // getting hour hands
  const hours = now.getHours();
  const hourDegrees = ((hours/12) * 360) + ((mins/60) * 30) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;

}

setInterval(setDate, 1000);
setDate();


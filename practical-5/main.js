/*
Methods:
Methods are functions that are associated with objects and 
can be invoked on those objects. They are called using the object's 
name followed by a dot (.) and the method name, followed by parentheses (). 
For example:
const greeting = "Hello, world!";
console.log(greeting.length); // Output: 13
In this example, length is a method of the string object greeting, 
and it returns the number of characters in the string.

Properties are values that are associated with objects and can be accessed or modified. 
They represent characteristics or attributes of objects. 
Properties are accessed using the object's name followed by 
a dot (.) and the property name. For example:

const person = {
  name: "John",
  age: 30
};
console.log(person.name); // Output: "John"
In this example, name and age are properties of the person object,
 and their values can be accessed using dot notation.

In JavaScript, objects, arrays, functions, and primitive data types 
(such as strings, numbers, and booleans) all have built-in methods and
 properties that can be used to perform various operations and manipulate data.
  Additionally, you can define your own custom objects with their own methods 
  and properties using JavaScript's object-oriented programming (OOP) features.
/* 
window.addEventListener('keydown', function(e) {...}): 
This sets up an event listener on the window object to listen for keydown events, 
which occur when a key is pressed down. 
The event listener function takes an event object (e) as an argument, 
which represents the keydown event.

document.querySelector(audio[data-key = "${e.keyCode}"]): 
This uses the document.querySelector() method to select an <audio> element 
from the DOM (Document Object Model) that has a data-key attribute with a 
value that matches the e.keyCode property of the event object. 
The e.keyCode property represents the key code of the pressed key.

document.querySelector(.key[data-key = "${e.keyCode}"]): 
This uses the document.querySelector() method again to select an element with a 
class of .key from the DOM that has a data-key attribute with a value that matches 
the e.keyCode property of the event object.

audio.currentTime = 0;: 
This sets the currentTime property of the audio element to 0, 
which resets the audio playback to the beginning.

audio.play(): 
This plays the audio element using the play() method, 
which starts the audio playback.

key.classList.add('playing'): 
This adds a class of 'playing' to the key element using the classList.add() method. 
The classList property provides methods to manipulate the class names of an element,
 and add() is used here to add the 'playing' class, which triggers a CSS transition effect.

keys.forEach(key => key.addEventListener('transitionend',removeTransition)): 
This uses the forEach() method to iterate over each element in the keys NodeList 
(which is a list of elements with a class of .key), 
and adds an event listener for the transitionend event. 
The event listener triggers the removeTransition() function when the transition ends.

e.propertyName: 
This is a property of the event object that represents the name of the CSS property 
that transitioned.

this.classList.remove('playing'): 
This removes the 'playing' class from the element that triggered the transitionend 
event using the classList.remove() method. The this keyword refers to 
the element that triggered the event, and classList.remove() is used to remove the 
'playing' class, which ends the CSS transition effect.
*/



function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime=0;
    audio.play();
    key.classList.add('playing');
}
function removeSound(e){
    if(e.propertyName != "transform") return;
    this.classList.remove('playing');
}

let keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeSound))
window.addEventListener('keydown', playSound);
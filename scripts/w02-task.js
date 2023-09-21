/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullNuame = "Chris Lamah";
let currentYear = new Date().getFullYear();
const profilePicture = "./images/Chris.jpg";


/* Step 3 - Element Variables */
let nameElement = document.getElementById("name");
let foodElement = document.getElementById ("food");
let yearElement = docuument.querySelector ("#year");
let imageElement = document.querySelector(".images/Chris.jpg");

/* Step 4 - Adding Content */
nameElement.innerHTML = fullName;
imageElement.src = profilePicture;
nameElement.innerHTML = `<strong>$ {fullName}</strong>`; 
yearElement.textContent = currentYear;
imageElement.setAttribute("src", profilePicture);
imageElement.setAttribute("alt", `Profile image of ${fullName}`);

/* Step 5 - Array */
const favoriteFoods = ["Corn", "Bread", "Rice"];
foodElement.innerHTML = favoriteFoods[0];
let anotherFavoriteFood = "Beans";
let count = favoriteFoods.push('Burger');
foodElement.innerHTML += `<br>${anotherFavoriteFood}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${anotherFavoriteFood}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${anotherFavoriteFood}`;








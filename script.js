// get the current date

const date = new Date();
const todaysDay = date.getDate();
const todaysMonth = date.getMonth();
const todaysYear = date.getFullYear();

// create current date as strings

const monthName = {
    10: "November",
    11: "December"
}

const todayAsString = `${monthName[todaysMonth]} ${todaysDay}, ${todaysYear}`;
console.log(todayAsString);



// select and create reference to our "date" html element

const spanReference = document.querySelector(".date")

// set ther inner text of the element to our date string

spanReference.innerText = todayAsString
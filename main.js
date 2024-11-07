jaaniPaev()

const buttonDate = document.querySelector("#dateButton");
const headingFour = document.querySelector("h4");

buttonDate.addEventListener('click', updateContent)

function jaaniPaev() {
    let johnsDay = new Date(2024, 5, 25);
    //daysUntil = johnsDay - new Date(getDate());
    console.log(johnsDay, typeof johnsDay);
}

function updateContent(){
    headingFour.textContent = "Today's date is: " + new Date(YYYY-MM-DD) + ` and Jaanipäev is ${daysUntil} days away.`;
}


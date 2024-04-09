/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */

// Array of URLs for the images 
let pictureURLs = [
    "https://therecipecritic.com/wp-content/uploads/2023/02/soup_dumplings.jpg",
    "https://pbs.twimg.com/media/EoZzAZzWEAIfMGc.jpg:large",
    "https://thecommunalfeast.com/wp-content/uploads/2021/09/2A94FB4E-8797-4BBA-9192-478DB91729F0-scaled.jpeg"
];

// Array for bullet points underneath pictures for more information 
let bulletPoints = [
    ["Amazing soup filled dumplings with great flavor", "Perfect for cold days", "Delicious taste and flavor"],
    ["Fluffy waffles infused with ube", "Topped with ube butter", "Great way to spice up waffles"], 
    ["Amazing authentic street tacos", "Topped with mango salsa", "Great tacos to try"]

];

// This is an array of strings (Food titles)
let titles = [
    "Soup Dumplings",
    "Ube Waffles",
    "Tacos Al Pastor"
];




// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.


// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");

    const infoData = [
    {titlePicture: titles[0], pictureURL: pictureURLs[0]},
    {titlePicture: titles[1], pictureURL: pictureURLs[1]},
    {titlePicture: titles[2], pictureURL: pictureURLs[2]},

    ]; 

    const bulletData = [
        {bulletPoint: bulletPoints[0]},
        {bulletPoint: bulletPoints[1]},
        {bulletPoint: bulletPoints[2]},

    ];


    
    for (let i = 0; i < titles.length; i++) { 
        // This part of the code doesn't scale very well! After you add your
        // own data, you'll need to do something totally different here.
        const {titlePicture, pictureURL} = infoData[i]; 
        const bulletPointsForCard = bulletData[i];

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, titlePicture, pictureURL, bulletPointsForCard); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}


function editCardContent(card, newTitle, newImageURL, bulletPoints) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    // Get the ul element where bullet points will be added
    const bulletList = card.querySelector(".bullet-points");
    bulletList.innerHTML = ""; // clears existing bullet points data 

    // Loop through each bullet point and create a new li element 
    bulletPoints.forEach(bulletPoint => {
        const listItem = document.createElement("li");
        listItem.textContent = bulletPoint; 
        bulletList.appendChild(listItem);
    })
  

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab

    console.log("new card title:", newTitle, "- html content: ", card.outerHTML);
} // cardouterHTML was missing a dot in between card and outer 

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
    console.log("Button Clicked!")
    alert("I guess I can kiss heaven goodbye, because it got to be a sin to look this good!");
}

function removeLastCard() {
    if (titles.length > 0) {
        titles.pop(); // Remove last item in titles array 
        showCards(); // Call showCards 
    } else {
        alert("There are no more cards to remove");
    }
}

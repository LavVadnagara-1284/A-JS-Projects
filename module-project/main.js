import { getData } from "./library.js"; 

async function displayData() {
    const userData = await getData(); 
    if (userData) {
        console.log(`Name: ${userData.name || "No Name Found"}`);
        console.log(`Username: ${userData.login || "No Name Found"}`);
        console.log(`Total Git Repos: ${userData.public_repos || "No Name Found"}`);
        console.log(`Bio: ${userData.bio || "No bio available."}`);
    } else {
        console.log("Failed to fetch data.");
    }
}

displayData();
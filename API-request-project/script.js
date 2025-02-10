function getData() {

    let cardImage = document.getElementById("card-image");
    let cardTitle = document.getElementById("card-title");
    let cardUsername = document.getElementById("card-username");
    let cardGitRepo = document.getElementById("card-gitrepo");
    let cardDescription = document.getElementById("card-description");

    const requestUrl = 'https://api.github.com/users/LavVadnagara-1284'
    const xhr = new XMLHttpRequest();
    xhr.open('GET', requestUrl)
    xhr.onreadystatechange = function () {
        console.log(`Ready State: ${xhr.readyState}`);
        if (xhr.readyState === 4) {
            const data = JSON.parse(this.responseText)
            console.log(data);
            cardImage.src = data.avatar_url;
            cardTitle.textContent = data.name || "No Name Found";
            cardUsername.textContent = `Username: ${data.login || "No Name Found"}`;
            cardGitRepo.textContent = `Total Git Repos: ${data.public_repos || "No Name Found"}`;
            cardDescription.textContent = `Bio: ${data.bio || "No bio available."}`;
        }
    }
    xhr.send();

}
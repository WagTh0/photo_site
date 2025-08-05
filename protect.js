(function () {
  const correctPassword = "imagesofthepnw2025";
  const storageKey = "siteAccessGranted";

  if (!localStorage.getItem(storageKey)) {
    let userInput = prompt("Enter the password to access this site:");
    while (userInput !== correctPassword) {
      userInput = prompt("Incorrect password. Enter the password to access this site:");
    }
    localStorage.setItem(storageKey, "true");
  }
})();


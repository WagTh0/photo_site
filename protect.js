(function () {
  const correctPassword = "letmein"; // Change this to your actual password
  const storageKey = "siteAccessGranted";

  // Check if password was already entered
  if (!localStorage.getItem(storageKey)) {
    const userInput = prompt("Enter the password to access this site:");
    if (userInput === correctPassword) {
      localStorage.setItem(storageKey, "true");
    } else {
      alert("Access denied.");
    }
  }
})();
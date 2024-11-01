const choices = ["rock", "paper", "scissors"];
const resultText = document.getElementById("resultText");
const playAgainButton = document.getElementById("playAgain");
const userHand = document.getElementById("userHand");
const computerHand = document.getElementById("computerHand");

document.querySelectorAll(".choice").forEach(button => {
    button.addEventListener("click", function() {
        const userChoice = this.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        showHands(userChoice, computerChoice);
        determineWinner(userChoice, computerChoice);
    });
});

function showHands(user, computer) {
    userHand.innerHTML = `<i class="fas fa-hand-${user}"></i>`;
    computerHand.innerHTML = `<i class="fas fa-hand-${computer}"></i>`;
    
    // İfadeleri göster
    userHand.classList.add("show");
    computerHand.classList.add("show");
}

function determineWinner(user, computer) {
    if (user === computer) {
        resultText.innerText = `Beraberlik! Bilgisayar da ${computer} seçti.`;
    } else if (
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")
    ) {
        resultText.innerText = `Kazandın! Bilgisayar ${computer} seçti.`;
    } else {
        resultText.innerText = `Kaybettin! Bilgisayar ${computer} seçti.`;
    }
    playAgainButton.style.display = "block";
}

playAgainButton.addEventListener("click", function() {
    resultText.innerText = "";
    userHand.innerHTML = "";
    computerHand.innerHTML = "";
    userHand.classList.remove("show");
    computerHand.classList.remove("show");
    playAgainButton.style.display = "none";
});

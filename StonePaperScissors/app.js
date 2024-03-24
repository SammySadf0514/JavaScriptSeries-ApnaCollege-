let userScore = 0
let computerScore = 0

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")
const userScorePara = document.querySelector("#user-score")
const computerScorePara = document.querySelector("#comp-score")
const resetGame = document.querySelector("#resetGame")

const drawGame = () => {
    msg.innerText = "Game was a draw! No one won"
    msg.style.backgroundColor = "black"
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++
        msg.innerText = `You Win, Computer loses. ${userChoice} beats ${compChoice}`
        userScorePara.innerText = userScore
        msg.style.backgroundColor = "green"
    }
    else{
        computerScore++

        msg.innerText = `You lose, Computer Wins. ${compChoice} beats ${userChoice}`
        computerScorePara.innerText = computerScore
        msg.style.backgroundColor = "red"
    }
}

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random() * options.length)
    return options[randomIndex]
}

const playgame = (userChoice) => {
    const compChoice = genCompChoice()

    if( compChoice == userChoice){
        drawGame()
    }
    else{
        let userWin = true
        if(userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true

        }
        else{
            userWin = compChoice === "rock" ? false : true
        }
        showWinner(userWin, userChoice, compChoice)
    }
}


choices.forEach((choice) => {
    console.log(choice)
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id")
        playgame(userChoice)
    })
}) 

resetGame.addEventListener("click", (reset) => {
    msg.innerText = "Play your move"
    msg.style.backgroundColor = "black"
    userScorePara.innerText = userScore = 0
    computerScorePara.innerText = computerScore = 0
})

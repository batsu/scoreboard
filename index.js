let homeScore = 0
let guestScore = 0

function checkWinning() {
  if (homeScore > guestScore) {
    document.getElementById("box1").classList.add("winning")
    document.getElementById("box2").classList.remove("winning")
  }
  if (homeScore < guestScore) {
    document.getElementById("box2").classList.add("winning")
    document.getElementById("box1").classList.remove("winning")
  }
  if (homeScore === guestScore) {
    document.getElementById("box2").classList.remove("winning")
    document.getElementById("box1").classList.remove("winning")
  }
}

function add(team, num) {
  if (team === 1) {
    homeScore += num
    document.getElementById("home").innerText = homeScore
  }
  if (team === 2) {
    guestScore += num
    document.getElementById("guest").innerText = guestScore
  }
  checkWinning()


}

function resetScores(team) {
  if (team === 1) {
    homeScore = 0
    document.getElementById("home").innerText = homeScore
  }
  if (team === 2) {
    guestScore = 0
    document.getElementById("guest").innerText = guestScore
  }
  checkWinning()
}

window.checkWinning = checkWinning
window.add = add
window.resetScores = resetScores
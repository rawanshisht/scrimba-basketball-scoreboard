let homeScore = 0
let guestScore = 0
let homeScoreEl = document.getElementById("home-score-el")
let guestScoreEl = document.getElementById("guest-score-el")
let homeTitleEl = document.getElementById("home-winner")
let guestTitleEl = document.getElementById("guest-winner")

if (homeScore > guestScore) {
    document.getElementById("home-winner").after = "Home wins!"
}
function incrementScore(place, score) {
    if (place === "home") {
        homeScore += score
        homeScoreEl.innerHTML = homeScore
    } else if (place === "guest") {
        guestScore += score
        guestScoreEl.innerHTML = guestScore
    }
    highlightWinner();
}
function resetGame() {
    homeScore = 0
    guestScore = 0
    homeScoreEl.innerHTML = homeScore
    guestScoreEl.innerHTML = guestScore
    homeTitleEl.classList.remove("winner")
    guestTitleEl.classList.remove("winner")
}
function highlightWinner() {
    if (homeScore > guestScore) {
        homeTitleEl.classList.add("winner")
    }
    else if (guestScore > homeScore) {
        guestTitleEl.classList.add("winner")
    } else {
        homeTitleEl.classList.remove("winner")
        guestTitleEl.classList.remove("winner")
    }
}

const allBtn = document.getElementById("select-all");
const interviewBtn = document.getElementById("select-interview");
const rejectedBtn = document.getElementById("select-rejected");

const dashAll = document.getElementById("count-all");
const dashInterview = document.getElementById("count-interview");
const dashRejected = document.getElementById("count-rejected");

const jobCardsContainer = document.getElementById("job-cards");
const blankPage = document.querySelector(".blankpage-info");
const subTitleCount = document.querySelector(".job-notices .AJ div.text-right p");

function refresh(currentFilter) {
    const cards = document.querySelectorAll(".job-card");
    let allCount = 0, intCount = 0, rejCount = 0, visibleNow = 0;

    cards.forEach(card => {
        const status = card.getAttribute("data-status") || "available";
        if (status === "available") allCount++;
        if (status === "interview") intCount++;
        if (status === "rejected") rejCount++;

        if (currentFilter === "all" && status === "available") {
            card.classList.remove("hidden");
            visibleNow++;
        } else if (currentFilter === "interview" && status === "interview") {
            card.classList.remove("hidden");
            visibleNow++;
        } else if (currentFilter === "rejected" && status === "rejected") {
            card.classList.remove("hidden");
            visibleNow++;
        } else {
            card.classList.add("hidden");
        }
    });

    dashAll.innerText = allCount;
    dashInterview.innerText = intCount;
    dashRejected.innerText = rejCount;
    subTitleCount.innerText = visibleNow + " Jobs";

    if (visibleNow === 0) {
        blankPage.classList.remove("hidden");
        jobCardsContainer.classList.add("hidden");
    } else {
        blankPage.classList.add("hidden");
        jobCardsContainer.classList.remove("hidden");
    }
}

const allJobCards = document.querySelectorAll(".job-card");

allJobCards.forEach(card => {
    const buttons = card.querySelectorAll("button");

    buttons.forEach(btn => {
        const btnText = btn.innerText.trim().toLowerCase();

        if (btnText === "interview") {
            btn.onclick = function() {
                card.setAttribute("data-status", "interview");
                refresh("all");
            };
        } 
        
        else if (btnText === "rejected") {
            btn.onclick = function() {
                card.setAttribute("data-status", "rejected");
                refresh("all");
            };
        }
    });
});

allBtn.onclick = () => refresh("all");
interviewBtn.onclick = () => refresh("interview");
rejectedBtn.onclick = () => refresh("rejected");
refresh("all");
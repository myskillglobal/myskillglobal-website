/* =========================================================
   1. ANIMATION / REVEAL OBSERVER
   ========================================================= */
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      const siblings = Array.from(e.target.parentElement.querySelectorAll('.reveal'));
      setTimeout(() => e.target.classList.add('in-view', 'visible'), siblings.indexOf(e.target) * 80);
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => observer.observe(el));

/* =========================================================
   2. PUBLIC LEADERBOARD CONFIG & API
   ========================================================= */
const LEADERBOARD_API = "https://script.google.com/macros/s/AKfycbw6RCPloCBvzyM_quGnBgekRwAVZUVCjcATSetNwoNuhknnJah_5DJaGPtwEkqh7aY/exec";

function leaderboardMedal(rank) {
  const r = Number(rank);
  return r === 1 ? "🥇" : r === 2 ? "🥈" : r === 3 ? "🥉" : r;
}

/* =========================================================
   4. RENDER LEADERBOARD ROWS
   ========================================================= */
function renderLeaderboard(data) {
  const tbody = document.getElementById("leaderboardBody");
  if (!tbody) return;

  tbody.innerHTML = "";

  if (!Array.isArray(data) || data.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" class="leaderboard-empty">
          🏆 No scores available yet.
        </td>
      </tr>
    `;
    return;
  }

  data.forEach(function(item, index) {
    const row = document.createElement("tr");

    /* Rank */
    const rankCell = document.createElement("td");
    rankCell.className = "rank-cell";
    const displayRank = item.rank || (index + 1);
    rankCell.innerHTML = `<span class="rank-medal">${leaderboardMedal(displayRank)}</span>`;
    row.appendChild(rankCell);

    /* Name */
    const nameCell = document.createElement("td");
    nameCell.textContent = item.name || "—";
    row.appendChild(nameCell);

    /* School */
    const schoolCell = document.createElement("td");
    schoolCell.textContent = item.school || "—";
    row.appendChild(schoolCell);

    /* Country */
    const countryCell = document.createElement("td");
    if (item.country && typeof getCountryFlagHTML === "function") {
      countryCell.innerHTML = getCountryFlagHTML(item.country);
    } else {
      countryCell.textContent = item.country || "—";
    }
    row.appendChild(countryCell);

    /* Exam */
    const examCell = document.createElement("td");
    examCell.textContent = item.examName || "—";
    row.appendChild(examCell);

    /* Score */
    const scoreCell = document.createElement("td");
    scoreCell.style.fontWeight = "bold";
    scoreCell.style.color = "var(--gold-light)";
    scoreCell.textContent = (item.highScore || 0) + " / " + (item.totalMarks || 0);
    row.appendChild(scoreCell);

    /* Attempts */
    const attemptsCell = document.createElement("td");
    attemptsCell.textContent = item.attempts || 1;
    row.appendChild(attemptsCell);

    tbody.appendChild(row);
  });
}



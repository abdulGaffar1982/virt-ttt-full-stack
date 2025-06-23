function fetchScores(): Promise<Record<string, number>> {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        anjali: 420,
        ramesh: 1280,
        vijaykumar: 50,
        neha: 705
      });
    }, 2000);
  });
}

async function showLeaderboard(): Promise<void> {
  const data = await fetchScores();

  const leaderboard = Object.entries(data)
    .map(([username, score]) => {
      const paddedName = username.padEnd(15, " ");
      const paddedScore = score.toString().padStart(5, "0");
      return `${paddedName} ${paddedScore}`;
    });

  console.log("Leaderboard:");
  leaderboard.forEach(entry => console.log(entry));
}

showLeaderboard();

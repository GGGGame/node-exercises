function luckyDraw(player: string) {
  return new Promise((resolve, reject) => {
    const win = Boolean(Math.round(Math.random()));

    process.nextTick(() => {
      if (win) {
        resolve(`${player} won a prize in the draw!`);
      } else {
        reject(new Error(`${player} lost the draw.`));
      }
    });
  });
}

const getResults = async () => {
  try {
    const playerArray = ["Tina", "Jorge", "Julien"];

    playerArray.forEach(async (players) => {
      const player = await luckyDraw(players);

      console.log(player);
    });
  } catch (error) {
    console.log(error);
  }
};

getResults();

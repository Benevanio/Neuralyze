let reconizer;

function predictWord() {
    const words = reconizer.wordLabels();
    
    reconizer.listen(({scores}) => {
        scores = Array.from(scores).map((s, i) => ({score: s, word: words[i]}));
        scores.sort((s1, s2) => s2.score - s1.score);
        document.querySelector('#console').textContent = scores[0].word;
    }, {probabilityThreshold: 0.75});

}

async function app() {
    reconizer = speechCommands.create('BROWSER_FFT');
    await reconizer.ensureModelLoaded();
    predictWord();
}

app();

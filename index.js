function pokazUkryj (element) {
    if (element.style.display === 'inline') {
        element.style.display = 'none';
    } else {
        element.style.display = 'inline';
    }
}

const youTube = document.getElementById('youTube');
const youTubeImg = document.getElementById('youTubeImg');
youTube.addEventListener('click', function () {
    pokazUkryj(youTubeImg);
});

const calculator = document.getElementById('calculator');
const calculatorImg = document.getElementById('calculatorImg');
calculator.addEventListener('click', function () {
    pokazUkryj(calculatorImg);
});

const disney = document.getElementById('disney');
const disneyImg = document.getElementById('disneyImg');
disney.addEventListener('click', function () {
    pokazUkryj(disneyImg);
});
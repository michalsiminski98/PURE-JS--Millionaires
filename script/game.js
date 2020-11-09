// question place
const question = document.querySelector('.game-question');
// answer buttons
const first_answer = document.querySelector('.game-first-answer');
const second_answer = document.querySelector('.game-second-answer');
const third_answer = document.querySelector('.game-third-answer');
const fourth_answer = document.querySelector('.game-fourth-answer');
// operation buttons
const next_question_button = document.querySelector('.next-button');
const score_button = document.querySelector('.game-button-score');
// question number in HTML
const question_h2 = document.querySelector('.question-number > span');
let number = 0;
let flag = 0;
let reward = document.querySelector('.end-points');


// questions
let questionContent = [
    ["Podaj wzór Pitagorasa", "Ile to liter, w którym plecy tracą swoją szlachetną nazwę?"],
    ["2 razy 2", "Ile to 1111 razy 1111, jeśli 1 razy 1 to 1, a 11 razy 11 to 121"],
    ["Fuga to na pewno nie...", "Żydowskie Święto Świateł, zwane też Chanuką trwa osiem dni. Ile świątecznych świec płonie ósmego dnia na specjalnym świeczniku?"],
    ["Jak nazywa się zjawisko świetlne obserwowane tylko na biegunie?", "Jak nazywa się diabeł o imieniu podobnym do wierzby?"],
    ["Czyj marsz grany jest na ślubach?"],
    ["Jaka moneta była opłatą dla przewoźnika w Hadesie?", "Jak nazywa się wódka pędzona ze śliwek?"],
];

// answers for questions
let question_answers = [
    ["e = mc^2", "&#916; = b^2 * 4ac", "a^2 + b^2 = c^2 ", "Arka Gdynia", "4 ", "3", "2", "12"],
    ["2", "1", "raz dwa trzy", "4 ", "123 321", "321", "1 112 222", "1 234 321 "],
    ["utwór polifoniczny", "trująca ryba ", "szczelina między płytkami", "reakcja ucieczkowa", "wszystkie gasną", "siedem", "osiem ", "jedna"],
    ["tęcza", "zorza polarna ", "łuna", "miraż", "Boruta", "Rokita ", "Kusy", "Bies"],
    ["Ogińskiego", "Mendelsona ", "Straussa", "Dąbrowskiego"],
    ["dukat", "obol ", "talar", "dinar", "tokaja", "sake", "rakija ", "alasz"]
];

// draw a question
const questionDraw = (e) => {
    if (e.target.innerHTML == "Zakończ") {
        reward.innerHTML = 1000000;
        game_area.classList.toggle('disabled');
        match_score_area.classList.toggle('disabled');
        number = 0;
        question_h2.innerHTML = '0';
        e.target.innerHTML = "Dalej";
    } else if (next_question_button.classList.contains('correctAnswer') == true || flag == 0) {
        // delete green button
        first_answer.classList.remove('green-button');
        second_answer.classList.remove('green-button');
        third_answer.classList.remove('green-button');
        fourth_answer.classList.remove('green-button');
        // question
        let question_number = Math.floor(Math.random() * questionContent[number].length);
        question.innerHTML = questionContent[number][question_number];
        // answer buttons
        first_answer.innerHTML = question_answers[number][question_number * 4];
        second_answer.innerHTML = question_answers[number][question_number * 4 + 1];
        third_answer.innerHTML = question_answers[number][question_number * 4 + 2];
        fourth_answer.innerHTML = question_answers[number][question_number * 4 + 3];
        // reward
        number++;
        if (number == 1) {
            reward.innerHTML = 0;
        }
        if (number == 2) {
            reward.innerHTML = 100;
        } else if (number == 3) {
            reward.innerHTML = 1000;
        } else if (number == 4) {
            reward.innerHTML = 10000;
        } else if (number == 5) {
            reward.innerHTML = 100000;
        } else if (number == 6) {
            reward.innerHTML = 500000;
        }
        question_h2.innerHTML++;
        next_question_button.classList.remove('correctAnswer');
        flag++;
    }
}

// color correct answer

function checkCorrectAnswer(answer) {
    if (answer.innerHTML.charAt(answer.innerHTML.length - 1) == " ") {
        answer.classList.add('green-button');
    }
}

// next and score buttons

const markingAnswer = (e) => {
    // correct answer
    if (next_question_button.classList.contains('correctAnswer') === false && score_button.classList.contains('disabled') === true) {
        if (e.target.innerHTML.charAt(e.target.innerHTML.length - 1) == " ") {
            e.target.classList.add('green-button');
            next_question_button.classList.toggle('correctAnswer');
            // correct and last question
            if (number == questionContent.length) next_question_button.innerHTML = "Zakończ";
        }
        // lose
        else {
            score_button.classList.toggle('disabled');
            e.target.classList.add('red-button');
            checkCorrectAnswer(first_answer);
            checkCorrectAnswer(second_answer);
            checkCorrectAnswer(third_answer);
            checkCorrectAnswer(fourth_answer);
        }
    }
};

// number and colors reset when game ends

const numberReset = (e) => {
    first_answer.classList.remove('red-button');
    first_answer.classList.remove('green-button');
    second_answer.classList.remove('red-button');
    second_answer.classList.remove('green-button');
    third_answer.classList.remove('red-button');
    third_answer.classList.remove('green-button');
    fourth_answer.classList.remove('red-button');
    fourth_answer.classList.remove('green-button');
    question_h2.innerHTML = '0';
    number = 0;
    flag = 0;
    e.target.classList.toggle('disabled');
};

// start game and marking question
document.querySelector('.menu-button-play').addEventListener('click', questionDraw);
next_question_button.addEventListener('click', questionDraw);
score_button.addEventListener('click', numberReset);
first_answer.addEventListener('click', markingAnswer);
second_answer.addEventListener('click', markingAnswer);
third_answer.addEventListener('click', markingAnswer);
fourth_answer.addEventListener('click', markingAnswer);
// move buttons
const menu_results_button = document.querySelector('.menu-button-results');
const results_menu_button = document.querySelector('.results-back-button');
const menu_play_button = document.querySelector('.menu-button-play');
const game_score_button = document.querySelector('.game-button-score');
const score_menu_button = document.querySelector('.score-back-button');
// areas
const menu_area = document.querySelector('.menu');
const game_area = document.querySelector('.game');
const results_area = document.querySelector('.results');
const match_score_area = document.querySelector('.match-score');


// move buttons (without "Dalej" button)

const results_and_menu_buttons = () => {
    menu_area.classList.toggle('disabled');
    results_area.classList.toggle('disabled');
}
const game_and_menu_button = () => {
    menu_area.classList.toggle('disabled');
    game_area.classList.toggle('disabled');
    document.querySelector('#user-name').value = '';
}
const game_and_score_button = () => {
    game_area.classList.toggle('disabled');
    match_score_area.classList.toggle('disabled');
}
const score_and_menu_button = () => {
    menu_area.classList.toggle('disabled');
    match_score_area.classList.toggle('disabled');
}
menu_results_button.addEventListener('click', results_and_menu_buttons);
results_menu_button.addEventListener('click', results_and_menu_buttons);
menu_play_button.addEventListener('click', game_and_menu_button);
game_score_button.addEventListener('click', game_and_score_button);
score_menu_button.addEventListener('click', score_and_menu_button);
// saving player
const player_name = document.querySelector('#user-name');
const firstPlace = document.querySelector('.first-place');
const secondPlace = document.querySelector('.second-place');
const thirdPlace = document.querySelector('.third-place');


const savingName = () => {

    let firstPlaceReward = document.querySelector('.first-place-reward');
    let secondPlaceReward = document.querySelector('.second-place-reward');
    let thirdPlaceReward = document.querySelector('.third-place-reward');

    if (parseInt(reward.innerHTML) > parseInt(firstPlaceReward.innerText)) {
        let firstToSecond = firstPlace.innerHTML.replace('first-place-reward', 'second-place-reward');
        let secondtoThird = secondPlace.innerHTML.replace('second-place-reward', 'third-place-reward');
        thirdPlace.innerHTML = `${secondtoThird}`;
        secondPlace.innerHTML = `${firstToSecond}`;
        firstPlace.innerHTML = `${player_name.value} - <span class="first-place-reward">${reward.innerHTML}</span> zł`;
    } else if (parseInt(reward.innerHTML) > parseInt(secondPlaceReward.innerText)) {
        let secondToThird = secondPlace.innerHTML.replace('second-place-reward', 'third-place-reward');
        thirdPlace.innerHTML = `${secondToThird}`;
        secondPlace.innerHTML = `${player_name.value} - <span class="second-place-reward">${reward.innerHTML}</span> zł`;
    } else if (parseInt(reward.innerHTML) > parseInt(thirdPlaceReward.innerText)) {
        thirdPlace.innerHTML = `${player_name.value} - <span class="third-place-reward">${reward.innerHTML}</span> zł`;
    }
}

document.querySelector('.score-back-button').addEventListener('click', savingName);
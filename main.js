// Your code goes here
let player_1_input = document.createElement('input')
let player_2_input = document.createElement('input')
player_1_input.setAttribute('placeholder', 'Player1 Username')
player_2_input.setAttribute('placeholder', 'Player2 Username')
let body = document.querySelector('body')
let player_1_div = document.querySelector('.player1')
let player_2_div = document.querySelector('.player2')
let wrapper = document.querySelector('.wrapper')
let divInput = document.querySelector('.divInput')
divInput.append(player_1_input, player_2_input)
wrapper.append(player_1_div, player_2_div)


var player_1_obj;
var player_2_obj;

//player-1
var fetchPlayer1 = (e) => {
    if (e.keyCode === 13) {
        fetch(`https://api.github.com/users/${e.target.value}`)
            .then(res => res.json())
            .then(data => player_1_obj = data)
            .then(response => {
                player_1_div.innerHTML = ""
                var username_player_1 = document.createElement('span')
                username_player_1.textContent = response.login
                var img_player_1 = document.createElement('img')
                img_player_1.style.margin = "0 auto"
                img_player_1.setAttribute('src', response.avatar_url)
                img_player_1.style.height = '150px'
                img_player_1.style.width = '150px'
                player_1_div.append(username_player_1, img_player_1)
                player_1_input.value = ""
            })

    }
}

//player-2
var fetchPlayer2 = (e) => {
    if (e.keyCode === 13) {
        fetch(`https://api.github.com/users/${e.target.value}`)
            .then(res => res.json())
            .then(data => player_2_obj = data)
            .then(response => {
                player_2_div.innerHTML = ""
                var username_player_2 = document.createElement('span')
                username_player_2.textContent = response.login
                var img_player_2 = document.createElement('img')
                img_player_2.style.margin = "0 auto"
                img_player_2.setAttribute('src', response.avatar_url)
                img_player_2.style.height = '150px'
                img_player_2.style.width = '150px'
                player_2_div.append(username_player_2, img_player_2)
                player_2_input.value = ""
                console.log(calculateWinner(player_1_obj, response))
            })
    }
}

var span = document.createElement('span')
var span1 = document.createElement('span')

//winner function
var calculateWinner = (obj1, obj2) => {
    var score1;
    var score2;
    score1 = (obj1.followers + obj1.public_repos + obj1.public_gists) / 2;
    score2 = (obj2.followers + obj2.public_repos + obj2.public_gists) / 2;
    if (score1 > score2) {
        span.textContent = `Winner`
        span1.textContent = `Loser`
        player_1_div.append(span)
        player_2_div.append(span1)

    } else {
        span1.textContent = `Winner`
        span.textContent = `Loser`
        player_1_div.append(span)
        player_2_div.append(span1)
    }

}

player_1_input.addEventListener('keyup', fetchPlayer1)
player_2_input.addEventListener('keyup', fetchPlayer2)

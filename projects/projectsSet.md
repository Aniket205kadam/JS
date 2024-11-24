# Project related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## project 1 => BackgroundColor-changer

```javascript
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
    button.addEventListener('click', function(event) {
        switch (event.target.id) {
            case 'grey':
                body.style.backgroundColor = event.target.id;
                break;
            case 'white':
                body.style.backgroundColor = event.target.id;
                break;
            case 'blue':
                body.style.backgroundColor = event.target.id;
                break;
            case 'yellow':
                body.style.backgroundColor = event.target.id;
                break;
            case 'purple':
                body.style.backgroundColor = event.target.id;
                break;
            
            default:
                body.style.backgroundColor = 'red';
                break;
        }
    });
});

```

## project 2 => BMI-Generator

```javascript

const form = document.querySelector('form')

form.addEventListener('submit', (event) => {
    event.preventDefault() //stop the submittion
    const height = Number.parseInt(document.querySelector('#height').value)
    const weight = Number.parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#results')

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height: ${height}`
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please give a valid weight: ${weight}`
    } else {

        const BMI = (weight/(height*height) * 10000).toFixed(2)

        // show the result
        result.innerHTML = `<span>${BMI}</span>`
        
        // additional feature
        const weightGuides = document.querySelectorAll('.demo')
        if (BMI < 18.6) {
            weightGuides[1].style.background = '#797978'
            weightGuides[2].style.background = '#797978'
            weightGuides[0].style.background = '#fc6203'
        } else if (BMI > 18.6 && BMI < 24.9) {
            weightGuides[0].style.background = '#797978'
            weightGuides[2].style.background = '#797978'
            weightGuides[1].style.background = '#56fc03'
        } else if (BMI > 24.9) {
            weightGuides[0].style.background = '#797978'
            weightGuides[1].style.background = '#797978'
            weightGuides[2].style.background = '#fc3003'
        } else {
            alert('Something is worng')
        }
    }
})

```

## project 3 => Digit-clock

```javascript

const clock = document.querySelector('#clock')
const heading = document.createElement('h1')

function updateTime() {
    const currentTime = new Date().toLocaleTimeString();
    heading.innerHTML = `<strong>${currentTime}</strong>`
    clock.appendChild(heading)
}
// updateTime()
setInterval(updateTime, 1000)

```

## project 4 => GusserGame

```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('PLease enter a valid number');
  } else if (guess < 1) {
    alert('PLease enter a number more than 1');
  } else if (guess > 100) {
    alert('PLease enter a  number less than 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMessage(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is TOOO low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is TOOO High`);
  }
}

function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess} `;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}

```

## project 5 => keyboard

```javascript

const insert = document.getElementById('insert')

window.addEventListener('keydown', (event) => {
    insert.innerHTML = `
        <div class='color'>
           <table>
            <tr>
                <th>Key</th>
                <th>Keycode</th>
                <th>code</th>
            </tr>
            <tr>
                <td>${event.key === " " ? "Space" : event.key}</td>
                <td>${event.keyCode}s</td>
                <td>${event.code}</td>
            </tr>
            </table> 
        </div>
    `
})

```

## project 6 => UnlimitedColors

```javascript

// generate a random color

const randomColor = function() {
    const hex = '0123456789ABCDEF'
    let color = '#'

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

const changeBackground = function() {
    // change background color
    document.body.style.backgroundColor = randomColor()
}

let intervalId = null; 
document.querySelector('#start').addEventListener('click', (event) => {
    if (intervalId === null) {
        intervalId = setInterval(changeBackground, 1000)
    }
    document.body.style.color = '#FFFFFF'
})

document.querySelector('#stop').addEventListener('click', (event)=> {
    document.body.style.backgroundColor = '#FFFFFF'
    document.body.style.color = '#000000'
    clearInterval(intervalId)
    intervalId = null
})


```
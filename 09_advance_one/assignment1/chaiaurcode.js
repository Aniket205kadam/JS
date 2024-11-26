// get username in the github
const searchBtn = document.querySelector('.search-btn')
const searchedUsername = document.querySelector('.search-input')
const container = document.querySelector('.container')


const disableOrEnableContainer = (action) => {
    if (action === 'DISABLE') {
        container.style.pointerEvents = 'none'
        container.style.opacity = '0.0'
    } else if (action === 'ENABLE') {
        container.style.pointerEvents = 'auto'
        container.style.opacity = '1'
    }
}

const requestToGitServer = function(username){
    let data = null
    if (username === null) {
        console.log('Enter your username');
        return
    }
    //remove empty space
    username = username.replace(/\s+/g, '');

    const request = new XMLHttpRequest();
    const requestUrl = `https://api.github.com/users/${username}`
    request.open('GET', requestUrl)
    request.onreadystatechange = function(){
        //after get response
        if (request.readyState == 4) {
            data = JSON.parse(this.responseText)
            putInformation(data)
        }
    }
    request.send()
}

const getRepo = function(username) {
    const requestUrl = `https://api.github.com/users/${username}/repos`;

    const request = new XMLHttpRequest();
    request.open('GET', requestUrl)
    request.onreadystatechange = function(){
        if (request.readyState == 4) {
            const repo = JSON.parse(this.responseText)
            placeValue(repo)
        }
    }
    request.send();
}

let repo = null
let repoFlag = false
const placeValue = function(value) {
    repoFlag = true
    repo = value
}

const putInformation = (data) => {
    //profile
    const profile = document.querySelector('.profile-pic')
    profile.src = data.avatar_url
    profile.alt = data.name + " profile photo"
    //username
    document.querySelector('.username').innerText = data.name
    //bio
    document.querySelector('.bio').innerText = data.bio 
    //following
    document.querySelector('#following').innerHTML = data.following
    //followers
    document.querySelector('#followers').innerHTML = data.followers
    //public_repos
    document.querySelector('#repositories').innerHTML = data.public_repos

    //Display top repos
    let stopRepoInterval1 = false
    getRepo(data.login)
    const repoInterval1 = setInterval(()=>{
        if (repoFlag) {
            stopRepoInterval1 = true
            //put data
            repo.sort((a, b) => b.watchers_count - a.watchers_count) 
            console.log('repos: ', repo)

            const ul = document.querySelector('#repo')
            for (let i = 0; i < 3; i++) {
                ul.children[i].innerHTML = `<a href="${repo[i].html_url}">${repo[i].name}</a> - ${repo[i].description} (<i style="color:blue;">${repo[i].watchers_count}</i>)`
            }
        }
        if (stopRepoInterval1) {
            clearInterval(repoInterval1)
        }
    }, 1000)

    //now display the profile
    disableOrEnableContainer('ENABLE')
}

disableOrEnableContainer('DISABLE')

searchBtn.addEventListener('click', (event) => {
    event.preventDefault()

    //null this properties
    repo = null
    repoFlag = null

    console.log(searchedUsername.value)
    const username = searchedUsername.value
    requestToGitServer(username)
})
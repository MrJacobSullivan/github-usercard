import axios from 'axios'
import card from './card.js'
import usernames from '../data/usernames.js'

const entryPoint = document.querySelector('.cards')

const URL = (username) => `https://api.github.com/users/${username}`

const githubCard = (username) => {
  axios
    .get(URL(username))
    .then((res) => entryPoint.append(card(res.data)))
    .catch((err) => console.error(err))
}

usernames.forEach((username) => githubCard(username))

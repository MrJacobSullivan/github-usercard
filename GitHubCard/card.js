const githubCard = (data) => {
  const card = document.createElement('div')
  const avatar = document.createElement('img')
  const info = document.createElement('div')
  const h3 = document.createElement('h3')
  const username = document.createElement('p')
  const location = document.createElement('p')
  const profile = document.createElement('p')
  const profileLink = document.createElement('a')
  const followers = document.createElement('p')
  const following = document.createElement('p')
  const bio = document.createElement('p')

  card.classList.add('card')
  avatar.src = data.avatar_url
  info.classList.add('card-info')
  h3.classList.add('name')
  h3.textContent = data.name
  username.classList.add('username')
  username.textContent = data.login
  location.textContent = `Location: ${data.location || 'N/A'}`
  profile.textContent = 'Profile: '
  profileLink.href = data.html_url
  profileLink.target = '_blank'
  profileLink.rel = 'noopener noreferrer'
  profileLink.textContent = data.html_url.slice(8)
  followers.textContent = `Followers: ${data.followers}`
  following.textContent = `Following: ${data.following}`
  bio.textContent = `Bio: ${data.bio || 'N/A'}`

  card.append(avatar, info)
  info.append(h3, username, location, profile, followers, following, bio)
  profile.append(profileLink)

  return card
}

export default githubCard

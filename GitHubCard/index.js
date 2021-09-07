/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

const entryPoint = document.querySelector('.cards');
const url =`https://api.github.com/users/andrewmpark`;
axios.get(url)
  .then(resp => {
    console.log(resp.data);
    const card = gitCardMaker(resp.data);
    entryPoint.prepend(card);
  })
  .catch(err => {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'FAILED TO LOAD DATA';
    entryPoint.appendChild(errorMessage);
  });

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

function gitCardMaker({ avatar_url, name, login, location, html_url, followers, following, bio }) {
  const userCard = document.createElement('div');
  const userImage = document.createElement('img');
  const userCardInfo = document.createElement('div');
  const userNameTitle = document.createElement('h3');
  const userUsername = document.createElement('p');
  const userLocation = document.createElement('p');
  const userProfile = document.createElement('p');
  const userProfileURL = document.createElement('a');
  const userFollowers = document.createElement('p');
  const userFollowing = document.createElement('p');
  const userBio = document.createElement('p');

  userCard.classList.add('card');
  userImage.setAttribute('src', avatar_url);
  userProfileURL.href = html_url;
  userCardInfo.classList.add('cardInfo');
  userNameTitle.classList.add('name');
  userNameTitle.textContent = `${name}`;
  userUsername.classList.add('username')
  userUsername.textContent = `${login}`;
  userLocation.textContent = `Location: ${location}`
  userProfile.textContent = `Profile: ` 
  userProfileURL.textContent = `${html_url}`;
  userFollowers.textContent = `Followers: ${followers}`;
  userFollowing.textContent = `Following: ${following}`;
  userBio.textContent = `Bio: ${bio}`
  
  userCard.appendChild(userImage);
  userCard.appendChild(userCardInfo);
  userCardInfo.appendChild(userNameTitle);
  userCardInfo.appendChild(userUsername);
  userCardInfo.appendChild(userLocation);
  userCardInfo.appendChild(userProfile);
  userCardInfo.appendChild(userFollowers);
  userCardInfo.appendChild(userFollowing);
  userCardInfo.appendChild(userBio);
  userProfile.appendChild(userProfileURL);

return userCard;
}


/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/


/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/

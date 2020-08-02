var whoTweetedThis = "https://cors-anywhere.herokuapp.com/https://guarded-peak-37894.herokuapp.com/home/who_tweeted_this/";
var whoHasMoreFollowers = "https://cors-anywhere.herokuapp.com/https://guarded-peak-37894.herokuapp.com/home/who_has_more_followers/";

export const getGameData = async (gameName, username) => {
	if(gameName == "whoHasMoreFollowers") {
		return fetch(whoHasMoreFollowers + username).then(response => response.json().then(json => {return json;}))
	} else if (gameName == "whoTweetedThis") {
		return fetch(whoTweetedThis + username).then(response => response.json().then(json => {return json;}))
	}
}
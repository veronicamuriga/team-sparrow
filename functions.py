###############################################################
# Sample main
def main():
    # Tweepy and Twitter API Authentication
    import tweepy
    import credentials
    import random

    auth = tweepy.OAuthHandler(credentials.consumer_key, credentials.consumer_secret)
    auth.set_access_token(credentials.access_token, credentials.access_secret)
    api = tweepy.API(auth)

    # Fetches the player user's info through his log-in credentials
    player = 'some name'

    # Defines the two users to be compared, plus the max number of accounts we want to consult
    # Users should be randomly fetched from the logged-in account's friends
    user1 = 'nobody'
    user2 = 'somebody'
    maxCount = 5000 # Twitter doesn't seem to have a limit, but after 5000 you need to have more followers to keep following

    followForFollow(api,user1,user2,maxCount)

# WhoHasMoreFollowers: Returns the user screen_name with the most followers
def whoHasMoreFollowers(api,user1,user2):
    followers1 = user1.followers_count # Saves the number of followers user 1 and 2 have
    followers2 = user2.followers_count

    # Returns the user with the highest follower count
    return user1 if (followers1 > followers2) else user2

# WhoSaidThat: Returns an array with 4 screen_names from the player's friend list
def whoSaidThat(api,player):
    friends = api.friends(player) # Gets all the player's followed accounts first
    choices = [] # Array that will save the celebrity/brand accounts from friends

    # If an account is verified or has a high enough followage, it counts for the game
    for friend in friends:
        if friend.verified: # every twitter user has a boolean verified field
            choices.append(friend.screen_name)
        elif friend.followers_count > 3000: # not all celebrities are verified
            choices.append(friend.screen_name)

    random.shuffle(choices)
    answers = [] # this array will hold the first four shuffled accounts
    i = 0
    while i < 4:
        answers.append(choices[i])
        i += 1

    # Fetch a random tweet from the first account in the array
    answers[0].getTweet()
    # insert veronica's code here lol

# AtMeNextTime


# FollowForFollow: Check if two accounts follow each other, returns a boolean value
def followForFollow(api,user1,user2,maxCount):
    # Makes two lists of all the friends from both users
    friends1 = api.friends(user1)
    friends2 = api.friends(user2)

    # Looks through the friends list from user1 to see if they follow user2
    found = False
    for id in friends1:
        if id.screen_name == user2:
            found = True
    # If they don't that immediately means the users are not mutuals and the function ends
    if not found:
        # user1 does not follow user2: not mutuals
        return False
    # If they do, now it checks whether user2 follows user1 back
    for id in friends2:
        if id.screen_name == user1:
            # both users follow each other: mutuals
            return True
    # user2 does not follow user1 back: not mutuals
    return False

# FriendlyCompetition

###############################################################
if __name__ == "__main__":
    main()

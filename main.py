# Tweepy and Twitter API Authentication
import tweepy
import credentials
import games
auth = tweepy.OAuthHandler(credentials.consumer_key, credentials.consumer_secret)
auth.set_access_token(credentials.access_token, credentials.access_secret)
api = tweepy.API(auth)

# Defines the two users to be compared, plus the max number of accounts we want to consult
# Users should be randomly fetched from the logged-in account's friends
user1 = 'seishun_99'
user2 = 'rpruiz'
maxCount = 5000 # Twitter doesn't seem to have a limit, but after 5000 you need to have more followers to keep following

games.mutuals(user1,user2,maxCount) #FollowForFollow

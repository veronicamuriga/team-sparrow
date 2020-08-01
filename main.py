# Tweepy and Twitter API Authentication
import tweepy
import credentials
auth = tweepy.OAuthHandler(credentials.consumer_key, credentials.consumer_secret)
auth.set_access_token(credentials.access_token, credentials.access_secret)
api = tweepy.API(auth)

# Defines the two users to be compared, plus the max number of accounts we want to consult
user1 = 'seishun_99'
user2 = 'rpruiz'
maxCount = 5000 # Twitter doesn't seem to have a limit, but after 5000 you need to have more followers to keep following

def mutuals:
  # Makes two lists of all the friends from both users
  friends1 = api.friends(user1)
  friends2 = api.friends(user2)
  found = False

  # Looks through the friends list from user1 to see if they follow user2
  for id in friends1:
      if id.screen_name == user2:
          found = True
  # If they don't that immediately means the users are not mutuals and the function ends
  if found == False :
      print('user 1 does not follow user 2. not mutuals')
      return 0
  # If they do, now it checks whether user2 follows user1 back
  for id in friends2:
      if id.screen_name == user1:
          print('both users follow each other. mutuals')
          return 0
  print('user 2 does not follow user 1. not mutuals')

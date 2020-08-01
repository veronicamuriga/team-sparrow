import tweepy
import credentials
import random 

follower_threshold = 100

auth = tweepy.OAuthHandler(credentials.consumer_key, credentials.consumer_secret)
auth.set_access_token(credentials.access_token, credentials.access_token_secret)
api = tweepy.API(auth)


public_tweets = api.home_timeline()
# for tweet in public_tweets:
#     print(tweet.text)
user = 'JaimeOtraVez'


def find_verified_friends(user_name):
    verified_friends = set()
    friends = api.friends('')
    for friend in friends:
        if friend.verified == True and friend.followers_count > follower_threshold and friend.protected == False:
            verified_friends.add(friend)
    return verified_friends

def random_tweet(verified_friends):
    friend = random.sample(verified_friends, 1)[0]
    # max_status_no = friend.statuses_count
    status_ix = random.randint(1, 20)
    tweets = api.user_timeline(friend.id)
    return tweets[status_ix]
    







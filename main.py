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

class Game:
    def __init__(self, user_name):
        self.user_name = user_name

    def find_verified_friends(self, user_name):
        verified_friends = list()
        friends = api.friends(user_name)
        # print(friends)
        for friend in friends:
            if friend.verified == True and friend.followers_count > follower_threshold and friend.protected == False:
                verified_friends.append(friend.id)
        return verified_friends

    def random_tweet(self):
        verified_friends = self.find_verified_friends(self.user_name)
        # print(verified_friends)
        friend_id = random.choice(verified_friends)
        friend = api.get_user(friend_id)
        status_ix = random.randint(1, min({200, friend.statuses_count}))
        # 200 appears to be the upper bound of tweets we can access at a time
        tweets = api.user_timeline(friend_id, count = min({200, friend.statuses_count}))
        # print(len(tweets))
        # print(friend.statuses_count, status_ix)

        return [friend_id, tweets[status_ix].text]

gamer = Game(user)
# print(gamer.random_tweet())







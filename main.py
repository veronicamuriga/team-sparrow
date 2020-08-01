import tweepy
import credentials
import random 

# follower_threshold = 100

auth = tweepy.OAuthHandler(credentials.consumer_key, credentials.consumer_secret)
auth.set_access_token(credentials.access_token, credentials.access_token_secret)
api = tweepy.API(auth, wait_on_rate_limit = True)


# public_tweets = api.home_timeline()
# for tweet in public_tweets:
#     print(tweet.text)

#usernames are not case sensitive!
user = 'Jaimeotravez'

class Game:
    def __init__(self, user_name):
        self.user_name = user_name
        self.follower_threshold = 1000
        self.friend_threshold = 50

    def find_verified_friends(self, user_name):
        verified_friends = list()
        friends = api.friends(user_name)
        # print(friends)
        for friend in friends:
            if friend.verified == True and friend.followers_count > self.follower_threshold and friend.protected == False:
                verified_friends.append(friend.id)
        return verified_friends

    def random_tweet(self):
        verified_friends = self.find_verified_friends(self.user_name)
        # print(verified_friends)

        friend_id = random.choice(verified_friends)
        friend = api.get_user(friend_id)
        # print(friend.name)
        status_ix = random.randint(1, min({200, friend.statuses_count}))

        # 200 appears to be the upper bound of tweets we can access at a time
        tweets = api.user_timeline(friend_id, count = min({200, friend.statuses_count}))
        # print(hasattr(tweets[0], 'retweeted_status'))

        return [friend_id, tweets[status_ix]]

    def random_tweet_wrapper(self):
        tweet_details = self.random_tweet()
        #check if tweet is a retweet
        while hasattr(tweet_details[1], 'retweeted_status') or hasattr(tweet_details[1], 'in_reply_to_status_id'):
            tweet_details = self.random_tweet()
        return [tweet_details[0], tweet_details[1].text]


gamer = Game(user)
print(gamer.random_tweet_wrapper())







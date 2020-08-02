from flask import Flask, jsonify, request 
  
# creating a Flask app 
app = Flask(__name__) 

import tweepy
import credentials
import random 

# follower_threshold = 100

auth = tweepy.OAuthHandler(credentials.consumer_key, credentials.consumer_secret)
auth.set_access_token(credentials.access_token, credentials.access_token_secret)
api = tweepy.API(auth, wait_on_rate_limit = True)

#usernames are not case sensitive!
user = 'Jaimeotravez'

class Game:
    def __init__(self, user_name):
        self.user_name = user_name
        self.user = api.get_user(self.user_name)
        self.follower_threshold = 1000
        self.friend_threshold = 50
        self.friend = None
        self.verified_friends = list()

    def find_verified_friends(self, user_name):
        
        friends = api.friends(self.user_name, count = self.user.friends_count)
        # print(friends)
        for friend in friends:
            # if friend.verified == True and friend.followers_count > self.follower_threshold and friend.protected == False:
            if friend.verified == True and friend.protected == False:
                self.verified_friends.append(friend.id)
        print(self.verified_friends)


    def get_random_friend(self):
        self.find_verified_friends(self.user_name)
        end = min({200, len(self.verified_friends)-1})
        rand = random.randint(1, end)
        print(len(self.verified_friends), rand)

        self.friend = api.get_user(self.verified_friends[rand])

        # 200 appears to be the upper bound of tweets we can access at a time
        self.friend_tweets = api.user_timeline(self.friend.id, count = min({200, self.friend.statuses_count}))
        # print(hasattr(tweets[0], 'retweeted_status'))


    def random_tweet_wrapper(self, rt = True):
        self.get_random_friend()
        #check if tweet is a retweet
        while rt:
            status_ix = random.randint(1, min({200, self.friend.statuses_count}))
            tweet = self.friend_tweets.pop(status_ix)
            rt = hasattr(tweet, 'retweeted_status') or tweet.in_reply_to_status_id != None

        return [self.friend.id, tweet.text]



@app.route('/', methods = ['GET', 'POST']) 
def home(): 
    if(request.method == 'GET'): 
  
        return "I need a post request!"
  
# A simple function to calculate the square of a number 
# the number to be squared is sent in the URL when we use GET 
# on the terminal type: curl http://127.0.0.1:5000 / home / 10 
# this returns 100 (square of 10) 
@app.route('/home/<username>', methods = ['GET']) 
def disp(username): 
    gamer = Game(username)
    ret = gamer.random_tweet_wrapper()
  
    return jsonify({'correct_user_id': ret[0], 'user_choices': gamer.verified_friends[:3],'tweet' : ret[1]}) 
  

# # driver function 
if __name__ == '__main__': 
    app.run(debug = True) 


# gamer = Game(user)
# print(gamer.random_tweet_wrapper())








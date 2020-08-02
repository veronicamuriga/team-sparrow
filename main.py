from flask import Flask, jsonify, request 
import datetime
import tweepy
import credentials
import random


auth = tweepy.OAuthHandler(credentials.consumer_key, credentials.consumer_secret)
auth.set_access_token(credentials.access_token, credentials.access_token_secret)
api = tweepy.API(auth, wait_on_rate_limit = True)

# creating a Flask app 
app = Flask(__name__) 

#usernames are not case sensitive! also user_id can either be user name or user id
user = 'michelleobama'


class Game:
    def __init__(self, user_id):
        self.user_id = user_id
        self.user = api.get_user(self.user_id)
        self.friend = None
        #minimum of four verified friends
        self.verified_friends = list()
        self.choices = None
        # self.follower_threshold = 100

    def find_verified_friends(self, user_id):
        friends = api.friends(self.user_id, count = self.user.friends_count)
        
        for friend in friends:
            # can uncomment this line for more stringent filtering
            # if friend.verified == True and friend.followers_count > self.follower_threshold and friend.protected == False:
            if friend.verified == True and friend.protected == False:
                self.verified_friends.append(friend)
            #15 verified accounts are sufficient
            if len(self.verified_friends) > 15:
                break


    def get_random_friend(self):
        k = min(4, len(self.verified_friends))
        rand = random.randint(0, k-1)

        self.choices = random.sample(self.verified_friends, k)
        random.shuffle(self.choices)
        self.friend = self.choices[rand]

        # 200 appears to be the upper bound of tweets we can access at a time
        self.friend_tweets = api.user_timeline(self.friend.id, count = min({200, self.friend.statuses_count}))


    def random_tweet_wrapper(self, rt = True):
        self.get_random_friend()
        #check if tweet is a retweet
        while rt:
            k = len(self.friend_tweets)-1
            status_ix = random.randint(0, k)
            tweet = self.friend_tweets.pop(status_ix)
            rt = hasattr(tweet, 'retweeted_status') or tweet.in_reply_to_status_id != None

        return [self.friend.name, tweet.created_at, tweet.text]



# @app.route('/', methods = ['GET']) 
# def home(): 
#     if(request.method == 'GET'): 
  
#         return "I need a post request!"
  
# A simple function to calculate the square of a number 
# the number to be squared is sent in the URL when we use GET 
# on the terminal type: curl http://127.0.0.1:5000 / home / 10 
# this returns 100 (square of 10) 

@app.route('/home/who_tweeted_this/<username>', methods = ['GET', 'POST']) 
def disp_1(username): 
    rounds = list()
    gamer = Game(username)
    gamer.find_verified_friends(gamer.user_id)

    for _ in range(5):
        choices = {}
        obj = gamer.random_tweet_wrapper()
        for choice in gamer.choices:
            choices[choice.name] = choice.screen_name

        rounds.append({'tweet' : obj[2], 'tweet_time' : obj[1], 'correct_user_name' : obj[0], 'choices' : choices})
       
    # return {'game_type': 'who_tweeted_this', 'rounds' : rounds}
    return jsonify({'game_type': 'who_tweeted_this', 'rounds' : rounds})


@app.route('/home/who_has_more_followers/<username>', methods = ['GET', 'POST']) 
def disp_2(username): 
    gamer = Game(username)
    rounds = list()
    winner = None
    gamer.find_verified_friends(gamer.user_id)

    for _ in range(5):

        rand_1 = random.randint(0, len(gamer.verified_friends)-1)
        rand_2 = random.randint(0, len(gamer.verified_friends)-1)
        while rand_1 == rand_2:
            rand_2 = random.randint(0, len(gamer.verified_friends)-1)

        if gamer.verified_friends[rand_1].followers_count > gamer.verified_friends[rand_2].followers_count:
            winner = gamer.verified_friends[rand_1]
        else:
            winner = gamer.verified_friends[rand_2]

        rounds.append({'choices' : {gamer.verified_friends[rand_1].name : gamer.verified_friends[rand_1].screen_name, gamer.verified_friends[rand_2].name : gamer.verified_friends[rand_2].screen_name}, 'winner' : winner.name, 'winner_followers' : winner.followers_count})
    
    # return {'game_type': 'who_has_more_followers', 'rounds' : rounds}
    return jsonify({"game_type" :"who_has_more_followers", "rounds" : rounds})

# driver function 
# if __name__ == '__main__': 
    
#     app.run(debug = True) 


# gamer = Game(user)
# ##print(gamer.random_tweet_wrapper())

# disp_1(user)
# disp_2(user)








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
# user = 'veronicamuriga'

class Game:
    def __init__(self, user_name):
        self.user_name = user_name
        self.user = api.get_user(self.user_name)
        self.friend = None
        #minimum of four
        self.verified_friends = list()
        self.choices = None

    def find_verified_friends(self, user_name):
        friends = api.friends(self.user_name, count = self.user.friends_count)
        # #print(friends)
        for friend in friends:
            # if friend.verified == True and friend.followers_count > self.follower_threshold and friend.protected == False:
            if friend.verified == True and friend.protected == False:
                self.verified_friends.append(friend)
            if len(self.verified_friends) > 15:
                break
        # #print(self.verified_friends)


    def get_random_friend(self):
        #get random friend
        # self.find_verified_friends(self.user_name)

        # end = min({200, len(self.verified_friends)-1})
        # end = min({len(self.verified_friends)-1 ,15})
        # rand_1 = random.randint(0, end)
        # rand_2 = random.randint(0, end)
        # while rand_1 == rand_2:
        #     rand_2 = random.randint(0, end)

        #print(len(self.verified_friends), rand)

        #save details of thaat friend
        # self.friend = api.get_user(self.verified_friends[rand])
        # self.friend = self.verified_friends[rand_1]
        # self.choice_b = self.verified_friends[rand_2]
        #print(self.friend.name)
        k = min(5, len(self.verified_friends))
        self.choices = random.sample(self.verified_friends, k)
        random.shuffle(self.choices)
        self.friend = self.choices.pop()

        # 200 appears to be the upper bound of tweets we can access at a time
        self.friend_tweets = api.user_timeline(self.friend.id, count = min({200, self.friend.statuses_count}))
        # #print(hasattr(tweets[0], 'retweeted_status'))


    def random_tweet_wrapper(self, rt = True):
        self.get_random_friend()
        #check if tweet is a retweet
        while rt:
            status_ix = random.randint(0, len(self.friend_tweets)-1)
            # #print("statuses:", len(self.friend_tweets), "actual", self.friend.statuses_count)
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
    friends = list()
    gamer = Game(username)
    gamer.find_verified_friends(gamer.user_name)
    

    for _ in range(5):
        # rand = random.randint(0, len(gamer.verified_friends)-1)

        obj = gamer.random_tweet_wrapper()
        rounds.append({'tweet' : obj[2], 'tweet_time' : obj[1], 'correct_user_name' : obj[0], 'choices' : gamer.choices})
        # #print(rounds)
    # ret = gamer.random_tweet_wrapper()
    return {'game_type': 'who_tweeted_this', 'rounds' : rounds}
    
    # return jsonify({'game_type': 'who_tweeted_this', 'rounds' : rounds})

    # 'correct_user_id': ret[0], 'tweet' : ret[1], 'choices' : {ret[0], gamer.verified_friends[:min({len(gamer.verified_friends), 3})]}}) 

@app.route('/home/who_has_more_followers/<username>', methods = ['GET', 'POST']) 
def disp_2(username): 
    gamer = Game(username)
    rounds = list()
    winner = None
    gamer.find_verified_friends(gamer.user_name)

    for _ in range(5):

        rand_1 = random.randint(0, len(gamer.verified_friends)-1)
        rand_2 = random.randint(0, len(gamer.verified_friends)-1)
        while rand_1 == rand_2:
            rand_2 = random.randint(0, len(gamer.verified_friends)-1)

        if gamer.verified_friends[rand_1].followers_count > gamer.verified_friends[rand_1].followers_count:
            winner = gamer.verified_friends[rand_1]
        else:
            winner = gamer.verified_friends[rand_2]

        rounds.append({'choices' : [gamer.verified_friends[rand_1].name, gamer.verified_friends[rand_2].name], 'winner' : winner.name, 'winner_followers' : winner.followers_count})
    return {'game_type': 'who_has_more_followers', 'rounds' : rounds}
    # return jsonify({'game_type': 'who_has_more_followers', 'rounds' : rounds})

# driver function 
# if __name__ == '__main__': 
    
#     app.run(debug = True) 


# gamer = Game(user)
# #print(gamer.random_tweet_wrapper())

# print(disp_1(user))








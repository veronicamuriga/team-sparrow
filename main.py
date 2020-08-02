from flask import Flask, jsonify, request 
import datetime
  
# creating a Flask app 
app = Flask(__name__) 

import tweepy
import credentials
import random 

# follower_threshold = 100

auth = tweepy.OAuthHandler(credentials.consumer_key, credentials.consumer_secret)
auth.set_access_token(credentials.access_token, credentials.access_token_secret)
api = tweepy.API(auth, wait_on_rate_limit = True)

#usernames are not case sensitive! also user_id can either be user name or user id
user = 'michelleobama'


class Game:
    def __init__(self, user_id):
        self.user_id = user_id
        self.user = api.get_user(self.user_id)
        self.friend = None
        #minimum of four
        self.verified_friends = list()
        self.choices = None

    def find_verified_friends(self, user_id):
        friends = api.friends(self.user_id, count = self.user.friends_count)
        #print("friends",api.friends(self.user_id, count = self.user.friends_count))
        #print("            ")
        #print('"user', self.user)
        #print("        ")
         
        # ##print(friends)
        for friend in friends:
            # if friend.verified == True and friend.followers_count > self.follower_threshold and friend.protected == False:
            if friend.verified == True and friend.protected == False:
                self.verified_friends.append(friend)
            if len(self.verified_friends) > 15:
                break
        # ##print(self.verified_friends)


    def get_random_friend(self):
        k = min(4, len(self.verified_friends))
        rand = random.randint(0, k-1)

        self.choices = random.sample(self.verified_friends, k)
        random.shuffle(self.choices)
        self.friend = self.choices[rand]

        # 200 appears to be the upper bound of tweets we can access at a time
        self.friend_tweets = api.user_timeline(self.friend.id, count = min({200, self.friend.statuses_count}))
        #print("tweets", self.friend_tweets)
        #print("       ")
        # #print(len(self.friend_tweets))
        # ##print(hasattr(tweets[0], 'retweeted_status'))


    def random_tweet_wrapper(self, rt = True):
        self.get_random_friend()
        #check if tweet is a retweet
        while rt:
            k = len(self.friend_tweets)-1
            status_ix = random.randint(0, k)
            # ##print("statuses:", len(self.friend_tweets), "actual", self.friend.statuses_count)
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
    # rounds = list()
    # gamer = Game(username)
    # gamer.find_verified_friends(gamer.user_id)

    # for _ in range(5):
    #     choices = {}
    #     obj = gamer.random_tweet_wrapper()
    #     for choice in gamer.choices:
    #         choices[choice.name] = choice.screen_name

    #     rounds.append({'tweet' : obj[2], 'tweet_time' : obj[1], 'correct_user_name' : obj[0], 'choices' : choices})
       
    # return {'game_type': 'who_tweeted_this', 'rounds' : rounds}
    rounds = [{'tweet': '"For all those people out there who in some way can carry on the efforts against this kind of undermining of democr… https://t.co/B3Qwsz8gzz', 'tweet_time': datetime.datetime(2020, 7, 6, 16, 0, 9), 'correct_user_name': 'All On The Line', 'choices': {'Joe Biden': 'JoeBiden', 'All On The Line': 'allontheline', 'When We All Vote': 'WhenWeAllVote', 'The Obama Foundation': 'ObamaFoundation'}}, {'tweet': 'The year in review: Check out our top 10 favorite #LetsMove moments from 2016 → https://t.co/bjntWHwOKh https://t.co/L9dd27GLnP', 'tweet_time': datetime.datetime(2016, 12, 19, 16, 52, 33), 'correct_user_name': "Let's Move! (NARA)", 'choices': {"Let's Move! (NARA)": 'letsmove', 'Melania Trump': 'FLOTUS', 'When We All Vote': 'WhenWeAllVote', 'Dr. Jill Biden': 'DrBiden'}}, {'tweet': '“The people who represent us vote on laws that directly affect our life span, access to care, access to education a… https://t.co/3nfA0UH6Pc', 'tweet_time': datetime.datetime(2020, 7, 18, 21, 0), 'correct_user_name': 'When We All Vote', 'choices': {'Jim Messina': 'Messina2012', 'Joining Forces': 'JoiningForces', "Let's Move! (NARA)": 'letsmove', 'When We All Vote': 'WhenWeAllVote'}}, {'tweet': 'Everybody has their own story. \nEverybody is on their own journey. \n\nWhat is your Becoming story? Watch BECOMING on… https://t.co/8zDLD72ef1', 'tweet_time': datetime.datetime(2020, 5, 24, 18, 0, 53), 'correct_user_name': 'Better Make Room 🎓', 'choices': {'Vice President Mike Pence': 'VP', 'Better Make Room 🎓': 'BetterMakeRoom', 'All On The Line': 'allontheline', 'The Obama Foundation': 'ObamaFoundation'}}, {'tweet': "These military kids are members of the only year-round Special Olympics cheer squad on a military base. We're so im… https://t.co/vw2N4eTMpw", 'tweet_time': datetime.datetime(2019, 2, 19, 16, 46, 14), 'correct_user_name': 'Biden Foundation', 'choices': {'When We All Vote': 'WhenWeAllVote', 'Biden Foundation': 'bidenfoundation', 'Girls Opportunity Alliance': 'girlsalliance', 'Reach Higher': 'ReachHigher'}}]    
    return jsonify({'game_type': 'who_tweeted_this', 'rounds' : rounds})


@app.route('/home/who_has_more_followers/<username>', methods = ['GET', 'POST']) 
def disp_2(username): 
    # gamer = Game(username)
    # rounds = list()
    # winner = None
    # gamer.find_verified_friends(gamer.user_id)

    # for _ in range(5):

    #     rand_1 = random.randint(0, len(gamer.verified_friends)-1)
    #     rand_2 = random.randint(0, len(gamer.verified_friends)-1)
    #     while rand_1 == rand_2:
    #         rand_2 = random.randint(0, len(gamer.verified_friends)-1)

    #     if gamer.verified_friends[rand_1].followers_count > gamer.verified_friends[rand_2].followers_count:
    #         winner = gamer.verified_friends[rand_1]
    #     else:
    #         winner = gamer.verified_friends[rand_2]

    #     rounds.append({'choices' : {gamer.verified_friends[rand_1].name : gamer.verified_friends[rand_1].screen_name, gamer.verified_friends[rand_2].name : gamer.verified_friends[rand_2].screen_name}, 'winner' : winner.name, 'winner_followers' : winner.followers_count})
    # return {'game_type': 'who_has_more_followers', 'rounds' : rounds}
    # return jsonify({'game_type': 'who_has_more_followers', 'rounds' : rounds})
    rounds = [
        {"choices":{"CARROT":"CARROT_app","TwitterU Recruiting":"TwitterU"},"winner":"TwitterU Recruiting","winner_followers":170482},
        {"choices":{"Elon Musk":"elonmusk","TwitterU Recruiting":"TwitterU"},"winner":"Elon Musk","winner_followers":37402645},
        {"choices":{"Barack Obama":"BarackObama","Elon Musk":"elonmusk"},"winner":"Barack Obama","winner_followers":121130772},
        {"choices":{"Elon Musk":"elonmusk","TwitterU Recruiting":"TwitterU"},"winner":"Elon Musk","winner_followers":37402645},
        {"choices":{"Barack Obama":"BarackObama","TwitterU Recruiting":"TwitterU"},"winner":"Barack Obama","winner_followers":121130772}]
    a = {"game_type" :"who_has_more_followers", "rounds" : rounds}
    return jsonify(a)

# driver function 
# if __name__ == '__main__': 
    
#     app.run(debug = True) 


# gamer = Game(user)
# ##print(gamer.random_tweet_wrapper())

disp_1(user)

# disp_2(user)








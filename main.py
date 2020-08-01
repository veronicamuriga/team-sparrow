import tweepy
import credentials

auth = tweepy.OAuthHandler(credentials.consumer_key, credentials.consumer_secret)
auth.set_access_token(credentials.access_token, credentials.access_token_secret)
api = tweepy.API(auth)


# try:
#     redirect_url = auth.get_authorization_url()
# except tweepy.TweepError:
#     print('Error! Failed to get request token.')

# session.set('request_token', auth.request_token['oauth_token'])



public_tweets = api.home_timeline()
for tweet in public_tweets:
    print(tweet.text)
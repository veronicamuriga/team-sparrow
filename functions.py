# Defines the FollowForFollow game
def mutuals(user1,user2,maxCount):
    # Makes two lists of all the friends from both users
    friends1 = api.friends(user1)
    friends2 = api.friends(user2)

    # Looks through the friends list from user1 to see if they follow user2
    found = False
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

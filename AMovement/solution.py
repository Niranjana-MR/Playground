friendsHouse = int(input())
steps = 0 

while(friendsHouse):
    if(friendsHouse>5):
        steps += 1
        friendsHouse -= 5
    else:
        steps += 1
        friendsHouse = 0

print(steps)


"""
friendsHouse = int(input())
steps = 0 

steps = friendsHouse // 5
steps += 1

print(steps)
"""
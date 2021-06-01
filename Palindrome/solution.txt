myString = input()

def reverseString(str):
    return str[::-1]

revString = reverseString(myString)

if (myString == revString):
    print("YES")
else:
    print("NO")
#Accepting Inputs
arrSize = int(input())
numbers = input()
arrItems = numbers.split(" ")

lastDigit = 0
currentNumber = 0

#Remove last digits of given numbers and add them up. Example: 25 45 32 >>> 552 (last digits only).
for num in arrItems:
    lastDigit = int(num)%10
    currentNumber = (currentNumber*10) + lastDigit

#check if the new formed number is divisible by 10
if(currentNumber%10 == 0):
    print("Yes")
else:
    print("No")
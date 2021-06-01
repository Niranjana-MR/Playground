num = int(input())
fact = num
while(num):
    if(num == 1):
        break
    else:
        fact *= (num - 1)
        num = num - 1 
print(fact)
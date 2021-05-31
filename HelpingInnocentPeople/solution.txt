tag = input()
lst = list(tag)

isVolwel = ['A','E','I','O','U','Y']

if lst[2] not in isVolwel:
    sumFirstTwo = int(lst[0])+int(lst[1])
    sumMiddleTwo = int(lst[3]) + int(lst[4])
    sumNextTwo = int(lst[4])+int(lst[5])
    sumLastTwo = int(lst[7])+int(lst[8])
    
    if (sumFirstTwo%2 == 0) and (sumMiddleTwo%2 == 0) and (sumNextTwo%2 == 0) and (sumLastTwo%2 == 0):
        print('valid')
        exit()
    else:
        print('invalid')
        exit()
else:
    print('invalid')
minDimension = int(input())
numberOfPhotos = int(input())

def checkDimensions(width, height):
    if(width < minDimension or height<minDimension):
        print("UPLOAD ANOTHER")
    elif((width>= minDimension) and (height >= minDimension) and (width == height)):
        print("ACCEPTED")
    elif((width>= minDimension) and (height >= minDimension) and (width != height)):
        print("CROP IT")

while(numberOfPhotos):
    w, h = map(int, input().split())
    checkDimensions(w, h)
    numberOfPhotos -= 1
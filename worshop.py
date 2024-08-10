variable=input("enter the value:").split()
lis=[]
lis.append(variable)
print(lis)
first=lis[0][0]
print(first[::-1])
print("the first value is",first)
if(first==lis[0][0]):
    print("it is a plaindrome")
else:
    print("not apalindrome")

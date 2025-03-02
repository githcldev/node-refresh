animals = ( 'bear', 'bunny', 'dog', 'cat', 'velociraptor' )

for pet in animals:
    if pet == 'bunny': continue
    # if pet == 'cat': break
    print(pet)
else:
    print(0)


c = 0; max_c = 5
while c != 9:
    c += 1
    # if c == max_c: break
    if c == 3: continue
    print(c)
else:
    print(0)

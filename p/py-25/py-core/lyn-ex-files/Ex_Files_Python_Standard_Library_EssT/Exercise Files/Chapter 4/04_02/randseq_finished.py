# Functions for generating random data sequences
import random
import string
# Use the choice function to randomly select from a sequence
moves = ["rock", "paper", "scissors"]
print(random.choice(moves))

# Use the choices function to create a list of random elements
roulette_wheel = ["black", "red", "green"]
weights = [18, 18, 2]
print(random.choices(roulette_wheel, weights, k=10))
# k means run 10 times and get 10 choices
# without weight it will be random
# with weight we are giving priority to items for random selection

# The sample function randomly selects elements from a population
# chosen items are not reselected in output
chosen = random.sample(string.ascii_uppercase, 6)
print(chosen)

# The shuffle function shuffles a sequence in place
players = ["Bill", "Jane", "Joe", "Sally", "Mike", "Lindsay"]
random.shuffle(players)
print(players)

# to shuffle an immutable sequence, use the sample function first
result = random.sample(string.ascii_uppercase, k=len(string.ascii_uppercase))
random.shuffle(result)
print(''.join(result))

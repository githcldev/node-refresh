# advanced iteration functions in the itertools package
import itertools
def testFunction(x):
    return x < 40

def main():
    # cycle iterator can be used to cycle over a collection
    seq1 = [1, 2]
    cycle1 = itertools.cycle(seq1)
    print(next(cycle1)) # 1
    print(next(cycle1)) # 2
    print(next(cycle1)) # 1
    # use count to create a simple counter
    count1 = itertools.count(100, 10)
    print(next(count1)) # 100
    print(next(count1)) # 110
    print(next(count1)) # 120
    # accumulate creates an iterator that accumulates values
    vals = [10,20,30,40,50,40,30]
    # sum-of-digits [10, 30, 60, 100, 150, 190, 220]
    print(list(itertools.accumulate(vals)))
    acc = itertools.accumulate(vals, max)
    print(list(acc)) # [10, 20, 30, 40, 50, 50, 50]
    # use chain to connect sequences together
    x = itertools.chain("ABCD", "1234")
    print(list(x))
    # dropwhile and takewhile will return values until
    # a certain condition is met that stops them
    print(list(itertools.dropwhile(lambda x: x < 40, vals)))
    print(list(itertools.takewhile(testFunction, vals)))
    
if __name__ == "__main__":
    main()
    
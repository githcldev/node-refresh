# Demonstrate how to use list comprehensions


def main():
    # define two lists of numbers
    odds = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    evens = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
    # Perform a mapping and filter function on a list
    count = 'even => '
    even_a = list(
        map(lambda e: count + str(e), filter(lambda e: e > 0 and e < 16, evens)))
    print(even_a)
    # Derive a new list of numbers frm a given list using comprehensions
    even_b = [count + str(e) for e in evens if e > 0 and e < 16]
    print(even_b)

    # Limit the items operated on with a predicate condition
    oddSquared = [e ** 2 for e in odds if e > 3 and e < 17]
    print(oddSquared)


if __name__ == "__main__":
    main()

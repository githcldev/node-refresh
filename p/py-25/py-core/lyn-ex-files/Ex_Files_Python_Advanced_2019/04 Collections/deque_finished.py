# deque objects are like double-ended queues
import collections
import string

def main():
    # initialize a deque with lowercase letters
    d = collections.deque(string.ascii_lowercase)

    # deques support the len() function
    # print("Item count: " + str(len(d)))

    # # deques can be iterated over
    # print('elem upper => ')
    # for elem in d:
    #     print(elem.upper(), end=",")
    # print()
    # # manipulate items from either end
    # print('before pop => ', d)
    d.pop()
    print('pop => ', d)
    d.popleft()
    print('popleft => ', d)
    d.append(2)
    print('append => ', d)
    d.appendleft(1)
    print('appendleft => ', d)

    # rotate the deque
    print(d)
    d.rotate(10)
    print(d)


if __name__ == "__main__":
    main()

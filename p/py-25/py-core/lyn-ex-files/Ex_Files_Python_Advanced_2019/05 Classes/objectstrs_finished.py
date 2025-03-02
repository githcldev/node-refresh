# customize string representations of objects
class Person():
    def __init__(self):
        self.fname = "Joe"
        self.age = 25

    # use __repr__ to create a string useful for debugging
    def __repr__(self):
        return "<Person Class - fname:{0}, age{1}>".format(self.fname, self.age)

    # use str for a more human-readable string
    def __str__(self):
        return "Person ({0} is {1})".format(self.fname, self.age)

    # use bytes to convert the informal string to a bytes object
    def __bytes__(self):
        val = "Person:{0}:{1}".format(self.fname, self.age)
        return bytes(val.encode('utf-8'))
    
    def __format__(self, format_spec):
        return " - format - "

def main():
    # create a new Person object
    cls1 = Person()
    # use different Python functions to convert it to a string
    print(str(cls1))
    print(repr(cls1))
    print("Formatted: {0}".format(cls1))
    print(format(cls1))
    print(bytes(cls1))

if __name__ == "__main__":
    main()

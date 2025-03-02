class MyClass():
    def method1(self):        print("MyClass method1")
    def method2(self, someString):
        print("MyClass method2: " + someString)
class AnotherClass(MyClass): # inherit MyClass
    def method2(self):        print("anotherClass method2")
    def method1(self):
        MyClass.method1(self)
        print("AnotherClass method1")
def main():
    c = MyClass();     c.method1();   c.method2("This is a string")
    c2 = AnotherClass();	    c2.method1()
if __name__ == "__main__":
    main()
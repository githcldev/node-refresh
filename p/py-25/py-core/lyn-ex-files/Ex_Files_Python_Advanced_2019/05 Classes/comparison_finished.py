# Use special methods to compare objects to each other


class Employee():
    def __init__(self, level, yrs):
        self.level = level; self.yrs = yrs

    # implement comparison functions by emp level
    def __ge__(self, other):
        if self.level == other.level:
            return self.yrs >= other.yrs
        return self.level >= other.level

    def __gt__(self, other):
        if self.level == other.level:
            return self.yrs > other.yrs
        return self.level > other.level

    def __lt__(self, other):
        if self.level == other.level:
            return self.yrs < other.yrs
        return self.level < other.level

    def __le__(self, other):
        if self.level == other.level:
            return self.yrs <= other.yrs
        return self.level <= other.level

    def __eq__(self, other):
        return self.level == other.level


def main():
    # define some employees
    dept = []
    dept.append(Employee(5, 9)); dept.append(Employee(4, 12))
    dept.append(Employee(6, 6)); dept.append(Employee(5, 13))

    print(bool(dept[0] > dept[1]))# Who's more senior?
    print(bool(dept[3] < dept[2]))

    emps = sorted(dept) # sort the items
    for emp in emps:
        print(emp.level)


if __name__ == "__main__":
    main()

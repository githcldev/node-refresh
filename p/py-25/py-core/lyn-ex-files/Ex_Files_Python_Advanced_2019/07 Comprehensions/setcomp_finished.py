# Demonstrate how to use set comprehensions
import string

def main():
    # define a list of temperature data points
    ctemps = [5, 10, 12, 14, 10, 23, 41, 30, 12, 24, 12, 18, 29]
    # build a set of unique Fahrenheit temperatures
    ftemps_set = {(t * 9/5) + 32 for t in ctemps}
    print(ftemps_set)
    # build a set from an input source
    sTemp = "The quick brown fox jumped over the lazy dog"
    chars_set = {c.upper() for c in sTemp if not c.isspace()}
    print(chars_set)

    miss_list = [a for a in string.ascii_uppercase if a not in chars_set]
    print(miss_list)

    


if __name__ == "__main__":
    main()

#!/usr/bin/env python3
# Copyright 2009-2017 BHG http://bw.org/

# simple fibonacci series
# the sum of two elements defines the next set

a, b = 0, 1
while b < 200:
    print(b, end = ', \n', flush = True)
    a, b = b, a + b
    print(f'a => {a}')
    print(f'b => {b}')

print() # line ending

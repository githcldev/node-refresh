#!/usr/bin/env python3
# Copyright 2009-2017 BHG http://bw.org/

import sys
try:
    x = inet('dg')
    # x = 5/0
except ValueError:
    print('value error')
# except ZeroDivisionError:
#     print('zero division error')
except: # default catcher
    print(f'unknown error: {sys.exc_info()}')
else:
    print('good job')



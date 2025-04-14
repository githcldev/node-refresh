import pandas as pd
from io import StringIO

str_data = StringIO("""
date,weather
2018-03-04,sunny
2018-03-05,k
2018-03-06,sunny
""")

df = pd.read_csv(str_data, sep=",")

if (df['weather'] == 'sunny').all():
    print(1)
else:
    print(2)


if (df['weather'].isin(['k'])).any():
    print(11)
else:
    print(21)


# assert (df['weather'] == 'sunny').all(), "Values are not the same in the column"

import pandas as pd
from io import StringIO

data = StringIO(""",,,date,col_1
0,a,I,2000-01-03,1
1,b,II,2000-01-04,3
2,c,III,2000-01-05,5
""")

df = pd.read_csv(
    data, sep=",",
    parse_dates=True, index_col=['date'],
    date_format=lambda x: pd.datetime.strptime(x, '%Y-%m-%d')
)

# assert isinstance(df.index, pd.core.indexes.datetimes.DatetimeIndex)
print(df)

df.drop(df.columns[[0]], axis=1, inplace=True)
print(df)

df.drop(df.columns[[0,1]], axis=1, inplace=True)
print(df)

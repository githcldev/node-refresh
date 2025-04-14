import pandas as pd
from io import StringIO
import numpy as np

# add some columns
df = pd.DataFrame(np.random.randint(0, 10, (4, 3)), columns=list(['A', 'B', 'C']))
df_a = df.copy()
df_b = df.copy()
df_c = df.copy()
# df_d = df.copy()
print(df_a)
df['D'] = df['A'] + df['C']
print(df)

# add some columns
df_a['D'] = df_a[['A', 'C']].sum(axis=1)
print(df_a)

# add all the columns
# df_b = pd.DataFrame(np.random.randint(0, 10, (4, 3)), columns=list(['A', 'B', 'C']))
df_b['D'] = df_b[list(df_b.columns)].sum(axis=1)
print(df_b)

# use lambda
# df = pd.DataFrame(np.random.randint(0, 10, (4, 3)), columns=list(['A', 'B', 'C']))
df_c['D'] = df_c.apply(lambda x: x['A'] * 100 + x['B'] / 2, axis=1)
print(df_c)

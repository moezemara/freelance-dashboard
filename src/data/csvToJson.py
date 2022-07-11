import pandas as pd

df = pd.read_csv(r'countries.csv')
df.to_json(r'countries.json')

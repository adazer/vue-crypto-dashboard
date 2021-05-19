import json
import pandas as pd

def handler(event, context):
  print('received event:')
  print(event)

  df = pd.DataFrame(['first item', 'second item', 'third item'])
  
  return {
      'statusCode': 200,
      'headers': {
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
      },
      'body': pd.to_json()
  }
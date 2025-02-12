from dotenv import load_dotenv
import os
import requests
import json

# Load environment variables from the .env file (if present)
load_dotenv()

# Access environment variables as if they came from the actual environment
SLACK_APP_TOKEN_AUTH = os.getenv('SLACK_APP_TOKEN_AUTH')

SLACK_SEND_MESSAGE_ENDPOINT = "https://slack.com/api/chat.meMessage"
SLACK_CHANNEL_ID = "C06SJT1RVMZ"

headers = {
  'Authorization': f'Bearer {SLACK_APP_TOKEN_AUTH}',
  'Content-Type': 'application/x-www-form-urlencoded'
}

# Send new message(init a thread) to a channel
new_message = {
  'channel': SLACK_CHANNEL_ID,
  'text': 'Hello World!'
}
response = requests.post(SLACK_SEND_MESSAGE_ENDPOINT, headers=headers, params=new_message)
print(json.dumps(response.json(), indent=4))

# Reply to a thread
reply_message = {
  'channel': SLACK_CHANNEL_ID,
  'text': 'Hi',
  'thread_ts': '1722721592.095749'  # Thread timestamp
}
response = requests.post(SLACK_SEND_MESSAGE_ENDPOINT, headers=headers, params=reply_message)
print(json.dumps(response.json(), indent=2))

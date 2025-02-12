from dotenv import load_dotenv
import os
import requests
import json

# Load environment variables from the .env file (if present)
load_dotenv()

# Access environment variables as if they came from the actual environment
SLACK_APP_TOKEN_AUTH = os.getenv('SLACK_APP_TOKEN_AUTH')

SLACK_MESSAGE_HISTORY_ENDPOINT = "https://slack.com/api/conversations.history"
SLACK_CHANNEL_ID = "C06SJT1RVMZ"

headers = {
  'Authorization': f'Bearer {SLACK_APP_TOKEN_AUTH}',
  'Content-Type': 'application/x-www-form-urlencoded'
}

query = {
  'channel': SLACK_CHANNEL_ID,
  'limit': 2
}

response = requests.get(SLACK_MESSAGE_HISTORY_ENDPOINT, headers=headers, params=query)
print(json.dumps(response.json(), indent=2))

# Response sample
"""
{
  "ok": true,
  "messages": [
    {
      "subtype": "me_message",
      "user": "U07FS459657",
      "type": "message",
      "ts": "1722760569.697229",
      "text": "Hello World!",
      "blocks": [
        {
          "type": "rich_text",
          "block_id": "=Q8",
          "elements": [
            {
              "type": "rich_text_section",
              "elements": [
                {
                  "type": "text",
                  "text": "Hello World!"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "subtype": "me_message",
      "user": "U07FS459657",
      "type": "message",
      "ts": "1722745657.899939",
      "text": "Hello World!",
      "blocks": [
        {
          "type": "rich_text",
          "block_id": "y2ZRZ",
          "elements": [
            {
              "type": "rich_text_section",
              "elements": [
                {
                  "type": "text",
                  "text": "Hello World!"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "has_more": true,
  "pin_count": 0,
  "channel_actions_ts": null,
  "channel_actions_count": 0,
  "response_metadata": {
    "next_cursor": "bmV4dF90czoxNzIyNzIxNTkyMDk1NzQ5"
  }
}
"""

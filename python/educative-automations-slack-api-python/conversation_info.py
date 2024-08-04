from dotenv import load_dotenv
import os
import requests
import json

# Load environment variables from the .env file (if present)
load_dotenv()

# Access environment variables as if they came from the actual environment
SLACK_APP_TOKEN_AUTH = os.getenv('SLACK_APP_TOKEN_AUTH')

SLACK_CONVERSATION_INFO_ENDPOINT = "https://slack.com/api/conversations.info"
SLACK_CHANNEL_ID = "C06SJT1RVMZ"

headers = {
  'Authorization': f'Bearer {SLACK_APP_TOKEN_AUTH}',
  'Content-Type': 'application/x-www-form-urlencoded'
}

query = {
  'channel': SLACK_CHANNEL_ID
}

response = requests.get(SLACK_CONVERSATION_INFO_ENDPOINT, headers = headers, params = query)
print(json.dumps(response.json(), indent = 2))

# Response sample
"""
{
  "ok": true,
  "channel": {
    "id": "C06SJT1RVMZ",
    "name": "nguyen-test-channel",
    "is_channel": true,
    "is_group": false,
    "is_im": false,
    "is_mpim": false,
    "is_private": true,
    "created": 1712132803,
    "is_archived": false,
    "is_general": false,
    "unlinked": 0,
    "name_normalized": "nguyen-test-channel",
    "is_shared": false,
    "is_org_shared": false,
    "is_pending_ext_shared": false,
    "pending_shared": [],
    "context_team_id": "T01BGE5BJQ6",
    "updated": 1712132803077,
    "parent_conversation": null,
    "creator": "U05AWMLNWDR",
    "is_ext_shared": false,
    "shared_team_ids": [
      "T01BGE5BJQ6"
    ],
    "pending_connected_team_ids": [],
    "is_member": true,
    "last_read": "1722721405.871199",
    "is_open": true,
    "topic": {
      "value": "",
      "creator": "",
      "last_set": 0
    },
    "purpose": {
      "value": "",
      "creator": "",
      "last_set": 0
    }
  }
}
"""

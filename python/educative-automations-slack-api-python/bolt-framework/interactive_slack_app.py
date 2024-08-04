from dotenv import load_dotenv
from slack_bolt import App
from slack_bolt.adapter.socket_mode import SocketModeHandler
import os

# Load environment variables from the .env file (if present)
load_dotenv()

# Access environment variables as if they came from the actual environment
SLACK_APP_TOKEN_AUTH = os.getenv('SLACK_APP_TOKEN_AUTH')
APP_LEVEL_TOKEN = os.getenv('APP_LEVEL_TOKEN')

app = App(token = SLACK_APP_TOKEN_AUTH)

@app.message("supperapp")

def react_to_user(message, say):
  say(f"Hey there <@{message['user']}>!")

if __name__ == '__main__':
  SocketModeHandler(app, APP_LEVEL_TOKEN).start()

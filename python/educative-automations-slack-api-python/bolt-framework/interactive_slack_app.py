from dotenv import load_dotenv
from slack_bolt import App
from slack_bolt.adapter.socket_mode import SocketModeHandler
import os
import logging

# Load environment variables from the .env file (if present)
load_dotenv()
logger = logging.getLogger("super-app-mtg.log")
logging.basicConfig(level=logging.DEBUG)

# Access environment variables as if they came from the actual environment
SLACK_APP_TOKEN_AUTH = os.getenv('SLACK_APP_TOKEN_AUTH')
APP_LEVEL_TOKEN = os.getenv('APP_LEVEL_TOKEN')

# Initializes your app with your bot token and socket mode handler
app = App(token = SLACK_APP_TOKEN_AUTH)

# Listens to incoming messages that contain '[super-app-mtg]'
# To learn available listener arguments,
# visit https://slack.dev/bolt-python/api-docs/slack_bolt/kwargs_injection/args.html
@app.message('[super-app-mtg]')
def schedule_meeting(message, say):
  say(f"Hey there <@{message['user']}>!")

if __name__ == '__main__':
  SocketModeHandler(app, APP_LEVEL_TOKEN).start()

import os
from slack_sdk import WebClient
from slack_sdk.errors import SlackApiError
from flask import Flask, request, jsonify

app = Flask(__name__)
client = WebClient(token=os.environ['SLACK_BOT_TOKEN'])


@app.route("/slack/events", methods=["POST"])
def slack_events():
    data = request.json
    if "challenge" in data:
        return jsonify({"challenge": data["challenge"]})

    event = data.get("event", {})
    if event.get("type") == "app_mention":
        handle_app_mention(event)
    return jsonify({"status": "ok"})


def handle_app_mention(event):
    try:
        response = client.chat_postMessage(
            channel=event["channel"],
            text=f"Hello, <@{event['user']}>!"
        )
    except SlackApiError as e:
        print(f"Error posting message: {e.response['error']}")


if __name__ == "__main__":
    app.run(port=3000)

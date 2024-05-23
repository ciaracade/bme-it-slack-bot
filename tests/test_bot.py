# test.py
from slack_sdk import WebClient
import sys
# Enable debug logging
import logging
logging.basicConfig(level=logging.DEBUG)
# Verify it works
client = WebClient()
api_response = client.api_test()

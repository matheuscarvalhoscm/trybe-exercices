import requests
import json


request = requests.get('https://api.github.com/users').text
json = json.loads(request)
for data in json:
  username = data["login"]
  url = data["url"]
  print(f"{username} {url}")


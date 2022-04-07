import requests

url = 'https://scrapethissite.com/pages/advanced/?gotcha=headers'
headers = {
  "Accept": "text/html",
  "User-Agent": "Chrome/100.0.4896.60",
  }
response = requests.post(url, headers=headers).text

if "bot detected" in response:
  print("deu ruim D:")
else:
  print("deu bom :D")
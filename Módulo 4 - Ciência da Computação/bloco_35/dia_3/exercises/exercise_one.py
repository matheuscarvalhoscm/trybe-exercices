import requests

def MyRequest(URL):
  response = requests.get(URL)
  print(response.text)

url = 'https://httpbin.org/encoding/utf8'
MyRequest(url)

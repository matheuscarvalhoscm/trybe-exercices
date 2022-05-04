import requests
import parsel

url = "http://books.toscrape.com/catalogue/the-grand-design_405/index.html"

request = requests.get(url)
selector = parsel.Selector(text=request.text)


title = selector.css("#content_inner h1::text").get()
price = selector.css("#content_inner .price_color::text").get().replace("Â£", "")
description = selector.css("#product_description ~ p::text").get().replace("...more", '')
cover = selector.css(".item img::attr(src)").get()
stock = selector.css("#content_inner .price_color ~ p").get()

print(f"{title}, {price}, {description}, {cover}, {stock}")

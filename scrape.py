import requests
from bs4 import BeautifulSoup
with open("image_url.txt","w") as file:
    for i in range(1,15):
        # URL of the website
        url = "https://mahawajahatkhan.com/bridal/?product-page={i}"

        # Send an HTTP GET request
        response = requests.get(url)

        # Parse the HTML content
        soup = BeautifulSoup(response.text, "html.parser")

        # Find all <li> tags
        li_tags = soup.find_all("img")

        # Extract and print the content
        for li in li_tags:
            if 'src' in li.attrs:  # Check if 'src' attribute exists
                print(li['src'].split('?')[0])
                print("")
                file.write(f"{li['src'].split('?')[0]}\n")
                

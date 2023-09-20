## DNS and IP Addresses
When one device wants to talk to another it must have an IP address. For example, 128.187.16.184 is BYU's address. Usually, human users prefer a symbolic name over an IP address. The symbolic name is called a domain name. Domain names are converted to IP address by doing a lookup in the Domain Name System (DNS).
## Server
Key Pair file: Kaybugging.pem
### Remote Shell Into Server
-> ssh -i Kaybugging.pem ubuntu@18.210.220.50
-> exit
If warning that key pair file permissions are too open:
-> 'chmod 600 Kaybugging.pem'

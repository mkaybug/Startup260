## DNS and IP Addresses
When one device wants to talk to another it must have an IP address. For example, 128.187.16.184 is BYU's address. Usually, human users prefer a symbolic name over an IP address. The symbolic name is called a domain name. Domain names are converted to IP address by doing a lookup in the Domain Name System (DNS).
## Server
Key Pair file: Kaybugging.pem
### Remote Shell Into Server
```
-> ssh -i Kaybugging.pem ubuntu@18.210.220.50
```
The `Caddyfile` is the configuration file for your web service gateway. The `public_html` directory contains all of the static files that you are serving up directly through Caddy when using it as a web service. We will cover Caddy configuration in a later instruction. The `services` directory is the place where you are going to install all of your web services once you build them.

Need to exit?
```
-> exit
```
If warning that key pair file permissions are too open:
```
-> `chmod 600 Kaybugging.pem`
```
# Domain Names
You can get the IP address for any domain using the `dig` console utility.

amazon.com has more than one IP address associated with its domain name in case one isn't responding.

## Root Domain
Represented by a secondary level domain and a top level domain.

The owner of a root domain can create any number of subdomains. Ex. travel.cs260.click, finance.cs260.click, etc.
## Top Level Domain (TDL)
Represents things like com, edu, or click. A root domain would look like: byu.edu, google.com, cs260.click, etc.

The possible list of TLDs is controlled by ICANN, one of the governing boards of the internet.

# How to get info on Domain Names
`-> whois byu.edu
...`
You can look up the technical contact, who to contact with problems, or the admin contact if you want to buy.
## DNS (Domain Name System)

# Caddy
What does it mean when there's a little lock symbol in the upper right of the page next to the URL? -> the information travelling back and forth is encrypted.

Caddy was created by a student from BYU!
## A records and CNAME records
A domain name is used to create DNS records that map domain names to IP addresses (A records) or other domain names (CNAME records).

# HTML Introduction
Where is the interpreter for HTML? It's the browser! And, it's not too strict. Still, try to be clean and neat and accurate.
### (W3schools.com)
Proffessor's favorite HTML learning tool.

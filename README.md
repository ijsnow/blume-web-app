# Blume Web App

Web app for monitoring and controlling Blume Microfarms unit.

Will replace http://blumemicrofarms.com/demo

## Directions to download and run on phone

Clone repo onto your machine:

    $ git clone https://github.com/ijsnow/blume-web-app.git

Navigate into repo and run meteor:

    $ cd blume-web-app
    $ meteor

In another terminal tab, find your local broadcasting address:

    $ ifconfig

In the output, look for ```inet addr``` in the ```en0``` or ```en1``` sections.

Mine right now is ```inet 192.168.1.106```, so on my phone, I navigate to ```192.168.1.106:3000``` to view the app running.

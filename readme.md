# Trainbot 2

file structure of the folders

place all folders in a folder in the Pi's home dir called trainbot-2

```
~/trainbot-2
            - trainbot-2-commands
            - robot-dashboard
            - openCV-server
            - main-server
            - barcode-server

```

Install pm2 process manager.

```javascript
sudo npm install pm2 -g
```

To run pm2 at boot run the following script:

```bash
sudo env PATH=$PATH:/usr/local/bin /usr/local/lib/node_modules/pm2/bin/pm2 startup systemd -u pi --hp /home/pi/trainbot-2/trainbot-2-commands
```

Clone the repos from GitHub

```BASH
# clone this repo
git clone https://github.com/robot-websockets/trainbot-2-commands.git



# clone the main server
# this will be on port: 5001
git clone https://github.com/robot-websockets/main-server.git

cd main-server
npm install
cd ..

# got to: http://your-ip-address:5001/
# for the dashboard


# clone the opencv server
# this will be on port: 5002
git clone https://github.com/robot-websockets/main-server.git

# read the readme in the main-server folder and install the dependencies


# clone the barcode server
# this will be on port: 5003
git clone https://github.com/robot-websockets/barcode-server.git

# read the readme in the main-server folder and install the dependencies


```

to run all apps enter the following from this folder.

```bash
pm2 start ecosystem.config.js
```

To view how to do things follow https://pm2.io/doc/en/runtime/overview/

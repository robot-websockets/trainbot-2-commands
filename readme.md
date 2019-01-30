# Trainbot 2

file structure of the folders

place all folders in a folder in the Pi's home dir called trainbot-2

```
~/trainbot-2
            - trainbot-2-commands
            - openCV-server
            - main-server
            - barcode-server

```

## Clone the repos from GitHub

```BASH
# clone this repo inside ~/trainbot-2
git clone https://github.com/robot-websockets/trainbot-2-commands.git


# clone the main server
# this will be on port: 5001
git clone https://github.com/robot-websockets/main-server.git

cd main-server
npm install
cd ..

# got to: http://your-ip-address:5001/
# for the dashboard


# clone the opencv server inside ~/trainbot-2
# this will be on port: 5002
git clone https://github.com/robot-websockets/main-server.git

# read the readme in the main-server folder and install the dependencies


# clone the barcode server inside ~/trainbot-2
# this will be on port: 5003
git clone https://github.com/robot-websockets/barcode-server.git

# read the readme in the main-server folder and install the dependencies


```

## Install pm2 process manager.

```javascript
sudo npm install pm2 -g
```

To run pm2 at boot run the following script:

```bash
# execute the ecosystem.config.js file
pm2 start /path-to-file/ecosystem.config.js

# save the config file so it can be run at startup
pm2 save

# copy and past the result
pm2 startup

```

### Other commands

https://pm2.io/doc/en/runtime/overview/

```bash
#list all processes
pm2 ls

#view dashboard
pm2 monit
```

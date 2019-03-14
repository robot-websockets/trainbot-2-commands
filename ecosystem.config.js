const websocketServerIpAddress = '192.168.55.1';
const videoServerIpAddress = '192.168.55.12';
module.exports = {
    apps: [
        {
            name: 'main-server',
            script: '/home/pi/trainbot-2/main-server/app.js',
            autorestart: true,
            watch: false
        },
        {
            name: 'barcode-server',
            script: '/home/pi/trainbot-2/barcode-server/server.py',
            args: [
                '-W',
                `${websocketServerIpAddress}:5001`,
                '-V',
                `${videoServerIpAddress}:8081`
            ],
            interpreter: '/usr/bin/python3.5',
            autorestart: true,
            watch: false
        },
        {
            name: 'opencv-server',
            script: '/home/pi/trainbot-2/openCV-server/server.py',
            args: [
                '-W',
                `${websocketServerIpAddress}:5001`,
                '-V',
                `${videoServerIpAddress}:8081`
            ],
            interpreter: '/usr/bin/python3.5',
            autorestart: true,
            watch: false
        }
    ]
};

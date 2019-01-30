module.exports = {
    apps: [
        {
            name: 'brain',
            script: '/home/pi/trainbot-2/main-server/app.js',
            autorestart: true,
            watch: false
        },
        {
            name: 'barcode',
            script: '/home/pi/trainbot-2/barcode-server/server.py',
            interpreter: '/usr/bin/python3.5',
            autorestart: true,
            watch: false
        },
        {
            name: 'opencv-server',
            script: '/home/pi/trainbot-2/openCV-server/server.py',
            interpreter: '/usr/bin/python3.5',
            autorestart: true,
            watch: false
        }
    ]
};

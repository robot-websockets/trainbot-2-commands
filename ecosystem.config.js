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
            args: ['-W', '192.168.55.11:5001', '-V', '192.168.55.12:8081'],
            interpreter: '/usr/bin/python3.5',
            autorestart: true,
            watch: false
        },
        {
            name: 'opencv-server',
            script: '/home/pi/trainbot-2/openCV-server/server.py',
            args: ['-W', '192.168.55.11:5001', '-V', '192.168.55.12:8081'],
            interpreter: '/usr/bin/python3.5',
            autorestart: true,
            watch: false
        }
    ]
};

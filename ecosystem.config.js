module.exports = {
    apps: [
        {
            name: 'brain',
            script: '../main-server/app.js',
            autorestart: true,
            watch: false
        },
        {
            name: 'barcode',
            script: '../barcode-server/server.py',
            interpreter: '/usr/bin/python3.5',
            autorestart: true,
            watch: false
        },
        {
            name: 'opencv-server',
            script: '../openCV-server/server.py',
            interpreter: '/usr/bin/python3.5',
            autorestart: true,
            watch: false
        }
    ]
};

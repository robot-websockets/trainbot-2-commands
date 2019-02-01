module.exports = {
    apps: [
        {
            name: 'main_server',
            script: 'C:/Dev/2019/hackhorsham/_pi_3/main-server/app.js',
            autorestart: true,
            watch: false
        },
        {
            name: 'barcode',
            script: 'C:/Dev/2019/hackhorsham/_pi_3/barcode-server/server.py',
            args: ['-W', '192.168.55.11:5001', '-V', '192.168.55.12:8081'],
            autorestart: true,
            watch: false
        },
        {
            name: 'opencv-server',
            script: 'C:/Dev/2019/hackhorsham/_pi_3/openCV-server/server.py',
            args: ['-W', '192.168.55.11:5001', '-V', '192.168.55.12:8081'],
            autorestart: true,
            watch: false
        }
    ]
};

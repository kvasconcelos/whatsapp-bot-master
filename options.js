module.exports = options = (headless, start) => {
    const options = {
        sessionId: 'BarBar',
        headless: headless,
        qrTimeout: 0,
        authTimeout: 0,
        restartOnCrash: start,
        cacheEnabled: false,
        useChrome: false,
        killProcessOnBrowserClose: true,
        throwErrorOnTosBlock: false,
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox',
            '--aggressive-cache-discard',
            '--disable-cache',
            '--disable-application-cache',
            '--disable-offline-load-stale-cache',
            '--disk-cache-size=0'
        ]
    }
    return options
}

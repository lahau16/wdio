const HtmlReport = require('@rpii/wdio-html-reporter');
const log4js = require('@log4js-node/log4js-api');
const mkdirp = require('mkdirp');
const defaultScreenshotPath = "screenshots";
var global = {
    reportAggregator: undefined
};
exports.config = {
    runner: 'local',
    specs: [
        './src/index.ts'
    ],
    exclude: [
     ],
    maxInstances: 10,
    capabilities: [{
        maxInstances: 5,
        browserName: 'chrome',
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    framework: 'mocha',
    reporters: ['spec', 
    [HtmlReport.HtmlReporter, {
        debug: true,
        outputDir: './reports/html-reports/',
        filename: 'report.html',
        reportTitle: 'Test Report Title',
        showInBrowser: true,
        useOnAfterCommandForScreenshot: false,
        LOG: log4js.getLogger("default")
    }
]
],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
        require: ['@babel/register', 'ts-node/register'],
        compilers: [
            // optional
            'tsconfig-paths/register'
        ]
    },
    afterTest: function(test, context, { error, result, duration, passed, retries }) {
        const path = require('path');
        const moment = require('moment');

        // if test passed, ignore, else take and save screenshot.
        if (test.passed) {
            return;
        }
        else{
            const timestamp = moment().format('YYYYMMDD-HHmmss.SSS');
            const filepath = path.join('reports/html-reports/' + defaultScreenshotPath + '/', timestamp + '.png');
            browser.saveScreenshot(filepath);
            process.emit('test:screenshot', filepath);
        }
        
    },
    onPrepare: function (config, capabilities) {

        let reportAggregator = new HtmlReport.ReportAggregator({
            outputDir: './reports/html-reports/',
            filename: 'master-report.html',
            reportTitle: 'Master Report',
            browserName : capabilities.browserName,
        });
        reportAggregator.clean();
        global.reportAggregator = reportAggregator;
        mkdirp('reports/html-reports/' + defaultScreenshotPath + '/');
    },
    onComplete: function(exitCode, config, capabilities, results) {
        (async () => {
            const rs = await global.reportAggregator.createReport();
            console.log(rs);
        })();
    },
}

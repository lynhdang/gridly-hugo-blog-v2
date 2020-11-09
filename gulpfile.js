var gulp = require('gulp');
const fs = require('fs');
const { GridlyClient, GridlyParser } = require('gridly-client-js');
const gridlyConfig = require('./gridly.json');

let gridlyClient;

async function buildI18n({ view, columns, file }) {
    const records = await gridlyClient.records(view).get();
    const content = GridlyParser.i18nToMD(records, columns);
    
    fs.writeFile(file, content, function (err) {
        if (err) console.log(`Build: i18n`, err);
    });
}

async function buildPostPages({ view, columns, folder }) {
    const records = await gridlyClient.records(view).get();
    
    records.forEach((record) => {
        if (record[columns.postID]) {
            const content = GridlyParser.postToMD(record, columns);
            fs.writeFile(`${folder}/${record[columns.postID]}.md`, content, function (err) {
                if (err) console.log(`Build: ${record[columns.postID]}.md`, err);
            });
        }
    });
}

async function run(config) {
    if (config.apiKey !== "{YOUR_API_KEY}") {
        gridlyClient = new GridlyClient(config.apiKey, 'https://api.gridly.com/v1');

        await buildI18n(config.grids.i18n);
        await buildPostPages(config.grids.posts);
    } else {
        throw "Your Gridly API key is not valid.";
    }
}

async function buildContent() {
    await run(gridlyConfig);

    return new Promise((resolve, reject) => {
        resolve();
    });
}


var build = gulp.series(
    gulp.parallel(buildContent)
);

exports.build = build;
exports.default = build;

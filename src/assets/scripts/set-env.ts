/* 
    auto generates env files for GitHub Actions
*/
/* tslint:disable */
//@ts-nocheck

const { writeFile, existsSync, mkdirSync } = require('fs');
const { argv } = require('yargs');
require('dotenv').config();
const _env = argv.environment;

console.log('setting environment');
function writeFileUsingFs(targetPath, environmentFileContent) {
    writeFile(targetPath, environmentFileContent, function(err) {
        if (err) {
            console.log(err);
        }

        if (environmentFileContent !== '') {
            console.log(`wrote variables to ${targetPath}`);
        }
    });
}

const envDirectory = './src/environments';
if (!existsSync(envDirectory)) {
    mkdirSync(envDirectory);
}

const productionPath = './src/environments/environment.prod.ts'
const devPath = './src/environments/environment.ts'

writeFileUsingFs(productionPath, '');
writeFileUsingFs(devPath, '');


//checks whether command line argument of `prod` was provided signifying production mode
const isProduction = _env === 'prod';
//console.log(_env, `is production env: ${isProduction}`)

//choose the correct targetPath based on environment
const targetPath = isProduction ? productionPath : devPath;

//actual content to be compiled dynamically and pased into respective environment files
const envFileContent = `
//this file was autogenerated by dynamically running set-env.ts and using dotenv for managing API key secrecy
export module Environment {
    export const production = ${isProduction};
    export const featureFlags = {
        enableFollowFeature: ${process.env.ENABLE_FOLLOW_FEATURE}
    }
    export const mapbox = {
        accessToken: '${process.env.MAPBOX_ACCESS_TOKEN}'
    }
}
`;


writeFileUsingFs(targetPath, envFileContent);
/* tslint:enable */
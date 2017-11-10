"use strict";

const S3Adapter = require('./S3Adapter');
var fs = require('fs');
class Adapter {
    constructor(config) {
        if(config.servidor == "S3"){
            var bucketPath = config.bucketPath;
            var s3Options = {
                region: config.region,
                endpoint: config.endpoint,
                credentials: config.credentials
            };

            return new S3Adapter(bucketPath,s3Options);
        }  
        if(config.servidor == "LOCAL"){
            return fs;
        }
    }
}    

module.exports = Adapter;
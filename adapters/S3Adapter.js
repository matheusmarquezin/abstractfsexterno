"use strict";
const S3FS = require('s3fs');
class S3Adapter extends S3FS{

	constructor(bucketPath,s3Options) {
		super(bucketPath,s3Options);
	}
}

module.exports = S3Adapter;

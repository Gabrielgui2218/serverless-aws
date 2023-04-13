'use strict';

const AWS = require('aws-sdk')
const S3 = new AWS.S3()
module.exports.handler = async ({ Records : records}, context) => {
    try {
      await Promise.all(records.map( async record => {
         const { key } = record.s3.object;

         const image = await S3.getObject
      }))

      return {
        statusCode: 201,
        body: {}
      }
    } catch (err) {
      return err;
    }
  };

 

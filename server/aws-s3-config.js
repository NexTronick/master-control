const AWS = require("aws-sdk");

AWS.config.update({
  accessKeyId: "your-access-key-id",
  secretAccessKey: "your-secret-access-key",
  region: "your-aws-region",
});

const S3 = new AWS.S3();
module.exports = { S3: S3 };

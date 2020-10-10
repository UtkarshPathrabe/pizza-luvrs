const AWS = require('aws-sdk');
const s3 = new AWS.S3();

module.exports.save = (name, data) => {
	return new Promise((resolve, reject) => {
		const params = {
			Bucket: 'pizza-luvrs-utkarsh-pathrabe',
			Key: `pizzas/${name}.png`,
			Body: Buffer.from(data, 'base64'),
			ContentEncoding: 'base64',
			ContentType: 'image/png',
		};
		s3.putObject(params, (error, data) => {
			if (error) {
				reject(error);
			} else {
				resolve(
					`//pizza-luvrs-utkarsh-pathrabe.s3.ap-south-1.amazonaws.com/${params.Key}`,
				);
			}
		});
	});
};

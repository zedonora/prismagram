import multer from "multer";
//import multerS3 from "multer-s3";
//import aws from "aws-sdk";

// const s3 = new aws.S3({
// 	accessKeyId: process.env.AWS_KEY,
// 	secretAccessKey: process.env.AWS_SECRET,
// 	reguion: "ap-northeast-2"
// });

// const upload = multer({
// 	storage: multerS3({
// 		s3: s3,
// 		bucket: "prismagram",
// 		metadata: function(req, file, cb) {
// 			cb(null, { fieldName: file.fieldName });
// 		},
// 		key: function(req, file, cb) {
// 			cb(null, Date.now().toString());
// 		}
// 	})
// });
// export const uploadController = (req, res) => {
// 	const {
// 		file: { location }
// 	} = req;
// 	res.json({ location });
// };
const upload = multer({ dest: "uploads/" });

export const uploadMiddleware = upload.single("file");

export const uploadController = (req, res) => {
	const {
		file: { path }
	} = req;
	res.json({ path });
};

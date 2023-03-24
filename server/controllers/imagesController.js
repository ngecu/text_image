const download = require('image-downloader');
require("firebase/storage");
var admin = require("firebase-admin");
const uuid = require('uuid-v4');

var serviceAccount = require("../capstonefb-264e0-firebase-adminsdk-jshlt-ab2a9103bf.json");
require('dotenv').config()
const path = require('path')


console.log("initialized app");
console.log(process.env.STORAGE_BUCKET)
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: process.env.STORAGE_BUCKET
});

var bucket = admin.storage().bucket();


// 1.Get image url from OPEN AI - frontend
// 2.Download Image - backend
const downloadImage = async (req, res) => {
  const {
    url
  } = req.body

  

  async function uploadFile() {

    const metadata = {
      metadata: {
        // This line is very important. It's to create a download token.
        firebaseStorageDownloadTokens: uuid()
      },
      contentType: 'image/png',
      cacheControl: 'public, max-age=31536000',
    };

    // Uploads a local file to the bucket
    var filename = path.join(__dirname,'../','photo.png')
    console.log(filename)
    
console.log("about to upload");
    await bucket.upload(filename, {
        // Support for HTTP requests made with `Accept-Encoding: gzip`
        destination: `${new Date().toISOString()}.png`,
        gzip: true,
        metadata: metadata,
      })

      .then((data) => {

        let file = data[0];

        const firebase_url = Promise.resolve("https://firebasestorage.googleapis.com/v0/b/" + bucket.name + "/o/" + encodeURIComponent(file.name) + "?alt=media&token=" + uuid)


        firebase_url.then((val) => {
          
          return res.json(val)
        })

      })

      .catch(err => console.log("error is ",err))

  }


  try {
    download.image({
        url,
        dest: "../../photo.png", // will be saved to /path/to/dest/image.jpg
      })
      .then(({
        filename
      }) => {

        return uploadFile().catch(console.error);
      })
      .catch((err) => console.error(err));


  } catch (error) {
    return res.json(error)
  }

}

module.exports = {

  downloadImage

}
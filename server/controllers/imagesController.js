const firebase = require('../db');  // reference to our db const firestore = firebase.firestore(); // if using firestorerequire("firebase/storage"); // must be required for this to workconst storage = firebase.storage().ref(); // create a reference to storageglobal.XMLHttpRequest = require("xhr2"); // must be used to avoid bug// Add Image to Storage and return the file path
const download = require('image-downloader');
var fs = require('fs');
const path = require('path');
require("firebase/storage");


const {ref} = require('firebase/storage')
const file = '/home/devngecu/Desktop/code/supabase-nextjs/frontend/src/components/photo.png'

var admin = require("firebase-admin");
const uuid = require('uuid-v4');

var serviceAccount = require("../imagetextconverter-95b1d-firebase-adminsdk-ah6qz-3d6733ecf7.json");


admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    storageBucket: "imagetextconverter-95b1d.appspot.com"
});

var bucket = admin.storage().bucket();







// 1.Get image url from OPEN AI - frontend
// 2.Download Image - backend
const downloadImage = async (req, res) => {
    const  {url} = req.body

    console.log(req.body)

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
        var filename = "/home/devngecu/Desktop/code/supabase-nextjs/server/photo.png"

        await bucket.upload(filename, {
          // Support for HTTP requests made with `Accept-Encoding: gzip`
          destination: `${new Date().toISOString()}.png`,
          gzip: true,
          metadata: metadata,
        })

        .then((data) => {

            let file = data[0];
  
            const firebase_url = Promise.resolve("https://firebasestorage.googleapis.com/v0/b/" + bucket.name + "/o/" + encodeURIComponent(file.name) + "?alt=media&token=" + uuid)
            
            
            firebase_url.then((val)=>{
              
                return res.json(val)
            })
           
        });



      
      
      }


    try {
        download.image({
            url,
            dest: "/home/devngecu/Desktop/code/supabase-nextjs/server/photo.png",               // will be saved to /path/to/dest/image.jpg
          })
          .then(({ filename }) => {

            return uploadFile().catch(console.error);
          })
          .catch((err) => console.error(err));
    
     
    } catch (error) {
        return res.json(error)
    }
  
}
    
// 3.Save Image to Firebase

// const addImage = async (req, res) => {
//     try {
//         console.log("adding");
        
          
          

        
//            }  catch (error) {
//         console.log (error)
//         res.status(400).send(error.message);
//     }
// }


// 4.Save returned url and text to supabase with associated account

  
        
    


module.exports = {
    
    downloadImage
    
}
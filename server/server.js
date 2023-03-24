const express = require("express");
const cors = require("cors");
const multer = require("multer");
const imageRoute = require('./routes/image-route');



const app = express();
app.use(express.json())
// express setup
const whitelist = ["http://localhost:3000"]

const corsOptions = {

  origin: function (origin, callback) {

    if (!origin || whitelist.indexOf(origin) !== -1) {

      callback(null, true)

    } else {

      callback(new Error("Not allowed by CORS"))

    }

  },

  credentials: true,

}

app.use(cors(corsOptions))


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// multer
const memoStorage = multer.memoryStorage();
const upload = multer({ memoStorage });


// routes (for uploading images to storage)
app.use('/api/Image', imageRoute.routes)






const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server has started on port " + PORT);
});
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const imageRoute = require('./routes/image-route');
const path = require('path');
const morgan = require('morgan')


const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.json())
// express setup
const whitelist = ["http://127.0.0.1:3000"]

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

app.use(cors())


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// multer
const memoStorage = multer.memoryStorage();
const upload = multer({ memoStorage });


// routes (for uploading images to storage)
app.use('/api/Image', imageRoute.routes)


console.log(__dirname)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/out')))

  app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../frontend/out/index.html'));
  });

} else {
  app.get('/', (req, res) => {
    res.send('API is not running....')
  })
}





const PORT = 5000;
app.listen(PORT, () => {
  console.log("Server has started on port " + PORT);
});
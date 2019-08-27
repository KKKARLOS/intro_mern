const multer = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      //console.log(req.body)
      cb(null, './storage/imgs')
      //cb(null, './public/images')
    },
    filename: function (req, file, cb) {
      console.log(req)
      var filetype = '';
      if(file.mimetype === 'image/gif') {
        filetype = 'gif';
      }
      if(file.mimetype === 'image/png') {
        filetype = 'png';
      }
      if(file.mimetype === 'image/jpeg') {
        filetype = 'jpg';
      }
      cb(null, `${file.fieldname}-${Date.now()}.${filetype}`)
    }
  })
   
  const upload = multer({ storage: storage })
  module.exports = upload
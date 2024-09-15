//dependencis
const fs = require("fs");
const path = require("path");

let lib = {};

lib.basedir = path.join(__dirname + "/../.data/"); //finally it is working....

lib.create = (dir, filename, data, callback) => {
  fs.open(lib.basedir + dir + "/" + filename, "wx", (err, filedescriptor) => {
    if (!err && filedescriptor) {
      fs.writeFile(filedescriptor, data, (err) => {
        if (err) {
          callback("something went wrong while creating a new file.");
        } else {
          fs.close(filedescriptor, (err) => {
            if (err) {
              callback("Error while closeing file");
            }
          });
        }
      });
    }
  });
};

lib.read = (dir, filename, callback) => {
  fs.readFile(dir + filename, "utf-8", (err, data) => {
    if (!err) {
      callback(data);
    } else {
      callback(err);
    }
  });
};

lib.delete = (dir, filename, callback) => {
  fs.unlink(lib.basedir + dir + "/" + filename, (err) => {
    if (!err) {
      callback(false);
    } else {
      callback("Error deleting file");
    }
  });
};

lib.update = (dir , filename , data , callback ) => {
    fs.open(lib.basedir + dir +'/'+ filename , 'r+', (err, filedescriptor => {
      if(!err && filedescriptor){
        //remove the old file 
        fs.truncate(filedescriptor , (err ) => {
          //if no eror write the file again with new data and clowse it 
          fs.write(filedescriptor, data , (err) => {
            //if no error close the file otherwise send a error 
            fs.close(filedescriptor, (err) => {
              if(!err){
                cl
              }
            })
          })
        })
      }
    })
}

module.exports = lib;

// lib.read(lib.basedir, "test.txt", (result) => {
//   console.log(result);
// });

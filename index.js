var fs = require('fs');
const path = require('path')
var archiver = require('archiver');




function mapDir(dir) {
    fs.readdir(dir, function (err, files) {
        if (err) {
            console.error(err)
            return
        }
        files.forEach((data) => {
            var output = fs.createWriteStream(__dirname + '/output/' + data.replace('.txt','') + '.zip');
            var archive = archiver('zip', {zlib: { level: 9 }});
            archive.pipe(output);
            archive.file('./data/' + data, { name: data });
            archive.finalize();
        })
    })
}

mapDir(path.join(__dirname, 'data'))
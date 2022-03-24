const request = require("request-promise");

request{'https://reddit.com/r/popular.json', (err, res, body) => {

    if(err) console.log(err);

    console.log(res);

    fs.writefile(dataPath, res.title)
});
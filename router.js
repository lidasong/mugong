
module.exports = {
    "GET /": './index.html',
    "GET /music": './music/index.html',
    "GET /bi": './bi/index.html',
    "GET /mugong/static": (req, res) => {
        const url = req.url
        if(/\.(css|js)$/.test(url)) {
            console.log(url, '000')
            res.send(url)
        }
    }
} 
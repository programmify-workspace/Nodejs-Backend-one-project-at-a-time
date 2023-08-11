const qrcode = require('qrcode');

module.exports = {
    getHome: async (req,res) => {
        try{
            const intWidthAndHeight = 100;
            res.status(200).render('generate', {intWidthAndHeight});
        } catch (err){
            res.status(500).send("<h4>Something went wrong! Go back to <a href='/'>home</a></h4>")
            console.error(err);
        }
    },

    getQRcode: async (req,res)=>{
        try{
            const {text, widthAndHeight} = req.body;
            const intWidthAndHeight = parseInt(widthAndHeight);
            // res.json(req.body);
            let emptyInput;
            if(text === ''){
                emptyInput = "Your input is empty. Enter a link or a url."
            }

            const options = {
                width: intWidthAndHeight, // Width of the QR code in pixels
                height: intWidthAndHeight, // Height of the QR code in pixels
            };
        
            qrcode.toDataURL(text, options, (err, url) => {
                if(err){
                    console.log(err)
                }
                // console.log(url)
                res.status(200).render('generate',{text, intWidthAndHeight, url, text, emptyInput});
            })
        } catch (err){
            res.status(500).send("<h4>Something went wrong! Go back to <a href='/'>home</a></h4>")
            console.error(err);
        }
    }
}
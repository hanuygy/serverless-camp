const multipart = require('parse-multipart');
const fetch = require('node-fetch');

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
        
    // here's your boundary:
    const boundary = multipart.getBoundary(req.headers['content-type']);
    
    // TODO: assign the body variable the correct value
    const body = req.body;

    // parse the body
    const parts = multipart.Parse(body, boundary);
    
    //module.exports function
    //analyze the image
    const result = await analyzeImage(parts[0].data);
    context.res = {
        body: {
            result
        }
    };
    console.log(result)
    context.done(); 
}


export function classifyImg(imageData) {
    console.log("HERE")

    // Initialise the Clarifai api
    const Clarifai = require('clarifai');
    console.log("HERE2")

    const app = new Clarifai.App({
        apiKey: '6632e6a759324dc6b58b6469a2c7cc1f'
    });
    console.log("HERE3")
    // Identify the image
    app.models.predict(Clarifai.GENERAL_MODEL, { base64: imageData }).then(response => {
        console.log(response);
    }).catch(err => {
        console.log(err);
    });

}
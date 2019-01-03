
export async function classifyImg(imageData) {
    console.log("here")
    // Initialise the Clarifai api
    const Clarifai = require('clarifai');
    const app = new Clarifai.App({
        apiKey: '6632e6a759324dc6b58b6469a2c7cc1f'
    });
    try {
        response = await app.models.predict('recycleIt', { base64: imageData })

        console.log(response.outputs[0].data.concepts)
        return response.outputs[0].data.concepts
    }catch(e){
        console.log(e)
        return [{value: 0.05}]
    }
    
    

}
import os
from glob import glob
from clarifai.rest import Image as ClImage
from clarifai.rest import ClarifaiApp


def createImageSet(imgPath, concepts, notConcepts):
    images = []
    for file_path in glob(os.path.join(imgPath, '*.jpg')):
        img = ClImage(filename=file_path, concepts=concepts,not_concepts=notConcepts)
        images.append(img)
    return images


def bulkImportConcepts(imgSet):
    app = ClarifaiApp()

    if len(imgSet) < 128:
        app.inputs.bulk_create_images(imgSet)
    else:
        for i in range(0, len(imgSet), 128):
            print("ADDING IMAGES FROM "+str(i)+" TO "+str(i+128))
            app.inputs.bulk_create_images(imgSet[i:i+128])

def trainModel(name,myConcepts):
    app = ClarifaiApp()
    model = app.models.create(model_id=name, concepts=myConcepts)
    model.train()

def main():

    # cardboard = createImageSet('../dataset/cardboard',['recycling', 'cardboard'], ['trash'])

    # glass = createImageSet('../dataset/glass', ['recycling', 'glass'], ['trash'])
    # metal = createImageSet('../dataset/metal', ['recycling', 'metal'], ['trash'])
    # paper = createImageSet('../dataset/paper', ['recycling', 'paper'], ['trash'])
    # plastic = createImageSet('../dataset/plastic', ['recycling', 'plastic'], ['trash'])
    # trash = createImageSet('../dataset/trash', ['trash'],['recycling'])
    # bulkImportConcepts(trash)
    # concepts = [cardboard,glass,metal,paper,plastic,trash]
    # for conceptSet in concepts:
    #     bulkImportConcepts(conceptSet)
    trainModel('recycleIt',['cardboard','glass','metal','paper','plastic','trash','recycling'])


main()

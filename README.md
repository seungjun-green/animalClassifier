## Animal Classifier

### What id does

This is a web app that can classify given photo of an animal into following 10:
dog, horse, elephant, butterfly, hen, cat, cow, sheep, spider, and squirrel.

**Exmaple usecase:**
screenshots


This web app uses an API which was got by deploying a Flask APP to Google Cloud Run.

The flask app takes a image file from user and preprocess it then pass it to a ml model. 

The model was created by using InceptionV3 as a base and adding a few more layers to it. Then it was trained with [Animals-10](https://www.kaggle.com/datasets/alessiocorrado99/animals10). For more details about training the model, you can check this [Google Colab notebook](https://github.com/seungjun-green/animalClassifier/blob/master/Animal_Classification.ipynb)


### Usage

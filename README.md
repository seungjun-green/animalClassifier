## Animal Classifier

### Usage

This web application is designed to classify photos of animals into one of the following 10 categories: dog, horse, elephant, butterfly, hen, cat, cow, sheep, spider, and squirrel.

**Exmaple usecase:**
<p align="center">
  <img src="https://github.com/seungjun-green/animalClassifier/blob/master/images/cow.png" alt="First Image" width="500" height="750"/>
  <img src="https://github.com/seungjun-green/animalClassifier/blob/master/images/cow.png" alt="Second Image" width="500" height="750"/>
  <img src="https://github.com/seungjun-green/animalClassifier/blob/master/images/cow.png" alt="Second Image" width="500" height="750"/>
</p>


This web application operates through an API that was developed by deploying a Flask app to Google Cloud Run. 

The flask app takes a image file from a user then returns a output of a ml model got by passing processed image array. 

The model was created by using InceptionV3 as a base and adding a few more layers to it. Then it was trained with [Animals-10](https://www.kaggle.com/datasets/alessiocorrado99/animals10). For more details about training the model, you can check this [Google Colab notebook](https://github.com/seungjun-green/animalClassifier/blob/master/Animal_Classification.ipynb)

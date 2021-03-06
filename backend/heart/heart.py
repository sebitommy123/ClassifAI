# -*- coding: utf-8 -*-
"""Erin's Model.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1uCkcYkw5h9K9Qr-xvE1gXsNjaI3eelYN
"""

import sys
sys.path.insert(0, '..')
import serveUnit
import os
import json

import opendatasets as od
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt

# Tensorflow
import tensorflow as tf
from tensorflow.keras import callbacks
from tensorflow.keras import Sequential
from tensorflow.keras.layers import Dense
from tensorflow.keras.layers import Dropout
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from tensorflow import keras

od.download("https://www.kaggle.com/rashikrahmanpritom/heart-attack-analysis-prediction-dataset")

df = pd.read_csv("./heart-attack-analysis-prediction-dataset/heart.csv")

df.head()

df.shape

#TODO (Not for this specific one but for your model)

#How do I split the data into training and testing data?
#What are the number of classes?
#What are the input variables?

X = df.drop(['output'], axis=1)
y = df['output']

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

X_train

y_train

model = keras.Sequential(
    [
        keras.layers.Dense(256, activation="relu", input_shape=[13]),
        keras.layers.Dense(515, activation="relu"),
        keras.layers.Dropout(0.3), #randomly sets value to 0 to prevent over fitting (usually for non image datasets)
        keras.layers.Dense(50, activation="relu"),
        keras.layers.Dropout(0.3),
        keras.layers.Dense(1, activation="sigmoid"),
    ]
)

model.compile(optimizer = 'Adam', loss = 'binary_crossentropy', metrics = ['binary_accuracy'])

early_stopping = keras.callbacks.EarlyStopping( patience = 20, min_delta = 0.001,
                                               restore_best_weights =True )

if (os.path.exists("./lastModel.h5")):
  print("Found cached model")
  model = keras.models.load_model("./lastModel.h5")
else:
    history = model.fit(
        X_train, y_train,
        validation_data=(X_test, y_test),
        batch_size=15,
        epochs=50,
        callbacks = [early_stopping],
        verbose=1, 
    )

test_loss, test_acc = model.evaluate(X_test, y_test)

print('Test accuracy:', test_acc)

def classify(image):
    y_pred = model.predict(np.array([image]))
    return json.dumps(y_pred[0].tolist())

serveUnit.subscribe(classify)

serveUnit.start(port=5006)
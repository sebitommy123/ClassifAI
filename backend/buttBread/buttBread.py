# -*- coding: utf-8 -*-
"""butt_or_bread

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/17d_MqZEhes2LiIPLeqnZWMOrsD_cVEm3
"""

# Commented out IPython magic to ensure Python compatibility.
# % matplotlib inline
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import torch
import numpy as np
import torchvision.transforms as transforms

# Tensorflow
import tensorflow as tf
from tensorflow.keras import callbacks
from tensorflow.keras import Sequential
from tensorflow.keras.layers import Dense
from tensorflow.keras.layers import Dropout
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.metrics import f1_score,precision_score,recall_score
from tensorflow import keras
import glob
import cv2
import PIL

from google.colab import drive
drive.mount('/content/drive')

PATH_OF_DATA_BUTT = '/content/drive/MyDrive/butt_or_bread/butt_or_bread/butt'
!ls {PATH_OF_DATA}

# Viewing image
im = PIL.Image.open('/content/drive/MyDrive/butt_or_bread/butt_or_bread/butt/butt_1053.jpg')
im

features = []
labels = []
classes = ['butt', 'bread']

for i in range(len(classes)):
  file_list = glob.glob("/content/drive/MyDrive/butt_or_bread/butt_or_bread/" + classes[i] + "/*")
  for item in range(2250):
    features.append(file_list[item])
    labels.append([i])

print("Dataset Feature size : ",len(features))
print("Dataset labels size : ",len(labels))

x_train = []
y_train = []
x_test = []
y_test = []

for i in features:
    x_train.append(cv2.imread(i,cv2.IMREAD_COLOR))
    x_train[-1] = np.resize(x_train[-1],[224,224,3])
    if len(x_train) % 1000 == 0:
        print(len(x_train))


for i in labels:
    y_train.append(i)

x_train,x_test,y_train,y_test = train_test_split(x_train,y_train,test_size=0.1)
print("Train data : ",len(x_train),len(y_train))
print("Validation data : ",len(x_test),len(y_test))

from tensorflow.keras import backend as K
K.clear_session()

model = Sequential()

model.add(keras.layers.Conv2D(32,(3,3),activation="relu",padding="same",input_shape=(224,224,3)))
model.add(keras.layers.Conv2D(32,(3,3),activation="relu",padding="same"))
model.add(keras.layers.MaxPooling2D(3,3))

model.add(keras.layers.Conv2D(64,(3,3),activation="relu",padding="same"))
model.add(keras.layers.Conv2D(64,(3,3),activation="relu",padding="same"))
model.add(keras.layers.MaxPooling2D(3,3))

model.add(keras.layers.Conv2D(128,(3,3),activation="relu",padding="same"))
model.add(keras.layers.Conv2D(128,(3,3),activation="relu",padding="same"))
model.add(keras.layers.MaxPooling2D(3,3))

model.add(keras.layers.Conv2D(256,(3,3),activation="relu",padding="same"))
model.add(keras.layers.Conv2D(256,(3,3),activation="relu",padding="same"))

model.add(keras.layers.Flatten())

model.add(keras.layers.Dense(512,activation="relu"))
model.add(keras.layers.Dropout(0.5))

model.add(keras.layers.Dense(29,activation="softmax"))

opt = keras.optimizers.Adam(learning_rate=0.0001)
model.compile(optimizer=opt,loss="sparse_categorical_crossentropy",metrics=['accuracy'])
model.summary()

x_train = np.array(x_train)
y_train = np.array(y_train) 
x_test = np.array(x_test)
y_test = np.array(y_test)
history = model.fit(x_train,
          y_train,
          epochs=5,
          validation_data = (x_test,y_test))

plt.style.use('seaborn')
plt.figure(figsize=(10,10))
plt.plot(history.history['loss'], color='b', label="Training loss")
plt.plot(history.history['val_loss'], color='r', label="Validation loss")
plt.legend()
plt.show()

plt.figure()

plt.figure(figsize=(8,8))
plt.plot(history.history['accuracy'], color='b', label="Training accuracy")
plt.plot(history.history['val_accuracy'], color='r',label="Validation accuracy")
plt.legend()
plt.show()

y_pred = np.argmax(model.predict(x_test),1)
print("Precision : {:.2f} %".format(precision_score(y_pred,y_test,average='macro')))
print("Recall    : {:.2f} %".format(precision_score(y_pred,y_test,average='macro')))
print("F1 Score  : {:.2f} %".format(precision_score(y_pred,y_test,average='macro')))

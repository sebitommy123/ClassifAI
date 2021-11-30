# -*- coding: utf-8 -*-
"""Joelle's Model

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/127HwVd_OMWoEpD7JPE_7kpjS03s3_20z
"""

import sys
sys.path.insert(0, '..')
import serveUnit

import numpy as np 
import pandas as pd 
import matplotlib.pyplot as plt
import seaborn as sns
import keras
from keras.models import Sequential
from keras.layers import Dense, Conv2D , MaxPool2D , Flatten , Dropout , BatchNormalization
from keras.preprocessing.image import ImageDataGenerator
from sklearn.model_selection import train_test_split
from sklearn.metrics import classification_report,confusion_matrix
from keras.callbacks import ReduceLROnPlateau
import cv2
import os
import opendatasets as od

od.download("https://www.kaggle.com/paultimothymooney/chest-xray-pneumonia")

labels = ['PNEUMONIA', 'NORMAL']
img_size = 150
def get_training_data(data_dir):
    data = [] 
    for label in labels: 
        path = os.path.join(data_dir, label)
        class_num = labels.index(label)
        for img in os.listdir(path):
            try:
                img_arr = cv2.imread(os.path.join(path, img), cv2.IMREAD_GRAYSCALE)
                resized_arr = cv2.resize(img_arr, (img_size, img_size)) # Reshaping images to preferred size
                data.append([resized_arr, class_num])
            except Exception as e:
                print(e)
    return np.array(data)

train = get_training_data('./chest-xray-pneumonia/chest_xray/chest_xray/train')
test = get_training_data('./chest-xray-pneumonia/chest_xray/chest_xray/test')
val = get_training_data('./chest-xray-pneumonia/chest_xray/chest_xray/val')


plt.figure(figsize = (5,5))
plt.imshow(train[0][0], cmap='gray')
plt.title(labels[train[0][1]])

plt.figure(figsize = (5,5))
plt.imshow(train[-1][0], cmap='gray')
plt.title(labels[train[-1][1]])

x_train = []
y_train = []

x_val = []
y_val = []

x_test = []
y_test = []

for feature, label in train:
    x_train.append(feature)
    y_train.append(label)

for feature, label in test:
    x_test.append(feature)
    y_test.append(label)
    
for feature, label in val:
    x_val.append(feature)
    y_val.append(label)

x_train = np.array(x_train) / 255
x_val = np.array(x_val) / 255
x_test = np.array(x_test) / 255

x_train = x_train.reshape(-1, img_size, img_size, 1)
y_train = np.array(y_train)

x_val = x_val.reshape(-1, img_size, img_size, 1)
y_val = np.array(y_val)

x_test = x_test.reshape(-1, img_size, img_size, 1)
y_test = np.array(y_test)

model = Sequential()
model.add(Conv2D(32 , (3,3) , strides = 1 , padding = 'same' , activation = 'relu' , input_shape = (150,150,1)))
model.add(MaxPool2D(2,2))
model.add(Conv2D(64 , (3,3), activation = 'relu'))
model.add(MaxPool2D(2,2))
model.add(Conv2D(64 , (3,3), activation = 'relu'))
model.add(MaxPool2D(2,2))
model.add(Conv2D(64 , (3,3), activation = 'relu'))
model.add(MaxPool2D(2,2))
model.add(Conv2D(64 , (3,3), activation = 'relu'))
model.add(MaxPool2D(2,2))
model.add(Flatten())
model.add(Dense(units = 128 , activation = 'relu'))
model.add(Dense(units = 1 , activation = 'sigmoid'))
model.compile(optimizer = "rmsprop" , loss = 'binary_crossentropy' , metrics = ['accuracy'])
model.summary()

history = model.fit(x_train,y_train, batch_size = 32 , epochs = 7)

print("Loss of the model is - " , model.evaluate(x_test,y_test)[0])
print("Accuracy of the model is - " , model.evaluate(x_test,y_test)[1]*100 , "%")

predict_x=model.predict(x_test) 
predictions=np.argmax(predict_x,axis=1)
cm = confusion_matrix(y_test,predictions)
cm = pd.DataFrame(cm , index = ['0','1'] , columns = ['0','1'])
plt.figure(figsize = (10,10))
sns.heatmap(cm,cmap= "Blues", linecolor = 'black' , linewidth = 1 , annot = True, fmt='',xticklabels = labels,yticklabels = labels)

correct = np.nonzero(predictions == y_test)[0]
incorrect = np.nonzero(predictions != y_test)[0]

#i = 0
#for c in correct[:6]:
#    plt.subplot(3,2,i+1)
#    plt.xticks([])
#    plt.yticks([])
#    plt.imshow(x_test[c].reshape(150,150), cmap="gray", interpolation='none')
#    plt.title("Predicted Class {},Actual Class {}".format(predictions[c], y_test[c]))
#    plt.tight_layout()
#    i += 1

#i = 0
#for c in incorrect[:6]:
#    plt.subplot(3,2,i+1)
#    plt.xticks([])
#    plt.yticks([])
#    plt.imshow(x_test[c].reshape(150,150), cmap="gray", interpolation='none')
#    plt.title("Predicted Class {},Actual Class {}".format(predictions[c], y_test[c]))
#    plt.tight_layout()
#    i += 1

def classify(image):
    y_pred = model.predict(np.array([image]))
    return y_pred[0]

serveUnit.subscribe(classify)

serveUnit.start(port=5005)
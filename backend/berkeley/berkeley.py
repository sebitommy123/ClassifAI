from tensorflow.keras.models import Sequential
from keras.layers import Dense, Conv2D, MaxPooling2D, Flatten, Activation
import numpy as np
import os
import cv2
import random

# TODO: Add file dir
dataset_dir = "FILE DIRECTORY HERE/datasets"
class_names = ['Campanile', 'Cory_Hall', 'Doe_Library', 'Memorial_Glade', 'Sather_Gate', 'Soda_Hall', 'Sproul_Hall']

num_classes = len(class_names)
training_dataset = []

# Loops through all images in each folder (class)
for label in class_names:
    picture_dir = os.path.join(dataset_dir, label)
    class_index = class_names.index(label)
    for img in os.listdir(picture_dir):
        images = cv2.imread(os.path.join(picture_dir, img), cv2.IMREAD_GRAYSCALE)
        # Normalizing Data
        global image_size
        image_size = 200
        resized_array = cv2.resize(images, (image_size, image_size))
        training_dataset.append([resized_array, class_index])

# Randomizes order of dataset
random.shuffle(training_dataset)

# Creating the arrays to feed to the model
train_x = []
labels_y = []

for features, label in training_dataset:
    train_x.append(features)
    labels_y.append(label)

train_x = np.array(train_x).reshape(-1, image_size, image_size, 1)
# labels_y must be converted to np.array to use validation_split
labels_y = np.array(labels_y)

# Normalizing data
train_x = train_x / 255.0

# CNN Model
model = Sequential()

model.add(Conv2D(32, (3,3), input_shape = train_x.shape[1:]))
model.add(Activation("relu"))
model.add(MaxPooling2D())

model.add(Conv2D(32, (3,3)))
model.add(Activation("relu"))
model.add(MaxPooling2D())

model.add(Flatten())
model.add(Dense(32))

model.add(Dense(num_classes))
model.add(Activation('sigmoid'))

# Compiling the Model
model.compile(optimizer='adam',
            loss='sparse_categorical_crossentropy',
            metrics=['accuracy'])

# Fitting the model
model.fit(train_x, labels_y, validation_split=0.1, epochs=11)

# Testing the model
test_loss, test_accuracy = model.evaluate(train_x, labels_y, verbose=1)
print("Test Accuracy: ", str(test_accuracy))
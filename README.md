# snacc
Food and Nutrition Management with Smart Fridge Shelf\
Team Purple Mountain Majesty: Ivan Chen, Justin Jo, Thomas Rind\
Sponsor: Mark Hempstead

# Overview

This project is a semi-autonomous fridge shelf that helps users manage their food consumption and reduce food waste. The problem we are trying to solve is wasted food that is left to go bad in the fridge, due to overpurchasing or not consuming it before expiration. The target audience is middle class families who are concerned about saving money in food waste, but can't afford a high end fancy fridge. We designed the shelf with cost in mind, using low price sensors and components to limit the cost of the shelf.

# Components

There are three main components in this system. The first is the array of sensors built into the shelf. These sensors are connected to a Raspberry Pi that handles all the signal processing and message sending. The sensors include weight sensors, an infrared array, a barcode scanner, and a trigger for activating the Pi. 

The next component is the mobile interface built as a React Native app. The app lists the current contents of the fridge, and contains a shopping list feature that helps organize food. The app shows the user the expiration times of the food in their fridge, to keep track of which foods are about to go bad.

The last component is the food prediction machine learning model hosted on Amazon Web Services. This component takes in sensor data and predicts the food that is being put into or taken out of the fridge based on the data received and past user patterns. The user's purchase history and shopping list is tracked by the model, and is used to predict what types of food are most likely being used.

# System Requirements

The physical shelf is a requirement of the system because it contains the sensors. The current model is a prototype of a larger scale shelf that would fit into a fridge. The requirements for the mobile app is an Android or iOS phone with internet access. The AWS portion requires hosting a database on DynamoDB, as well as compute time on Lambda.

# Integration

The software on the Raspberry Pi takes care of all the connections to the cloud. The Raspberry Pi code is in C++, and smoothly receives data from the sensors and transmits it to AWS.

The AWS code is written in JavaScript, and handles receiving and parsing of the sensor data. The lambda functions control the flow of the data through the machine learning system and interacts with the database through queries. An additional lambda function takes care of interaction with the phone, sending push notifications and expiration alarms when necessary.

The mobile component is written in JavaScript using React Native as the UI framework. The code handles displaying of data and handling user interactions.

# Future Work

As this is only a prototype of a possible new technology, there is room for improvement in all the components. For the hardware, more sensors, and more accuracy in detection would help the learning algorithm a lot. Current limitations are due to cheap sensors and difficulty detecting small changes. An improvement to the learning algorithm would be more training data. Currently the model is trained on food from the lab and our fridges at home, but this changes with different people. More data would allow us to find and track down difficulties in the algorithm. The UI has minimalistic features currently, and requires some front end improvements in usability and features. 
10/25/17

We ordered an Echo and an Echo Dot from Amazon this week. They will arrive next week and we will work on creating a small sample app to get started with. We a preliminary user test, where we took turns being Alexa, and wrote down what user interactions came up. 

11/1/17

The Echo arrived this week and we began developing the Alexa skill. We have hooked up our skill to DynamoDB to persist user data. The basic functionality for a fridge list works now, for example:

Alexa, I bought a banana.
Alexa, I also got a grapefruit.
Alexa, I ate the banana.
Alexa, what's in the fridge?
> There is a grapefruit in the fridge.

We're still looking for a sponsor for the project. We have a few meetings lined up next week with professors to see if they're interested. We talked to Soha as a potential sponsor and she gave us a lot of feedback on the project design, as well as possible extensions or roadblocks along the way. She's not the official sponsor but we took her feedback and wrote an updated proposal using it.

11/8/17

This week we did more design work. We contacted some classmates and got their opinions on what they thought would be how they would use the app. We also looked more into the echo API and how it interacts with DynamoDB. We now have the alexa contacting our database and storing and reading information.

11/15/17

It was a slow week, team members were busy with interviews and exams. We have decided on Mark Hempstead as our advisor for the project. He provided good feedback on deciding what direction to take the project, and gave suggestions on how to narrow down the scope to achievable goals. The project will now be focused on automating food management: using sensors and Alexa to detect as much information as possible regarding food in the fridge. We are researching what sensors can be used to achieve this. The main goal right now is choosing a weight sensor that can be integration with a fridge, and ordering it to test on.

11/22/17

We talked with Prof. Hempstead this week and he encouraged us to flesh out the design more with a block diagram and start writing the interface for our various modules. 

Block Diagram: https://drive.google.com/file/d/1rBR2DvjNLcfyNQfNLJhbuYg3nHoug9IG/view?usp=sharing

Here are also a few more documents that we wrote for Prof. Hempstead's weekly meetings that are on our google drive.

Problem research: https://docs.google.com/document/d/1DWAl6UQ7hJ7u3xRtziVPY1GFp25oXUQOsOMWbiMIHgw/edit?usp=sharing

Design Specification: https://docs.google.com/document/d/1M4hBRmmy62RWy9NJv5-DHxRxAcAILHH9PZVxMYIZBb4/edit?usp=sharing

Latest Project Plan: https://docs.google.com/document/d/1xOzTtBFsDZqvUeCu50BdHuBNCrwXx6Ed5iB2FFyamdg/edit?usp=sharing

Risk Assessment: https://docs.google.com/spreadsheets/d/1JKvTBNisvh6KhJVUMb32tuj-hnweyex5eD6CuyoeCnQ/edit?usp=sharing

11/29/17

Thanksgiving break, we didn't meet this week. We ordered parts for the hardware prototype: force sensors, raspberry pi, load cells, infrared emitters/receivers and they will arrive next week.

12/6/17

The parts arrived, and Tom has begun building the prototype. We hooked up the infrared sensors and found out that their output values are much lower than expected. The max value we could get out of it was 6 of a possible 256. This is possibly due to the low voltage we have for the microcontroller. We're working on amplifying the signal to see if infrared is still viable.

Justin and Ivan are planning the algorithm to be used to predict food coming in and out of the fridge. The initial idea is to use knn on position and weight features to get a candidate set from past historical purchases. Then the candidate set is scored based on confidence values calculated using the various sensors we have connected. The model can be trained through Alexa interaction or barcode scanning.

== Winter Break ==

1/31/18

We have started up the weekly team meetings again and are beginning to plan out the schedule for the rest of the semester. The Technical Specification was updated with the feedback on the dossier. A section about team roles was added to the end, as well as a user stories section. We are splitting up what work to divide up between the team members. Ivan will be working on the Alexa/machine learning algorithm, Justin is starting on writing the UI in React, and Tom is working to build a new prototype for the shelf.

2/11/18

This week we met to discuss progress. Everyone was mostly busy and not much work on the project this week. We met with Lasser and discussed plans for the prototype to present. It will be a larger version of the plastic board, up to 9in by 12 inches, with 3x4 pressure sensors. We think this is wide enough to give good demo of the capabilities yet small enough to feasibly build.

3/5/18

We had a few setbacks on the project recetly. First, our AWS secret key was accidentally leaked on GitHub. This was quickly found by bitcoin miners who used the key to do some free mining on the compute cloud. Our account got shut down by AWS and charged $2100, but after contacting customer service for a couple weeks we were able to get the charge removed. However, the account is still shut down and we were unable to retrieve a lot of the data. We're moving all our code and services to a new account and hopefully that one won't get leaked.

Also there were schedule conflicts with our sponsor so we've been unable to meet for a while. We're meeting on Tuesday to discuss the progress and get suggestions with the prediction algorithm.

So far we have a couple lambda functions taking in data from the hardware. They log the updates into a dynamodb table to have a list of all historic updates. Then we match new updates to the history to find a closest match in terms of weight and location in the fridge. The barcode scanner is integrated with a service called IceCat that provides a free API for UPC barcode lookups. 

The main focus moving forward will be improving the prediction algorithm. We're still investigating ways to make it more accurate. 

3/12/18

We met with our sponsor this week to demonstrate the progress on the project. He suggested that we start looking into a well defined testing plan to make sure the project meets the specifications defined. We had given each other interfaces of what types of data are being sent to each other component, and this is a good place to start testing. The sponsor made the point that the components themselves might work fine on their own, but integrating them all will always cause problems. 

We're working on individual tests for our components. For the cloud features, there are testing tools on AWS through sending test messages and events. The databases can be verified through through the AWS console. We have successfully wired up all the infrared sensors on the second prototype now. Testing showed that one of them did not work correctly as the gain was off, but we're placing it now. The next hardware step is to integrate and test the barcode scanner so that we can test real products together with the cloud.

4/9/18

Our prediction algorithm is mostly finished now, the main piece left is to fiddle around with the weights experimentally to see what gets the best results. Currently mass difference and the shopping list is given high priority, so I'm testing to see if other combinations work well.

The shelf is built and we are in the process of integrating the parts together. One main roadblock was the lack of a nutritional database for food expiration dates. The Alexa part of the app has functionality to allow users to input this data, so we will assume that data will only have to be inputted once, or already exists. 

The testing plan moving forward is to set up an experiment with the prototype shelf. We will invite people to try the shelf, and pick 3 items from a variety of groceries on the shelf. The items are to be used to make a meal, and the participants are suggested to use items that are closer to expiration. One group will use the app/Alexa interface, and the control group will have to eyeball it like a normal fridge. The hypothesis is that the users using the app will be able to minimize the expiration risk of their fridge better than the users without it. This will help prove our point that the system helps reduce food waste in everyday peoples' lives.


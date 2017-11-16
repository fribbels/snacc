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
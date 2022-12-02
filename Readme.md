## Before Trying to Fork the project or clone it. Read the below instruction

## Client

I have used React-native cli for mobile application with kitten-ui and other dependencies.

go inside the client folder and there are relevent information on how to setup and start the project. You will need to download and install xCode to run Apple devices and android emulator for android devices. I use mac for my personnel development. So the steps are for mac user

Step 1.
Please follow the setup for installation below. https://reactnative.dev/docs/environment-setup

install homebrew from here - https://brew.sh/

  1. For ios 
     brew install node
     brew install watchman

  2. For android
     brew install node
     brew install watchman

Step 2.
Clone or Fork the project as per your choice. Forking is perfect here as you have access to the project in your local branch.

Step 3.
  1. run npm install inside the invoice folder. 
  2. cd ios and pod install.
  3. Make sure you have neccesary dependencies for react-native installed.

## Server

You will need to create your own .env file to make the backend work. Read ".env.example" in server folder to see what keys you will need to run backend without any problem

I have used Node and Express for server and MongoDB atlas for database. 

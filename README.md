# Kosmic-Test
This repository is to manage the assigned Assesment from the Kosmic.ai

Getting Started with a React Native Project

This guide outlines the steps to clone a React Native project from GitHub, install necessary dependencies, and run the app on both Android and iOS devices.

Prerequisites:

Node.js and npm (or yarn): Ensure you have Node.js (version 14 or later) and its package manager (npm or yarn) installed on your system. You can find download and installation instructions on the official Node.js website: https://nodejs.org/en
Android Studio (for Android development): Download and install Android Studio from the official website: https://developer.android.com/studio
Xcode (for iOS development): Download and install Xcode from the Mac App Store (required for iOS development).
Steps:

Clone the React Native Project:

Open a terminal or command prompt.

Navigate to the directory where you want to clone the project using the cd command.

Use the git clone command followed by the GitHub repository URL to clone the project. For example, to clone a project named my-react-native-app:

Bash
git clone https://github.com/username/my-react-native-app.git
Use code with caution.
Replace https://github.com/username/my-react-native-app.git with the actual URL of the project you want to clone.

Install Dependencies:

Navigate to the cloned project directory using the cd command.

Install the project's dependencies using either npm or yarn:

Using npm:

Bash
npm install
Use code with caution.
Using yarn:

Bash
yarn install
Use code with caution.
Running the App on Android:

Open Android Studio: Launch Android Studio.

Open the Android Project: Go to File > Open and select the android folder within your cloned React Native project.

Run the App:

Click the Run button (green triangle) in the toolbar.
Select an emulator or connected Android device from the dropdown.
The app will start running on the chosen device/emulator.
Running the App on iOS:

Connect an iOS Device: Ensure you have an iOS device connected to your computer with a USB cable.

Start the Metro Bundler (Optional): In a separate terminal window, navigate to your project directory and run:

Bash
npm start  # or yarn start
Use code with caution.
This starts a development server that reloads the app automatically when changes are made.

Open the iOS Project in Xcode: Open the ios folder within your cloned React Native project using Xcode.

Run the App: Click the Run button (play icon) in the Xcode toolbar.

Select your connected iOS device from the dropdown.

The app will start running on your iOS device.

Additional Notes:

Refer to the specific project's documentation for any additional configuration steps or requirements.
Consider using a code editor or IDE with React Native support for a more streamlined development experience (e.g., Visual Studio Code with React Native extensions).
By following these steps, you should be able to successfully clone a React Native project from GitHub, install the necessary dependencies, and run the app on both Android and iOS devices.

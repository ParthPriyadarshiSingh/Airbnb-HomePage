



# Airbnb App Clone

This is an React Native project is built using Expo. It is a replica of the Airbnb app UI, having only login and explore page.

## Screenshots


![Login Screen](assets/images/IMG-20240525-WA0020.jpg)

![Home Screen](assets/images/IMG-20240525-WA0019.jpg)

![Home Screen](assets/images/IMG-20240525-WA0021.jpg)

![Home Screen](assets/images/IMG-20240525-WA0018.jpg)

![Home Screen](assets/images/IMG-20240525-WA0017.jpg)

![Home Screen](assets/images/IMG-20240525-WA0015.jpg)

![Home Screen](assets/images/IMG-20240525-WA0016.jpg)




## Demo

Watch the app in action:

![Watch the demo](assets/images/ezgif-5-e60d7287d9.gif)

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [Node.js and npm](https://nodejs.org/) (Node Package Manager)


## Getting Started

Follow these steps to set up and run the project:

### 1. Clone the Repository

First, clone the repository to your local machine using Git.

```bash
git clone https://github.com/ParthPriyadarshiSingh/Airbnb-HomePage.git
cd airbnb-app-clone
```

### 2. Open the Project in VS Code

Open Visual Studio Code and navigate to the project directory.

```bash
code .
```

### 3. Install Dependencies

Install the required dependencies using npm.

```bash
npm install
```

### 4. Start the Expo Development Server

Start the Expo development server using the following command:

```bash
npm start
```

This will start the development server and open the Expo DevTools in your browser.

### 5. Running the App

#### Using Expo Go App

You can run the app on your physical device using the Expo Go app.

1. **For iOS:**
   - Open the built-in Camera app on your iPhone.
   - Scan the QR code displayed in the terminal.
   - Follow the prompt to open the app in the Expo Go app.

2. **For Android:**
   - Open the Expo Go app on your Android device.
   - Scan the QR code displayed in the terminal.

### Notes

- **Login Page:** The login functionality is not working currently, but you can skip the login page to access the rest of the app.

## Troubleshooting

If you are asked for expo account login after running npm start, either create an account or remove the following line of code from app.json-
```bash
 "eas": {
        "projectId": "ae23d056-47de-49f7-9dba-8813647c3c5a"
      }
```

If you encounter any issues while setting up or running the project, try the following:

- Ensure all dependencies are installed correctly.
- Restart the Expo development server and your device.
- Check the [Expo documentation](https://docs.expo.dev/) for more detailed troubleshooting steps.



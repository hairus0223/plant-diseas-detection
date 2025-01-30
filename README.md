# Plant Disease Detection App

![Plant Disease Detection](https://img.shields.io/badge/version-1.0.0-blue) ![Angular](https://img.shields.io/badge/Angular-v17-red) ![Ionic](https://img.shields.io/badge/Ionic-v7-purple) ![Capacitor](https://img.shields.io/badge/Capacitor-v5-green)

A mobile application built with **Angular**, **Ionic**, and **Capacitor** that detects plant diseases using a TensorFlow.js model. The app allows users to capture images of plants and predicts the disease based on the trained model.

---

## Features

- **Camera Integration**: Capture images of plants using the device's camera.
- **Disease Prediction**: Predict plant diseases using a pre-trained TensorFlow.js model.
- **User-Friendly Interface**: Simple and intuitive UI for seamless user experience.
- **Cross-Platform**: Works on both Android and iOS devices.

---

## Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher)
- [Angular CLI](https://angular.io/cli) (v17 or higher)
- [Ionic CLI](https://ionicframework.com/docs/cli) (v7 or higher)
- [Capacitor](https://capacitorjs.com/) (v5 or higher)
- Android Studio (for Android development) or Xcode (for iOS development)

---

## Setup Instructions

1. **Clone the repository:**

```bash
git clone https://github.com/hairus0223/plant-diseas-detection.git
```

2. **Navigate to the project folder:**

```bash
   cd plant-disease-detection
```

3. **Install dependencies: Ensure you have Angular CLI installed and then run::**

```bash
yarn install
# or
npm install
```

4. **Add Capacitor platforms:**

```bash
npx cap add android
npx cap add ios
```

5. **Add Capacitor platforms:**

```bash
ionic build
npx cap copy
```

## Running the App

**Web Development**
To run the app in a web browser:

```bash
ionic serve
```

**Android**
Open Android Studio:

```bash
npx cap open android
```

Build and run the app on an emulator or physical device.

**iOS**
Open Xcode:

```bash
npx cap open ios
```

Build and run the app on an emulator or physical device.

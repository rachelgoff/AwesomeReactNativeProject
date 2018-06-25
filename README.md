# PotteryClient
This app helps pottery fans to track their status when making and firing pottery.

## Check Node.js version and install the latest Node.js package
Check for Node.js & npm versions >= 6
```
node -v
npm -v
```

Install the latest Node.js package by following instructions on the Node.js offical website. Download the latest node.js from https://nodejs.org/en/download/ and follow steps to install the LTS version of Node.js. You need admin user access to install Node.js globaly.

Install the latest version of npm
```
sudo npm install npm@latest -g
```

## Install the Expo command line package
```
npm install -g exp
```

## Clone the PotteryClient repository
```
cd ~/git
git clone https://github.com/rachelgoff/PotteryClient.git
```

## Install required libaries and modules for PotteryClient
```
cd PotteryClient
npm install
```

## Run the PotteryClient app on iOS or Android using Expo
### Start the app
```
exp start
```

### Send the Expo url to your device
```
exp send -s your@emailaddress
```

### Launch the PotteryClient app on your device
Install the [Expo Client for iOS](https://itunes.apple.com/us/app/expo-client/id982107779?mt=8) or [Expo for Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US) on your device. Open the link sent to your email in the Expo app. The link should look like ```exp://$randomnumber.$yourexponame.potteryclient.exp.direct:80```.

More info about Expo can be found at https://docs.expo.io/versions/v28.0.0/introduction/installation.

## Run the PotteryClient app on iOS using the XCode Simulator
Install XCode on your macOS. Install react-native-cli on your device and run the app in the simulator.
```
npm install -g react-native-cli
react-native run-ios --simulator="iPhone X"
```

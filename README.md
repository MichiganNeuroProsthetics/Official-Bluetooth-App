# Frontend Setup
1. Install the Expo Go app on your phone
2. Install python (if not already installed)
3. Set up a virtual environment
   1. Run `python3 -m venv env` to create the environment
   2. Run `source env/bin/activate` to activate it (must be done whenever you open the folder)
   3. Run `deactivate` to close the environment
4. Install [node](https://eecs485staff.github.io/p3-insta485-clientside/setup_react.html#install-node)
   1. If on MacOS, install [homebrew](https://brew.sh/) first
5. `cd` into the `mnp-app` folder
6. Run `npm install` to install all dependencies
7. Run `npm start` to start Expo server
8. Follow instructions in terminal to view app


# Backend Setup
1. Activate your virtual environment
2. `cd` into the backend folder
3. Run `sh install_dependencies.sh`
4. Run `sh run_flask_server.sh`
   1. Two links will appear in your terminal
   2. In the `mnp-app/app/(tabs)/Speech.js` file, change the `{Insert URL here}` to the second link (don't push it to the remote)
5. When the voice recognition feature in the app is used, it will make a call to the backend. Make sure your laptop and phone are on the same Wi-Fi network for this to work.

# Figma
The Figma for the app can be accessed [here](https://www.figma.com/design/ZYalC8pVleSLqAsJLcqBbN/MNP-App-Revised?node-id=0-1&p=f)

# Helpful information for development
The app's layout is controlled by the file `mnp-app/app/_layout.tsx`. This file renders the components in `mnp-app/app/(tabs)` as tabs in the app. The `mnp-app/app/(tabs)\index.tsx` file is rendered as the main home page. The file `mnp-app/app/(tabs)\_layout_.tsx` controls how the tabs appear. 

To create a new page in the app, add a file called `[FileName].js` (or .tsx) to the `mnp-app/app/(tabs)` folder. Then, add a new 
`Tabs.Screen` component in the `mnp-app/app/(tabs)\_layout_.tsx` file. Follow the format of the existing tabs. You can change the icon
as well -- refer to the [FontAwesome documentation](https://fontawesome.com/v4/icons/).

For more information about the tabs, refer to the [Expo docs](https://docs.expo.dev/router/advanced/tabs/).

Style information is currently kept in the same file as the component it affects. There is currently some duplication in styling code, which should be fixed in future.
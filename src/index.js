// import { AppRegistry } from "react-native";
// import { name as appName } from '../app.json';
// import { App } from "./App";


// AppRegistry.registerComponent(appName, () => App)
// AppRegistry.runApplication(appName, {
//     rootTage: document.getElementById('app-root')
// })

import { AppRegistry } from 'react-native';
import { name as appName } from '../app.json';
import App from './App';

// Web-specific imports
import { render } from 'react-dom';

if (process.env.NODE_ENV === 'web') {
  const rootTag = document.getElementById('root');
  render(<App />, rootTag);
} else {
  AppRegistry.registerComponent(appName, () => App);
}

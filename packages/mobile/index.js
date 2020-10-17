/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';

import Hello from '@zono/components/Hello';
// import A from 'web'

AppRegistry.registerComponent(appName, () => Hello);

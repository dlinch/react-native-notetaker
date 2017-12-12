import { AppRegistry } from 'react-native';
// import App from './App';
import { StackNavigator, } from 'react-navigation';
import HomeScreen from './src/HomeScreen';
import ProfileScreen from './src/ProfileScreen';

const App = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});


AppRegistry.registerComponent('notetaker', () => App);

import { createStackNavigator } from 'react-navigation'

import MyStoriesScreen from '../Screens/MyStoriesScreen';
import MyStoryDetailsScreen from '../Screens/MyStoryDetailsScreen';
import ShareStoryScreen from '../Screens/ShareStoryScreen';

const StackNavigation = createStackNavigator({
  MyStoriesScreen: { screen: MyStoriesScreen },
  MyStoryDetailsScreen: { screen: MyStoryDetailsScreen },
  ShareStoryScreen: { screen: ShareStoryScreen },
},
{
  headerMode: 'none',
  initialRouteName: 'MyStoriesScreen',
});

export default StackNavigation;

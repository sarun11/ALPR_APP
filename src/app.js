import React from 'react';
import { DrawerNavigator } from 'react-navigation';
import Home from './components/Screens/Home';
import UploadImage from './components/Screens/UploadImage';
import QueryDatabase from './components/Screens/QueryDatabase';


const Router = DrawerNavigator(
  {
    Home: {
      screen: Home,
    },
    Upload_Image: {
      screen: UploadImage,
    },
    Search: {
      screen: QueryDatabase,
    },
  },
  {
    initialRouterName: 'Home',
    drawPosition: 'left',
    contentOptions: { activeTintColor: 'red', }
  }
);

export default Router;

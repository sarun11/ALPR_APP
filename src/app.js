import { DrawerNavigator } from 'react-navigation';
import Home from './components/Screens/Home';
import UploadImage from './components/Screens/UploadImage';
import aboutProject from './components/Screens/About_project';


const Router = DrawerNavigator(
  {
    Home: {
      screen: Home,
    },
    Upload_Image: {
      screen: UploadImage,
    },
    About: {
      screen: aboutProject,
    },
  },
  {
    initialRouterName: 'Home',
    drawPosition: 'left',
    contentOptions: { activeTintColor: 'red', }
  }
);

export default Router;

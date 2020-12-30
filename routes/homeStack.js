import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Login from "../Login";
import Home from "../Home";

const screens = {
  Login: {
    screen: Login,
  },

  Home: {
    screen: Home,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);

import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Login from "../screens/Login";
import Home from "../screens/Home";
import Signup from "../screens/Signup";

const screens = {
  Login: {
    screen: Login,
  },

  Home: {
    screen: Home,
  },

  Signup: {
    screen: Signup
  }
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);

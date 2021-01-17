import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Provider as PaperProvider} from 'react-native-paper';
import Login from "./screens/components/Login/Login";
import ForgotPassword from "./screens/ForgotPassword";
import {NavigationContainer} from "@react-navigation/native";
import Signup from "./screens/components/Signup/Signup";
import HomeDrawer from "./routes/homeDrawer";

const Stack = createStackNavigator();

const App = () => {
    return (
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name={'Login'} component={Login}/>
                    <Stack.Screen name={'Home'} component={HomeDrawer}/>
                    <Stack.Screen name={'Signup'} component={Signup}/>
                    <Stack.Screen name={'Forgot Password'} component={ForgotPassword}/>
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
};

export default App

import React from "react";
import Navigator from './routes/homeStack'
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
    return (
        <PaperProvider>
            <Navigator/>
        </PaperProvider>
    );
};

export default App

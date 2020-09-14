import React from 'react';
import WeatherMain from "./components/WeatherMain/WeatherMain";
import {Provider} from 'react-redux'
import {storeInstance} from "./store/store";

function App() {
    return (
        <Provider store={storeInstance}>
            <WeatherMain/>
        </Provider>);
}

export default App;

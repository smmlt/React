import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import RestaurantInfo from './components/RestaurantInfo';

const App = () => {
    return (
        <div>
            <h1>Информация о ресторане</h1>
            <RestaurantInfo
                name="Ресторан 'Чорний гусь'"
                address="проспект Ушакова, 32, Херсон, Херсонська область, Украина, 73000"
                rating={4.5}
                cuisine="бог її зна"
                image="https://lh3.googleusercontent.com/p/AF1QipN__HAgJcIypUJD8eyi-zeeTLr0RI4FzguvgA6K=s294-w294-h220-n-k-no"
            />
        </div>
    );
};

export default App;

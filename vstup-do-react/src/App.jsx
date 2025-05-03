import './App.css'

import MyLandMarks from "./components/MyLandMarks.jsx";
import MyCityInfo from "./components/MyCityInfo.jsx";

import MyFavoriteBookInfo from "./components/MyFavoriteBookInfo.jsx";

function App() {
    return (
        <div>
            Завдання 1-2
            <h1>Моє місто — Гола Пристань</h1>
            <MyCityInfo/>
            <MyLandMarks/>

            Завдання 3-4
            <MyFavoriteBookInfo/>

        </div>
    )
}

export default App

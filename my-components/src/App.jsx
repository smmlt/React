import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ByFunctionList from "./components/ByFunction/ByFunctionList.jsx";
import ByAnonimList from "./components/ByAnonim/ByAnonimList.jsx";
import ByClassList from "./components/ByClass/ByClassList.jsx";
import UsersList from "./components/FakeUsers/UsersList.jsx";
function App() {

    return (
        <>
            {/*<h1> List ByClass</h1>*/}
            {/*<ByClassList />*/}
            {/*<h1> List ByAnonim </h1>*/}
            {/*<ByAnonimList />*/}
            {/*<h1> List ByFunction </h1>*/}
            {/*<ByFunctionList />*/}


            <h1>List Users</h1>
            <UsersList/>
        </>
    )
}
//

export default App
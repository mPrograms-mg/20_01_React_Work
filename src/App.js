
import { Route, Routes } from 'react-router-dom';
import Employee from './components/Employee';
import Contact from './components/Contact';
import About from './components/About';
import Home from './components/Home';
import Header from './components/Header';

function App() {
    return (
        <>
            {/* <Header></Header> */}
            <Routes>
                {/* <Route path='/Header' element={Header}></Route> */}
                <Route path='/' element={<Home />}></Route>
                <Route path='/Home' element={<Home />}></Route>
                <Route path='/About' element={<About />}></Route>
                <Route path='/Employee' element={<Employee />} ></Route>
                <Route path='/Contact' element={<Contact />}></Route>
                <Route component={Error} />
            </Routes>
        </>
    )
}


export default App;
import { BrowserRouter, Route, Routes, Outlet } from 'react-router-dom';
import Home from '../pages/Home';
import LocalsDatosMap from '../pages/LocalsDatosMap';
import LocalsDatosBarri from '../pages/LocalsDatosBarri';
import LocalsDatosChart from '../pages/LocalsDatosChart';
import ErrPage from '../pages/ErrPage';
import Footer from '../components/Footer';

import NavBar from '../components/NavBar';

const Router = () => (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route element={<LayoutHome />}>
                <Route path="/" element={<Home />} />
                <Route path="/ranks" element={<LocalsDatosBarri />} />
                <Route path="/chart" element={<LocalsDatosChart />} />
                <Route path="/map" element={<LocalsDatosMap />} />
            </Route>
            <Route element={<Layout />}>

                <Route path="*" element={<ErrPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
)
export default Router;

const Layout = () => {
    return (
        <>
            <NavBar />
            <div className='contentGrid'>
                <Outlet />
            </div>
        </>
    )
}

const LayoutHome = () => {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}
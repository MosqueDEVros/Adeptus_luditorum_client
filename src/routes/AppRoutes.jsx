import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoutes'




const AppRoutes = () => {

    return (
        <Routes>
            <Route path='/' />
            <Route element={<PrivateRoute />}>
            </Route>
            <Route path='*' element={<h1> NOTHING BUT YOU ARE INSIDE </h1>} />
        </Routes>
    )

}
export default AppRoutes
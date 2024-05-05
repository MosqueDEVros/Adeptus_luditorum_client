import { Routes, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoutes'
import Index from '../pages/Index/Index'
import LogInPage from '../pages/AuthPage/LoginPage/LoginPage'





const AppRoutes = () => {

    return (
        <Routes>
            <Route path={'/'} element={<Index />} />
            <Route path={'/auth/LogIn'} element={<LogInPage />} />
            <Route element={<PrivateRoute />}>

            </Route>
            <Route path='*' element={<h1> NOTHING BUT YOU ARE INSIDE </h1>} />
        </Routes>
    )

}
export default AppRoutes
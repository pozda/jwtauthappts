import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import GlobalStyles from './styles/globalStyles'
import routes from './routes'
import Layout from './components/Layout/Layout'
import LoginPage from './pages/LoginPage/LoginPage'
import DashboardPage from './pages/DashboardPage/DashboardPage'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css' // third-party-library styling
import AuthenticatedRoute from './components/AuthenticatedRoute/AuthenticatedRoute'

function App() {

    return (
        <>
            <GlobalStyles />
            <Layout>
                <Switch>
                    <Route {...routes.login} component={LoginPage} />
                    <AuthenticatedRoute {...routes.dashboard} component={DashboardPage} />
                    <Redirect to={routes.login.path} />
                </Switch>
                <ToastContainer position={toast.POSITION.BOTTOM_LEFT} newestOnTop={true} />
            </Layout>
        </>
    )
}

export default App
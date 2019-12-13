import React from 'react'
import {Route, Switch} from 'react-router-dom'
import GlobalStyles from 'styles/globalStyles'
import routes from 'routes/index'
import Layout from 'components/Layout/Layout'
import LoginPage from 'pages/LoginPage/LoginPage'
import DashboardPage from 'pages/DashboardPage/DashboardPage'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css' // third-party-library styling
import AuthenticatedRoute from 'components/AuthenticatedRoute/AuthenticatedRoute'

function App() {

    return (
        <>
            <GlobalStyles />
            <Layout>
                <Switch>
                    <Route {...routes.login} component={LoginPage} />
                    <AuthenticatedRoute {...routes.dashboard} component={DashboardPage} />
                    
                </Switch>
                <ToastContainer position={toast.POSITION.BOTTOM_LEFT} newestOnTop={true} />
            </Layout>
        </>
    )
}

export default App
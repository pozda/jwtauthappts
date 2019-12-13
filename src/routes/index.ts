export interface RouteConfig {
    id: string,
    path: string,
    getPathWithParams?: Function,
    name: string,
    exact?: boolean,
    redirectTo?: string
}

const routes: {
    login: RouteConfig,
    dashboard: RouteConfig
} = {
    login: {
        id: 'loginPage',
        name: 'Login page',
        path: '/login',
        exact: true
    },
    dashboard: {
        id: 'dashboard',
        name: 'Dashboard',
        path: '/dashboard',
        exact: true
    }
}

export default routes
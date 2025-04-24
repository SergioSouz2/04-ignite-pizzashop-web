import { createBrowserRouter } from 'react-router-dom'

import { AppLayouts } from '../pages/_layouts/app'
import { AuthLayouts } from '../pages/_layouts/auth'
import { NotFound } from '../pages/404/404'
import { Dashboard } from '../pages/app/Dashboard/Dashboard'
import { Orders } from '../pages/app/Orders/Orders'
import { SignInPage } from '../pages/auth/SignInPage/SignInPage'
import { SignUpPage } from '../pages/auth/SignUpPage/SignUpPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayouts />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/orders', element: <Orders /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayouts />,
    children: [
      { path: '/sign-in', element: <SignInPage /> },
      { path: '/sign-up', element: <SignUpPage /> },
    ],
  },
])

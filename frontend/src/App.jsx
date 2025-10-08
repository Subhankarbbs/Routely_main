import React from 'react'
import { Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
 } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import HomePage from './pages/LandingPage'
import SignUp from './pages/SignUp'
import LoginE from './pages/LoginE'
import LoginPH from './pages/LoginPH'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/logine' element={<LoginE />} />
      <Route path='/loginph' element={<LoginPH />} />
    </Route>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}
export default App
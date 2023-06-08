import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUpPage from '../pages/signUpPage';
import TaskPageOne from '../pages/taskPageOne';

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<SignUpPage />} />
            <Route path='task-option' element={<TaskPageOne />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router

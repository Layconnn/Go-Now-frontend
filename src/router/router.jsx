import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUpPage from '../pages/signUpPage';
import TaskPageOne from '../pages/taskPageOne';
import Tasks from '../pages/tasks';

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<SignUpPage />} />
            <Route path='task-option' element={<TaskPageOne />} />
            <Route path='task-page' element={<Tasks />} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router

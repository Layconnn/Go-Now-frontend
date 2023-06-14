import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SignUpPage from '../pages/signUpPage';
import TaskPageOne from '../pages/taskPageOne';
import Tasks from '../pages/tasks';
import TaskCreation from '../pages/taskCreation';
import TaskCreation2 from '../pages/taskCreation2';
import TaskCreation3 from '../pages/taskCreation3';

function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<SignUpPage />} />
            <Route path='task-option' element={<TaskPageOne />} />
            <Route path='task-page' element={<Tasks />} />
            <Route path='task-creation' element={<TaskCreation/>} />
            <Route path='task-creation2' element={<TaskCreation2/>} />
            <Route path='task-creation3' element={<TaskCreation3/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router

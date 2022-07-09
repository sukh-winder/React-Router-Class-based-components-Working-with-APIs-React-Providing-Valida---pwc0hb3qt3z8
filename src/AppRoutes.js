import React from 'react';
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from "./Pages/Home"
import Index from './Pages/Index'
import NotFound from "./Pages/NotFound"

export const AppRoutes = () => {
    return (
        <>
        <Routes>
        <Route exact path="/" element={<Index/>}> </Route>
        <Route exact path="/home" element={<Home/>}></Route>
        <Route path='*' element={<NotFound />} />
        <Route render={() => <Navigate to="/" />} />
        </Routes>
        </>
    )
}


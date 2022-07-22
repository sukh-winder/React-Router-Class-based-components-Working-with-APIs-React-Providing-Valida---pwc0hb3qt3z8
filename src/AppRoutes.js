import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import {Home} from "./Pages/Home"
import {Index} from './Pages/Index'
import {NotFound} from "./Pages/NotFound"

export const AppRoutes = () => {
    return (
        <>
        <Routes>
        <Route exact path="/" element={<Index/>}> </Route>
        <Route exact path="/home" element={<Home/>}></Route>
        <Route path='*' element={<NotFound />} />
        </Routes>
        </>
    )
}

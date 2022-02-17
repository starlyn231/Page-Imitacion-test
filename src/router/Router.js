import { Route, Routes, Navigate } from "react-router-dom";
import { Posts } from "../component/post/Posts";
import { BancanetLogin } from "../view/bancanet/BancanetLogin";
import { Home } from "../view/home/Home";
//import React from 'react';

export const Router = () => {
  return <Routes>
    <Route path='/' element={<Home />} />
    <Route path='posts' element={<Posts />} />
    <Route path="bancanet" element={<BancanetLogin />} />    <Route
      path="*"
      element={<Navigate to="/" />}
    />
  </Routes>;
};

import { Route, Routes, Navigate } from "react-router-dom";
import { Map } from "../component/map/Map";
import { Posts } from "../component/post/Posts";
import { BancanetLogin } from "../view/bancanet/BancanetLogin";
import { Register } from "../view/bancanet/register/Register";
import LoginContainer from "../view/Auth/Login/Login";
import { Home } from "../view/home/Home";
import { Nosotros } from "../component/nosotros/Nosotros";
import { ReportGov } from "../component/report/ReportGov";

import { Fireinsurance } from "../component/fireinsurance/Fireinsurance";
import { PolicyLife } from "../component/polizas/PolicyLife";
//import React from 'react';

export const Router = () => {
  return <Routes>
    <Route path='/' element={<Home />} />
    <Route path='posts' element={<Posts />} />
    <Route path="bancanet" element={<BancanetLogin />} />
    <Route path="register" element={<Register />} />
    <Route path="map" element={<Map />} />
    <Route path="login" element={<LoginContainer />} />
    <Route path="nosotros" element={<Nosotros />} />
    <Route path="reportgov" element={<ReportGov />} />
    <Route path="fireinsurance" element={<Fireinsurance />} />
    <Route path="policylife" element={<PolicyLife />} />
    policylife
    <Route
      path="*"
      element={<Navigate to="/" />}
    />
  </Routes>;
};

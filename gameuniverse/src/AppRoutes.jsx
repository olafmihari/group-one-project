import { Routes, Route } from 'react-router-dom';
import React from "react";
import Home from "./Home";
import Shooter from "./Shooter"
import MMORPG from './MMORPG';
import MOBA from './MOBA';
import MMO from './MMO';
import Fighting from './Fighting';
import Strategy from './Strategy';
import PlatForms from './PlatForms';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/platforms" element={<PlatForms />} />
      <Route path="/shooter" element={<Shooter />} />
      <Route path="/MMORPG" element={<MMORPG />} />
      <Route path="/MOBA" element={<MOBA />} />
      <Route path="/MMO" element={<MMO />} />
      <Route path="/Fighting" element={<Fighting />} />
      <Route path="/strategy" element={<Strategy />} />
    </Routes>
  );
}

export default AppRoutes;



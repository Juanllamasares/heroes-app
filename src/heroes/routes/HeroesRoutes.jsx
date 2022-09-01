import React from "react";
import { Route, Routes } from "react-router-dom";
import { Navbar } from "../../ui/components/NavBar";
import { HeroByPublisherPage } from "../pages/HeroByPublisherPage";
import { HeroPage } from "../pages/HeroPage";
import { SearchPage } from "../pages/SearchPage";
import { HeroProvider } from '../context/HeroProvider'
import '../../styles.css'

export const HeroesRoutes = () => {
  return (
    <>
      <HeroProvider>
        <Navbar />

        <div className="heroList">
          <Routes>
            <Route path="/:publisher" element={<HeroByPublisherPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="hero/:heroId" element={<HeroPage />} />
          </Routes>
        </div>
      </HeroProvider>
    </>
  );
};

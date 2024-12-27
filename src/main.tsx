import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, Route, Routes } from "react-router";
import ComingSoonPage from "./pages/ComingSoonPage.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path={"/*"} element={<ComingSoonPage/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)

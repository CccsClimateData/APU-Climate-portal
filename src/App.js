import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import AirMaps from "./scenes/air/maps";
import WaterMaps from "./scenes/water/maps";
import LandMaps from "./scenes/land/maps";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
// import Air-daily-Average from "./scenes/air/air-daily-average";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import AirDailyAverage from "./scenes/airDailyAverage";
import WaterDailyAverage from "./scenes/waterDailyAverage";
import LandDailyAverage from "./scenes/landDailyAverage";
import AirQualitySummary from "./scenes/airQualitySummary";
import Resources from "./scenes/resources";
import ApiAccess from "./scenes/apiAccess";
import About from "./scenes/about";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/airmaps" element={<AirMaps />} />
              <Route path="/AirDailyAverage" element={<AirDailyAverage />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/airQualitySummaty" element={<AirQualitySummary />} />
              <Route path="/WaterMaps" element={<WaterMaps />} />
              <Route path="/LandMaps" element={<LandMaps />} />
              <Route path="/WaterDailyAverage" element={<WaterDailyAverage />} />
              <Route path="/LandDailyAverage" element={<LandDailyAverage />} />
              <Route path="/Resources" element={<Resources />} />
              <Route path="/ApiAccess" element={<ApiAccess />} />
              <Route path="/About" element={<About />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

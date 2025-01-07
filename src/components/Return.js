import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Return from "../Return"; // 遷移元のページ
import SC01 from "../SC01"; // 遷移先のページ

function AppRouter() {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Return />} />
          <Route path="/SC01" element={<SC01 />} />
        </Routes>
      </Router>
    );
  }
  
  export default AppRouter;
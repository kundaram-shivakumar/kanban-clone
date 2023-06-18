import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "layouts/admin";
import New1 from "views/admin/new1";
import New2 from "views/admin/new2";
const App = () => {
  return (
    <Routes>
      <Route path="admin/*" element={<AdminLayout />} />
      <Route
        path="admin/new1"
        element={
          <>
          <AdminLayout />
          <New1 />
          </>
        }
      />
      <Route
        path="admin/new2"
        element={
          <AdminLayout>
            <New2 />
          </AdminLayout>
        }
      />
      <Route path="/" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};

export default App;

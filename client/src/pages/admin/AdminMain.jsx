import React, { useState } from "react";
import AdminForm from "./AdminForm";
import "./admin.css";

export default function AdminMain() {
  

  return (
    <div id="admin">
      <div className="container admin-container">
        <AdminForm />
      </div>
    </div>
  );
}

"use client";
import React from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const SpaceToast: React.FC = () => {
    return (
        <div className="w-full h-2">
            <ToastContainer />
        </div>
    );
}
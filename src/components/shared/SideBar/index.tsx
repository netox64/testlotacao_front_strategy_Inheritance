"use client";

import React, { useState } from "react";
import XCircleIcon from "@heroicons/react/16/solid/XCircleIcon";
import HomeModernIcon from "@heroicons/react/16/solid/HomeModernIcon";
import Link from "next/link";

export const SideBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex">
            <div className={`fixed inset-0 bg-gray-900 bg-opacity-75 z-40 px-10 rounded-lg transform ${isOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}>
                <div className="flex justify-end p-4">
                    <XCircleIcon className="h-6 w-6 text-white cursor-pointer" onClick={toggleSidebar} />
                </div>
                <div className="flex flex-col items-center py-8">
                    <Link className="text-white py-2 px-4" href={"/manager"}>Home</Link>
                    <Link className="text-white py-2 px-4" href={"/caravanas"}>Caravanas</Link>
                    <Link className="text-white py-2 px-4" href={"/organizacao"}>Organização</Link>
                    <Link className="text-white py-2 px-4" href={"/organizacao"}>Organização</Link>
                    <Link className="text-white py-2 px-4" href={"/organizacao"}>Organização</Link>
                    <Link className="text-white py-2 px-4" href={"/organizacao"}>Organização</Link>

                </div>
            </div>

            {/* Menu Button */}
            <div className="lg:hidden p-4">
                <HomeModernIcon className="h-8 w-8 text-gray-800 cursor-pointer" onClick={toggleSidebar} />
            </div>

            {/* Main Content */}
            <div className="flex-1 p-8">
                <h1 className="text-3xl font-bold">Olá Junior</h1>
                <p className="mt-4 text-lg">Então major aqui teremos conteudo dinamico carregado de acordo com seu papel no sistema</p>
            </div>
        </div>
    );
};

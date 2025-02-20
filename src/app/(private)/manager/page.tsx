import { Card } from "@/components/atons/Card";
import { GetErrorPermission } from "@/components/shared/GetErrorPermission";
import HomeIcon from "@heroicons/react/16/solid/HomeIcon";
import React from "react";

const stats = [
    { title: "Total de Usuários", value: "1,234", color: "bg-blue-500", icon: () => <HomeIcon className="h-6 w-6" />, iconColor: "text-white", },
    { title: "Total de Vendas", value: "987", color: "bg-green-500", icon: () => <HomeIcon className="h-6 w-6" />, iconColor: "text-white", },
    { title: "Total de Caravanas", value: "12", color: "bg-red-500", icon: () => <HomeIcon className="h-6 w-6" />, iconColor: "text-white", },
    { title: "Total de Atividade", value: "56", color: "bg-yellow-500", icon: () => <HomeIcon className="h-6 w-6" />, iconColor: "text-white", },
];

export default function Manager() {
    return (
    <div className='w-full min-h-[100vh]'>
        <GetErrorPermission />
        <div className="min-h-screen flex py-4 justify-center bg-gray-100">
            <div className="space-y-6">
                <div className="text-center">
                    <div>
                        <h1 className="text-4xl font-bold mb-4">
                            Bem vindo a area de manager
                        </h1>
                        <h1 className="text-3xl font-bold tracking-tight">
                            Dashboard
                        </h1>
                        <p className="text-xl text-gray-600">
                            Comece a oraganizar suas caravas incríveis aqui!</p>
                        <p className="text-muted-foreground">
                            Bem-vindo ao seu painel de controle
                        </p>
                    </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat) => (
                        <Card key={stat.title} className="p-6 hover:shadow-lg transition-shadow duration-200">
                            <div className="flex items-center space-x-4">
                                <div className={`p-3 rounded-full ${stat.color}`} >
                                    {React.createElement(stat.icon, { className: `w-6 h-6 ${stat.iconColor}` })}
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">
                                        {stat.title}
                                    </p>
                                    <h2 className="text-2xl font-bold">{stat.value}</h2>
                                </div>
                            </div>
                        </Card>
                    ))}

                </div>
                <div className="grid gap-4 md:grid-cols-2">
                    <Card className="p-6">
                        <h3 className="text-lg font-semibold mb-4">
                            Próximas Caravanas
                        </h3>
                        <div className="space-y-4">

                            <p className="text-muted-foreground">
                                Carregando próximas caravanas...
                            </p>
                        </div>
                    </Card>
                    <Card className="p-6">
                        <h3 className="text-lg font-semibold mb-4">
                            Atividade Recente
                        </h3>
                        <div className="space-y-4">
                            <p className="text-muted-foreground">
                                Carregando atividades recentes...
                            </p>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    </div>);
}
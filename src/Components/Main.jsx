import React from 'react'
import FormOrder from './FormOrder'

 function Main() {
    return (
        <>
        <div className="flex min-h-screen flex-col bg-background">
        <main className="container mx-auto flex flex-1 flex-col items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold tracking-tight text-foreground">Formulario de pedido</h1>
                    <p className="mt-2 text-sm text-muted-foreground">Completa los siguientes datos para hacer tu pedido</p>
                </div>
                <FormOrder/>
            </div>
        </main>
    </div>
        </>
  )
}

export default Main
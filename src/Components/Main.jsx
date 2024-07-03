import React from 'react'
import FormOrder from './FormOrder'

export default function Main() {
    return (
        <>
        <div class="flex min-h-screen flex-col bg-background">
        <main class="container mx-auto flex flex-1 flex-col items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
            <div class="w-full max-w-md space-y-6">
                <div class="text-center">
                    <h1 class="text-3xl font-bold tracking-tight text-foreground">Formulario de pedido</h1>
                    <p class="mt-2 text-sm text-muted-foreground">Completa los siguientes datos para hacer tu pedido</p>
                </div>
                <FormOrder/>
            </div>
        </main>
    </div>
        </>
  )
}

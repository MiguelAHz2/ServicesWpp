import { useState } from 'react'
import FormOrder from './FormOrder'


export default function Main() {

    const [loader, setLoader] = useState(false)

    const loaderState = (newState) => {setLoader(newState)}
    return (
        <>

            <div className="flex min-h-screen flex-col bg-background">
                <main className="container mx-auto flex flex-1 flex-col items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
                    <div className="w-full max-w-md space-y-6">
                        {loader ? (
                            <div class=" mx-auto rounded-md h-20 w-20 border-4 border-t-4 border-blue-500 animate-spin"></div>) : (
                            <div>
                                <div className="text-center">
                                    <h1 className="text-3xl font-bold tracking-tight text-foreground">Formulario de pedido</h1>
                                    <p className="mt-2 text-sm text-muted-foreground">Completa los siguientes datos para hacer tu pedido</p>
                                </div>
                                <FormOrder loaderState={loaderState} />
                            </div>
                        )}
                    </div>
                </main>
            </div>
        </>
    )
}

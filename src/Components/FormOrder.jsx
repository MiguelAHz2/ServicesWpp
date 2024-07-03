import React from 'react'

function FormOrder() {
    return (
        <>
            <form class="space-y-6 rounded-lg bg-card p-6 shadow-lg">
                <div>
                    <label
                        class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-sm font-medium text-muted-foreground"
                        for="nombre"
                    >
                        Nombre
                    </label>
                    <div class="mt-1">
                        <input
                            class="h-10 border text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 block w-full rounded-md border-input bg-card px-3 py-2 text-card-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            type="text"
                            id="nombre"
                            placeholder="John Doe"
                            required
                        />
                    </div>
                </div>
                {/* END CAMPO */}
                
                <div>
                    <label
                        class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-sm font-medium text-muted-foreground"
                        for="phone"
                    >
                        Telefono
                    </label>
                    <div class="mt-1">
                        <input
                            class="h-10 border text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 block w-full rounded-md border-input bg-card px-3 py-2 text-card-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            type="tel"
                            id="telefono"
                            placeholder="300 3232342"
                            required
                        />
                    </div>
                </div>
                {/* END CAMPO */}

                <div>
                    <label
                        class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-sm font-medium text-muted-foreground"
                        for="direccion"
                    >
                        Direccion
                    </label>
                    <div class="mt-1">
                        <input
                            class="h-10 border text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 block w-full rounded-md border-input bg-card px-3 py-2 text-card-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            type="text"
                            id="direccion"
                            placeholder="Cr 21 #1 - 52"
                            required
                        />
                    </div>
                </div>
                {/* END CAMPO */}
                <div>
                    <label
                        class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-sm font-medium text-muted-foreground"
                        for="barrio"
                    >
                        Barrio
                    </label>
                    <div class="mt-1">
                        <input
                            class="h-10 border text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 block w-full rounded-md border-input bg-card px-3 py-2 text-card-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            type="text"
                            id="barrio"
                            placeholder="Novalito"
                            required
                        />
                    </div>
                </div>
                {/* END CAMPO */}

                <div>
                    <label
                        class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-sm font-medium text-muted-foreground"
                        for="pedido"
                    >
                    Detalles del pedido
                    </label>
                    <div class="mt-1">
                        <textarea
                            class="h-10 border text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 block w-full rounded-md border-input bg-card px-3 py-2 text-card-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            type="text"
                            placeholder='Escriba su detalles de su pedido'
                            required
                            id='pedido'
                        />
                    </div>
                </div>
                {/* END CAMPO */}

                <div>
                    <button
                        class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm 
                        font-medium  focus-visible:outline-none 
                        focus-visible:ring-2  hover:opacity-50 disabled:pointer-events-none 
                        disabled:opacity-50 h-10 px-4 py-2 w-full hover:bg-primary/90 bg-[#2563EB] text-white ease-out transition-all"
                        type="submit"
                    >
                        Enviar Pedido
                    </button>
                </div>
            </form>


        </>
    )
}

export default FormOrder
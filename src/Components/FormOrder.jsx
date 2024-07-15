
import { useState, useEffect } from "react"



// eslint-disable-next-line react/prop-types
function FormOrder({ loaderState }) {

    //Estados
    const [nombre, setnombre] = useState('')
    const [telefono, settelefono] = useState(0)
    const [direccion, setDirrecion] = useState('')
    const [barrio, setBarrio] = useState('')
    const [Pedido, setPedido] = useState('')
    const [button, setButton] = useState(true)

    const handleSumbit = async (e) => {
        e.preventDefault();

        //Validacion del formulario
        if (nombre === "" || telefono <= 0 || direccion === "" || barrio === "" || Pedido === "") {
            return
        }

        loaderState(true)

        const horaLocal = new Date()


        //Creacion del mensaje 
        const mensajeSend = `Pedido Realizado *${horaLocal.toLocaleDateString()}* *${horaLocal.toLocaleTimeString()}*:
        %0A
        %0ANombre: *${nombre}*
        %0ATeléfono: ${telefono}
        %0ADirección: *${direccion}*
        %0ABarrio: *${barrio}*
        %0ADetalles del pedido: %0A %09${Pedido}
        %0A
        %0A
        %0A*Realizar confirmacion al cliente del pedido enviado!*
        `;

        //Parametros del api 
        const numberPhone = import.meta.env.VITE_NUMBER_PHONE
        const apiKey = import.meta.env.VITE_API_KEY
        const url = `https://api.callmebot.com/whatsapp.php?phone=+${numberPhone}&text=${mensajeSend}&apikey=${apiKey}`

        try {

            //Solucion temporal
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                mode: 'no-cors'
            });
            console.log(response)

        } catch (error) {
            console.error('Error in fetch:', error);
        }

        loaderState(false)
    }

    //Habilitacion del formulario
    useEffect(() => {

        if (nombre === "" || telefono <= 0 || direccion === "" || barrio === "" || Pedido === "") {
            setButton(true)
        } else {
            setButton(false)
        }

    }, [nombre, telefono, direccion, barrio, Pedido])



    return (
        <>
            <form className="space-y-6 rounded-lg bg-card p-6 shadow-lg"
                onSubmit={(e) => handleSumbit(e)}
            >
                <div>
                    <label
                        className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-sm font-medium text-muted   eground"
                        htmlFor="nombre"
                    >
                        Nombre
                    </label>
                    <div className="mt-1">
                        <input
                            className="h-10 border text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted    eground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 block w-full rounded-md border-input bg-card px-3 py-2 text-card    eground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            type="text"
                            id="nombre"
                            placeholder="John Doe"
                            required
                            onChange={(e) => setnombre(e.target.value)}
                        />
                    </div>
                </div>
                {/* END CAMPO */}

                <div>
                    <label
                        className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-sm font-medium text-muted   eground"
                        htmlFor="phone"
                    >
                        Telefono
                    </label>
                    <div className="mt-1">
                        <input
                            className="h-10 border text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted    eground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 block w-full rounded-md border-input bg-card px-3 py-2 text-card    eground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            type="tel"
                            id="telefono"
                            placeholder="300 3232342"
                            required
                            onChange={(e) => settelefono(parseInt(e.target.value))}

                        />
                    </div>
                </div>
                {/* END CAMPO */}

                <div>
                    <label
                        className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-sm font-medium text-muted   eground"
                        htmlFor="direccion"
                    >
                        Direccion
                    </label>
                    <div className="mt-1">
                        <input
                            className="h-10 border text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted    eground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 block w-full rounded-md border-input bg-card px-3 py-2 text-card    eground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            type="text"
                            id="direccion"
                            placeholder="Cr 21 #1 - 52"
                            required
                            onChange={(e) => setDirrecion(e.target.value)}

                        />
                    </div>
                </div>
                {/* END CAMPO */}
                <div>
                    <label
                        className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-sm font-medium text-muted   eground"
                        htmlFor="barrio"
                    >
                        Barrio
                    </label>
                    <div className="mt-1">
                        <input
                            className="h-10 border text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted    eground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 block w-full rounded-md border-input bg-card px-3 py-2 text-card    eground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            type="text"
                            id="barrio"
                            placeholder="Novalito"
                            required
                            onChange={(e) => setBarrio(e.target.value)}

                        />
                    </div>
                </div>
                {/* END CAMPO */}

                <div>
                    <label
                        className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block text-sm font-medium text-muted   eground"
                        htmlFor="pedido"
                    >
                        Detalles del pedido
                    </label>
                    <div className="mt-1">
                        <textarea
                            className="h-10 border text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted    eground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 block w-full rounded-md border-input bg-card px-3 py-2 text-card    eground shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                            type="text"
                            placeholder='Escriba su detalles de su pedido'
                            required
                            id='pedido'
                            onChange={(e) => setPedido(e.target.value)}

                        />
                    </div>
                </div>
                {/* END CAMPO */}

                <div>
                    <button
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm 
                            font-medium  focus-visible:outline-none 
                            focus-visible:ring-2  hover:opacity-50 disabled:pointer-events-none 
                            disabled:opacity-50 h-10 px-4 py-2 w-full hover:bg-primary/90 bg-[#2563EB] text-white ease-out transition-all"
                        type="submit"
                        disabled={button}
                    >
                        Enviar Pedido
                    </button>
                </div>
            </form >



        </>
    )
}

export default FormOrder
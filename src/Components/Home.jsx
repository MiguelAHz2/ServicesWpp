import { Link } from 'react-router-dom'


function Home() {
  return (
      <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="text-center">
        <img src="/logotipo.png" alt="Logo" className="mx-auto mb-2" />
        <h1 className="text-2xl font-bold mb-2">Pedidos</h1>
        <p className="text-gray-600 mb-6">Realiza tu pedido</p>
        <Link to="/main"><button className="bg-black text-white px-4 py-2 rounded">Toma una orden</button></Link>
    </div>
</div>      
    </>

  )
}

export default Home

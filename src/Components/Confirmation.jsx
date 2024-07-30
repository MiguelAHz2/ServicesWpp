import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Confirmation({ orderStatus }) {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate('/')
  }, 2000);
  return (
    <>
      {orderStatus ? (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="text-center">
            <img
              src="/ok-svgrepo-com.svg"
              alt="Confirmacion"
              className="mx-auto mb-2 size-96"
            />
            <h1 className="text-2xl font-bold mb-2">Emprendimiento S.A</h1>
            <p className="text-gray-600 mb-6">Pedido Realizado!</p>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="text-center">
            <img
              src="/error-svgrepo-com.svg"
              alt="ErrorPedido"
              className="mx-auto mb-2 size-96"
            />
            <h1 className="text-2xl font-bold mb-2">Emprendimiento S.A</h1>
            <p className="text-gray-600 mb-6">Hubo un error con tu pedido</p>
            <button
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm 
                            font-medium  focus-visible:outline-none 
                            focus-visible:ring-2  hover:opacity-50 disabled:pointer-events-none 
                            disabled:opacity-50 h-10 px-4 py-2 w-full hover:bg-primary/90 bg-[#2563EB] text-white ease-out transition-all"
              onClick={() => navigate("/main")}
            >
              Tomar pedido nuevamente
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Confirmation;

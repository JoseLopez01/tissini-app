export default function Login() {
  return (
    <div className="h-screen grid grid-cols-4 gap-1">
      <div className="col-span-4 bg-login-background bg-cover relative bg-no-repeat">
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 p-2">
          <div className="bg-logo-png h-56 w-3/5 bg-contain bg-no-repeat mx-auto"></div>
          <div className="font-medium text-center w-3/4 text-white mx-auto">
            Ingresa el número de teléfono de tu asesora independiente.
          </div>
          <form className="mt-1">
            <input
              type="text"
              className="outline-none border w-full p-3 rounded border-white bg-transparent placeholder-white font-medium text-white"
              placeholder="Teléfono"
            />
          </form>
        </div>
      </div>
    </div>
  );
}

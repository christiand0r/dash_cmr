import { useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center gap-6 h-full">
      <h1 className="font-bold text-center text-4xl text-gray-700">
        Uups.. parece que algo salio mal
      </h1>
      <p className="text-center text-sm max-w-lg">
        {error.statusText || error.message}
      </p>
    </div>
  );
}
export default Error;

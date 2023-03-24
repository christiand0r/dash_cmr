import { useNavigate, useNavigation } from "react-router-dom";

function BackButton({ path }) {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(path || -1)}
      className="font-semibold rounded-lg px-4 py-1 text-white bg-teal-700"
    >
      {"< Volver"}
    </button>
  );
}
export default BackButton;

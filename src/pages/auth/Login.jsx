import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await login(email, password);
      navigate("/");
    } catch (error) {
      alert(error.message || "Échec de la connexion");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Connectez-vous</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            placeholder="Adresse mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-gray-400"
        >
          {isSubmitting ? "Connexion en cours..." : "Se connecter"}
        </button>
      </form>

      <div className="mt-4 text-center">
        <Link to="/createAccount" className="text-blue-500 hover:underline">
          Pas de compte ? Créer un compte
        </Link>
      </div>
    </div>
  );
}

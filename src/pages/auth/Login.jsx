import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/auth/AuthContext";
import { FaRegEnvelope } from "react-icons/fa6";
import { IoKeyOutline } from "react-icons/io5";

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
    <div>
      <form onSubmit={handleSubmit}>
        <fieldset className="fieldset w-lg bg-transparent border border-neutral-950 p-4 rounded-box">
          <legend className="fieldset-legend text-2xl font-bold px-2">
            Connectez vous
          </legend>
          {/* EMAIL */}
          <label className="input input-lg validator w-full bg-neutral-900">
            <FaRegEnvelope className="opacity-50" />
            <input
              type="email"
              placeholder="mail@site.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <div className="validator-hint hidden">Entrez un email valide</div>

          {/* PASSWORD */}
          <label className="input input-lg validator bg-neutral-900 w-full">
            <IoKeyOutline className="opacity-50" />
            <input
              type="password"
              required
              placeholder="Mot de passe"
              minLength="8"
              title="Must be more than 8 characters"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <p className="validator-hint hidden">
            Doit faire plus de 8 caractères
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-lg btn-soft w-full bg-neutral-900 hover:bg-neutral-950"
          >
            {isSubmitting ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Se connecter"
            )}
          </button>
        </fieldset>
      </form>

      <div className="mt-4 text-center">
        <Link to="/createAccount" className="text-blue-500 hover:underline">
          Pas de compte ? Créer un compte
        </Link>
      </div>
    </div>
  );
}

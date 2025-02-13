import { Link } from "react-router-dom";
import { useAuth } from "../../../context/auth/AuthContext";
import { FaRegEnvelope } from "react-icons/fa6";
import { IoKeyOutline } from "react-icons/io5";

export default function Login() {
  const { login, isLoading, error, email, setEmail, password, setPassword } =
    useAuth();

  return (
    <div className="flex flex-col h-screen justify-center items-center">
      <form onSubmit={login}>
        <fieldset className="fieldset w-lg border p-4 rounded-box">
          <legend className="fieldset-legend text-2xl font-bold px-2">
            Connectez vous
          </legend>
          {/* EMAIL */}
          <label className="input input-lg validator w-full -900">
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
          <label className="input input-lg validator w-full">
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
            disabled={isLoading}
            className="btn btn-lg btn-soft w-full"
          >
            {isLoading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Se connecter"
            )}
          </button>
        </fieldset>
      </form>

      {error && <p className="alert alert-error my-4">{error}</p>}

      <div className="mt-4 text-center">
        <Link to="/register">Pas de compte ? Créer un compte</Link>
      </div>
    </div>
  );
}

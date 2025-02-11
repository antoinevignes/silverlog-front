import { Link } from "react-router-dom";
import { IoKeyOutline } from "react-icons/io5";
import { FaRegEnvelope, FaRegUser } from "react-icons/fa6";
import { useAuth } from "../../../context/auth/AuthContext";

export default function Register() {
  const { register, formData, setFormData, isLoading, error } = useAuth();
  return (
    <div>
      <form onSubmit={register}>
        <fieldset className="fieldset w-lg bg-transparent border border-neutral-950 p-4 rounded-box">
          <legend className="fieldset-legend text-2xl font-bold px-2">
            Rejoignez nous !
          </legend>

          {/* USERNAME */}
          <label className="input input-lg validator w-full bg-[#181825]">
            <FaRegUser className="opacity-50" />
            <input
              type="text"
              required
              placeholder="Pseudo"
              pattern="[A-Za-z][A-Za-z0-9\-]*"
              minLength="3"
              maxLength="30"
              title="Only letters, numbers or dash"
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, username: e.target.value })
              }
            />
          </label>
          <p className="validator-hint hidden">
            Doit faire entre 3 et 30 caractères
            <br />
            Contenant lettres chiffres ou tiret
          </p>

          {/* EMAIL */}
          <label className="input input-lg validator w-full bg-[#181825]">
            <FaRegEnvelope className="opacity-50" />
            <input
              type="email"
              placeholder="mail@site.com"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </label>
          <div className="validator-hint hidden">Entrez un email valide</div>

          {/* PASSWORD */}
          <label className="input input-lg validator bg-[#181825] w-full">
            <IoKeyOutline className="opacity-50" />
            <input
              type="password"
              required
              placeholder="Mot de passe"
              minLength="8"
              title="Must be more than 8 characters"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </label>
          <p className="validator-hint hidden">
            Doit faire plus de 8 caractères
          </p>

          <button
            type="submit"
            disabled={isLoading}
            className="btn btn-lg btn-soft w-full bg-[#181825] hover:bg-[#11111b]"
          >
            {isLoading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Créer un compte"
            )}
          </button>
        </fieldset>
      </form>

      {error && <p className="alert alert-error my-4">{error}</p>}

      <div className="mt-4 text-center">
        <Link to="/login">Déjà un compte ? Connectez vous.</Link>
      </div>
    </div>
  );
}

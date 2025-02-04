import { useState } from "react";
import { Link } from "react-router-dom";
import { apiFetch } from "../../../api/api";
import { IoKeyOutline } from "react-icons/io5";
import { FaRegEnvelope, FaRegUser } from "react-icons/fa6";

export default function Register() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = await apiFetch("/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      window.location = "/";
    } catch (error) {
      alert(error.message || "Echec de la création du compte.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto p-4 max-w-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Rejoignez nous !</h1>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <label className="input input-lg validator w-full bg-neutral-900">
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
        <label className="input input-lg validator w-full bg-neutral-900">
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
        <label className="input input-lg validator bg-neutral-900 w-full">
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
        <p className="validator-hint hidden">Doit faire plus de 8 caractères</p>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-lg btn-soft w-full bg-neutral-900 hover:bg-neutral-950"
        >
          {isSubmitting ? (
            <span className="loading loading-spinner"></span>
          ) : (
            "Créer un compte"
          )}
        </button>
      </form>

      <div className="mt-4 text-center">
        <Link to="/login">Déjà un compte ? Connectez vous.</Link>
      </div>
    </div>
  );
}

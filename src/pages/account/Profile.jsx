import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useProfile } from "../../../context/user/ProfileContext";
import { useToast } from "../../../context/Toaster";

export default function ProfilePage() {
  const {
    username,
    setUsername,
    email,
    setEmail,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    bio,
    setBio,
    saveNewProfile,
    error,
    isLoading,
  } = useProfile();
  const { addToast } = useToast();

  return (
    <div className="flex flex-col gap-4">
      <Link
        to="/"
        className="absolute top-10 left-10 z-10 sm:flex gap-2 items-center hidden text-[#cdd6f4]"
      >
        <FaArrowLeft />
        Retour
      </Link>

      <h2 className="text-2xl font-bold">Votre profil</h2>

      <div className="divider font-bold">Votre photo de profil</div>

      <div className="flex items-center gap-4">
        <div className="avatar avatar-placeholder">
          <div className="bg-[#181825] text-neutral-content w-20 rounded-full">
            <span className="text-3xl">
              {username.substring(0, 1).toUpperCase()}
            </span>
          </div>
        </div>
        <input type="file" className="file-input" />
      </div>

      <div className="divider font-bold">Vos informations personnelles</div>

      <div className="flex gap-2">
        <input
          type="text"
          className="input bg-transparent"
          placeholder="Prénom"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          className="input bg-transparent"
          placeholder="Nom"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <input
        type="email"
        className="input bg-transparent w-full"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        className="input bg-transparent w-full"
        placeholder="Pseudo"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <textarea
        className="textarea w-full bg-transparent"
        placeholder="Votre bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      ></textarea>

      {error && <p className="alert alert-error">{error}</p>}

      <button
        className="btn btn-soft bg-[#181825] hover:bg-[#11111b]"
        onClick={() => {
          saveNewProfile();
          if (!error) {
            addToast("Profil enregistré", "success");
          }
        }}
        disabled={isLoading}
      >
        {isLoading ? (
          <span className="loading loading-spinner"></span>
        ) : (
          "Enregistrer"
        )}
      </button>
    </div>
  );
}

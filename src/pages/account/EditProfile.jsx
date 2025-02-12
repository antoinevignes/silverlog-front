import { useProfile } from "../../../context/user/ProfileContext";
import { useToast } from "../../../context/Toaster";

export default function EditProfile() {
  const {
    username,
    setUsername,
    email,
    setEmail,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    location,
    setLocation,
    bio,
    setBio,
    saveNewProfile,
    error,
    isLoading,
  } = useProfile();
  const { addToast } = useToast();

  return (
    <div className="flex flex-col gap-4 w-[60vw]">
      <h2 className="text-2xl font-bold">Votre profil</h2>

      <div className="divider font-bold">Votre photo de profil</div>

      <div className="flex items-center justify-center gap-4">
        <div className="avatar avatar-placeholder">
          <div className="bg-base-300 text-neutral-content w-20 rounded-full">
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
          className="input w-full"
          placeholder="Prénom"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          className="input w-full"
          placeholder="Nom"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>

      <input
        type="email"
        className="input w-full"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="text"
        className="input w-full"
        placeholder="Pseudo"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        className="input w-full"
        placeholder="Localisation"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />

      <textarea
        className="textarea w-full"
        placeholder="Votre bio"
        value={bio}
        onChange={(e) => setBio(e.target.value)}
      ></textarea>

      {error && <p className="alert alert-error">{error}</p>}

      <button
        className="btn btn-soft"
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

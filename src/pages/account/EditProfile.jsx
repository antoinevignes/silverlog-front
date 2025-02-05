export default function EditProfile() {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Votre profil</h2>

      <div className="divider font-bold">Votre photo de profil</div>

      <div className="flex items-center gap-4">
        <div className="avatar avatar-placeholder">
          <div className="bg-neutral text-neutral-content w-20 rounded-full">
            <span className="text-3xl">
              {user?.username.substring(0, 1).toUpperCase()}
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
        />
        <input type="text" className="input bg-transparent" placeholder="Nom" />
      </div>

      <textarea
        className="textarea w-full bg-transparent"
        placeholder="Votre bio"
      ></textarea>

      <div className="divider font-bold">Vos information de compte</div>

      <div className="flex flex-col items-center gap-2">
        <input
          type="email"
          className="input bg-transparent w-full"
          placeholder="Email"
        />
        <button className="btn btn-soft w-full bg-neutral-900 hover:bg-neutral-950">
          Modifier mon mot de passe
        </button>
      </div>
    </div>
  );
}

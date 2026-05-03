import { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError("Minden mező kitöltése kötelező.");
      return;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold text-center text-blue-700 mb-6">
          Bejelentkezés
        </h2>

        {error && (
          <div className="mb-4 p-3 text-sm text-red-700 bg-red-100 border border-red-300 rounded">
            {error}
          </div>
        )}

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-1">
            E-mail
          </label>
          <input
            id="email"
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 mb-1">
            Jelszó
          </label>
          <input
            id="password"
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded"
        >
          Bejelentkezés
        </button>
      </form>
    </div>
  );
}

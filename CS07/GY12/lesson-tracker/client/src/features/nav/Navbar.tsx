export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-3 flex justify-between items-center">
      <div className="flex gap-4 items-center">
        <a className="hover:underline">Diákok</a>
        <a className="hover:underline">Új diák hozzáadása</a>
      </div>
      <button className="bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-100">
        Kijelentkezés
      </button>
    </nav>
  );
}

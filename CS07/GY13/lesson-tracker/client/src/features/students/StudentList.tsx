export default function StudentList() {
  //   if (isLoading) return <p className="p-4">Betöltés...</p>;
  //   if (error)
  //     return <p className="p-4 text-red-600">Hiba a diákok lekérésekor.</p>;
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Diákok</h2>
      <ul className="space-y-2">
        <li className="border p-3 rounded shadow">
          <p>NÉV</p>
          <p className="text-sm text-gray-600">TANTÁRGY</p>
          <a className="text-blue-500 hover:underline text-sm">Részletek</a>
        </li>
      </ul>
    </div>
  );
}

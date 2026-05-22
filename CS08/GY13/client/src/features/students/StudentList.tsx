import { useSelector } from "react-redux";
import { useGetMyStudentQuery } from "../api/api";
import { selectToken } from "../auth/authSlice";

export default function StudentList() {
  const token = useSelector(selectToken);
  const { data, isLoading, error } = useGetMyStudentQuery(token!);

  if (isLoading) {
    return <p className="p-4">Betöltés...</p>;
  }

  if (error) {
    return <p className="p-4 text-red-600">Hiba a diákok lekérésekor.</p>;
  }

  console.log(data);

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Diákok</h2>
      <ul className="space-y-2">
        {data?.map((student) => (
          <li key={student.id} className="border p-3 rounded shadow">
            <p>{student.name}</p>
            <p className="text-sm text-gray-600">{student.subject}</p>
            <a className="text-blue-500 hover:underline text-sm">Részletek</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

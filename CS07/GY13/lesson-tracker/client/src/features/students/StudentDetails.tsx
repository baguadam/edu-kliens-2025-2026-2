export default function StudentDetails() {
  // const { id } = useParams();

  //   if (isLoading) return <p className="p-4">Betöltés...</p>;
  //   if (error)
  //     return <p className="p-4 text-red-600">Hiba a diák betöltésekor.</p>;

  return (
    <div className="p-4 max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Diák adatai</h2>
      <p>
        <strong>Név:</strong> NÉV
      </p>
      <p>
        <strong>Tantárgy:</strong> TANTÁRGY
      </p>
      <p>
        <strong>Óradíj:</strong> ÁR Ft
      </p>

      <h3 className="text-xl mt-6 mb-2">Órák</h3>
      <ul className="list-disc ml-6">
        {/* {lessonData?.lessons?.map((lesson) => (
          <li key={lesson.id}>
            {new Date(lesson.date).toLocaleDateString()} – {lesson.topic}
          </li>
        )) || <p>Nincsenek elérhető órák.</p>} */}
      </ul>
    </div>
  );
}

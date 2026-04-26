import { useState } from "react";

const BookForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  return (
    <form className="flex flex-col gap-4 p-4 bg-white rounded-xl shadow">
      <input
        type="text"
        placeholder="Könyv címe"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="p-2 border rounded"
      />
      <input
        type="text"
        placeholder="Könyv szerzője"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="p-2 border rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Könyv hozzáadása
      </button>
    </form>
  );
};

export default BookForm;

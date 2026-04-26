const BookList = () => {
  const isRead = true;
  return (
    <div className="mt-6 space-y-4">
      <div className="flex justify-between items-center p-4 bg-gray-100 rounded shadow">
        <div>
          <h3 className="font-semibold text-lg">
            *KÖNYV CÍME* -{" "}
            <span className="text-sm text-gray-500">*KÖNYV SZERZŐJE*</span>
          </h3>
          <p className="text-sm">
            Státusz:{" "}
            <span className={isRead ? "text-green-600" : "text-yellow-600"}>
              {isRead ? "Elolvasva" : "Olvasásra vár"}
            </span>
          </p>
        </div>
        <div className="flex gap-2">
          <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600">
            Státusz változtatása
          </button>
          <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
            Könyv törlése
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookList;

const Filters = () => {
  const options = ["all", "read", "unread"];
  const currentStatus = false;

  return (
    <div className="flex gap-4 mt-6">
      {options.map((status) => (
        <button
          key={status}
          className={`px-4 py-2 rounded ${
            currentStatus === status
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          {status[0].toUpperCase() + status.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default Filters;

import { FaSearch } from "react-icons/fa";

function Searchbar() {
  return (
    <div className="flex justify-center py-4">
      <div className="flex items-center border rounded-full shadow-md px-2 py-2 gap-2 w-full max-w-2xl">
        
        <div className="flex flex-col px-4 border-r">
          <span className="text-xs font-bold">Where</span>
          <input
            type="text"
            placeholder="Search destinations"
            className="text-sm text-gray-500 outline-none bg-transparent"
          />
        </div>

        <div className="flex flex-col px-4 border-r">
          <span className="text-xs font-bold">When</span>
          <input
            type="text"
            placeholder="Add dates"
            className="text-sm text-gray-500 outline-none bg-transparent"
          />
        </div>

        <div className="flex flex-col px-4">
          <span className="text-xs font-bold">Who</span>
          <input
            type="text"
            placeholder="Add guests"
            className="text-sm text-gray-500 outline-none bg-transparent"
          />
        </div>

        <button className="bg-red-500 text-white rounded-full p-3 ml-2">
          <FaSearch size={16} />
        </button>

      </div>
    </div>
  );
}

export default Searchbar;
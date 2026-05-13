import { BiSearch, BiCaretDown, BiCheck } from "react-icons/bi";
import { useState } from "react";

const DropDown = ({
  toggle,
  sortBy,
  onSortByChange,
  orderBy,
  onOrderByChange,
}) => {
  if (!toggle) {
    return null;
  }
  return (
    <div
      className="origin-top-right absolute right-0 mt-2 w-56
      rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
    >
      <div
        className="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div
          onClick={() => onSortByChange("petName")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem"
        >
          Pet Name {sortBy === "petName" && <BiCheck />}
        </div>
        <div
          onClick={() => onSortByChange("ownerName")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem"
        >
          Owner Name {sortBy === "ownerName" && <BiCheck />}
        </div>
        <div
          onClick={() => onSortByChange("aptDate")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem"
        >
          Date {sortBy === "aptDate" && <BiCheck />}
        </div>
        <div
          onClick={() => onOrderByChange("asc")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer border-gray-1 border-t-2"
          role="menuitem"
        >
          Asc {orderBy === "asc" && <BiCheck />}
        </div>
        <div
          onClick={() => onOrderByChange("desc")}
          className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
          role="menuitem"
        >
          Desc {orderBy === "desc" && <BiCheck />}
        </div>
      </div>
    </div>
  );
};

const Search = ({
  query,
  onQueryChange,
  sortBy,
  onSortByChange,
  orderBy,
  onOrderByChange,
}) => {
  let [toggleSort, setToggleSort] = useState(false);
  return (
    // max-w-2xl ile uzunluğu kısalttık, mx-auto ile ortaladık
    <div className="py-5 max-w-2xl mx-auto">
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          {/* İkonu biraz büyüttük */}
          <BiSearch className="text-gray-400 text-lg" />
          <label htmlFor="query" className="sr-only" />
        </div>
        <input
          type="text"
          name="query"
          id="query"
          value={query}
          onChange={(event) => {
            onQueryChange(event.target.value);
          }}
          // py-4 ile yüksekliği artırdık, text-lg ile yazıyı büyüttük
          className="pl-10 py-4 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full text-lg border-gray-300 border shadow-sm"
          placeholder="Search"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <div>
            <button
              type="button"
              onClick={() => {
                setToggleSort(!toggleSort);
              }}
              // py-4 yaparak input yüksekliğiyle tam eşitledik
              className="justify-center px-6 py-4 bg-blue-400 border-2 border-blue-400 text-base text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 flex items-center rounded-r-md transition-colors"
              id="options-menu"
              aria-haspopup="true"
              aria-expanded="true"
            >
              Sort By <BiCaretDown className="ml-2" />
            </button>
            <DropDown
              toggle={toggleSort}
              sortBy={sortBy}
              onSortByChange={(mySort) => onSortByChange(mySort)}
              orderBy={orderBy}
              onOrderByChange={(myOrder) => onOrderByChange(myOrder)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;

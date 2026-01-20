import { useState } from "react";
export function Searchbar({ onSearch }: { onSearch: (query: string) => void }) {
  const [query, setQuery] = useState("");
  return (
    <div className="flex justify-center gap-2 py-4 bg-base-200 sticky top-0 z-10">
      <input
        className="input input-bordered w-60"
        placeholder="Search by ingredient/country..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button className="btn btn-success" onClick={() => onSearch(query)}>
        Find recipes
      </button>
    </div>
  );
}

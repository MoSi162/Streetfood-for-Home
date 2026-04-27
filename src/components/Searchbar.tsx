import React from 'react';

type Props = {
  search: string;
  setSearch: (val: string) => void;
  onSubmit?: (e: React.FormEvent) => void;
};

const SearchBar: React.FC<Props> = ({ search, setSearch }) => (
  <input
    type="text"
    value={search}
    onChange={e => setSearch(e.target.value)}
    placeholder="Search by ingredients, dish name, or cuisine..."
    className="search-input"
  />
);

export default SearchBar;

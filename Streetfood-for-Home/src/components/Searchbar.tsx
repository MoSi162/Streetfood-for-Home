
import React from 'react';

type Props = {
  search: string;
  setSearch: (val: string) => void;
};

const SearchBar: React.FC<Props> = ({ search, setSearch }) => (
  <input
    type="text"
    value={search}
    onChange={e => setSearch(e.target.value)}
    placeholder="Search recipes…"
    style={{ padding: 8, width: 300, marginBottom: 24 }}
  />
);

export default SearchBar;

import { useRef } from 'react';
import { SearchFields } from '../../App';

interface Props {
  newsSearch: (searchFields: SearchFields) => void;
  handleChange: (inputValue: React.ChangeEvent<HTMLInputElement>) => void;
  searchFields: SearchFields;
}

export default function Search({
  newsSearch,
  handleChange,
  searchFields,
}: Props) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    newsSearch(searchFields);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="q"
        placeholder="Search"
        className="mr-4 h-10 self-center w-[200px] rounded pl-1.5 text-sm text-[#000] bg-[#f9f7f1] border-[#c0c0c0] border-solid border-[1px]"
        onChange={handleChange}
        required
      />
      <button type="submit" className="bg-[#2f2f2f] p-2 text-white">
        Search
      </button>
    </form>
  );
}

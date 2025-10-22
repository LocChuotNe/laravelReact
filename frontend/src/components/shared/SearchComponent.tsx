import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
export default function SearchComponent({ data, searchFields = [], onFiltered }) {
  const [searchTerm, setSearchTerm] = useState('');

  const normalize = (str) =>
  str.normalize("NFD").replace(/[[\u0300-\u036f]]/g, "").toLowerCase();

    useEffect(() => {
        const timeout = setTimeout(() => {
            const filtered = data.filter((item) =>
                searchFields.some((field) => {
                const value = item[field];
                return typeof value === 'string' && 
                normalize(value).includes(normalize(searchTerm));
                })
            );
            onFiltered(filtered);
            }, 300);
        
            return () => 
                clearTimeout(timeout);
    }, [searchTerm, data, searchFields]);

  return (
    <div className="w-56 relative text-slate-500">
      <input
        type="text"
        className="form-control w-56 box pr-10"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Search className="w-4 h-4 absolute my-auto inset-y-0 mr-3 right-0" />
    </div>
  );
}

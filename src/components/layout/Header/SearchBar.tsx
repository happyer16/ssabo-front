import { useState, useCallback } from 'react';
import styled from '@emotion/styled';
import { Search } from 'lucide-react';
import { useDebounce } from '@/src/hooks/useDebounce';

interface SearchBarProps {
  onSearch: (keyword: string) => void;
  placeholder?: string;
}

export default function SearchBar({ onSearch, placeholder }: SearchBarProps) {
  const [keyword, setKeyword] = useState('');
  const debouncedSearch = useDebounce(onSearch, 300);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setKeyword(value);
    debouncedSearch(value);
  }, [debouncedSearch]);

  return (
    <Container>
      <SearchIcon>
        <Search className="w-5 h-5 text-gray-400" />
      </SearchIcon>
      <Input
        type="text"
        value={keyword}
        onChange={handleChange}
        placeholder={placeholder || "시술 정보, 후기를 검색해보세요"}
      />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 24rem;
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem 1rem 0.5rem 2.5rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.75rem;
  background-color: #f9fafb;
  font-size: 0.875rem;
  transition: all 0.2s;

  &:focus {
    outline: none;
    border-color: #a855f7;
    box-shadow: 0 0 0 2px rgba(168, 85, 247, 0.1);
  }
`;

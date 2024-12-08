import styled from '@emotion/styled';
import { Bell } from 'lucide-react';

interface NotificationProps {
  count?: number;
  onClick?: () => void;
}

export default function Notification({ count, onClick }: NotificationProps) {
  return (
    <Button onClick={onClick}>
      <Bell className="w-6 h-6 text-gray-600" />
      {count !== undefined && count > 0 && (
        <Badge>{count > 99 ? '99+' : count}</Badge>
      )}
    </Button>
  );
}

const Button = styled.button`
  position: relative;
  padding: 0.5rem;
  border-radius: 0.375rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f3f4f6;
  }
`;

const Badge = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  min-width: 1.25rem;
  height: 1.25rem;
  padding: 0 0.375rem;
  background-color: #e11d48;
  color: white;
  font-size: 0.75rem;
  font-weight: 500;
  border-radius: 9999px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

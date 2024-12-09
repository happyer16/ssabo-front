import React, { useState } from 'react';
import styled from '@emotion/styled';
import { Button } from '../../ui/button';

interface CommentFormProps {
  onSubmit: (content: string) => void;
}

const FormWrapper = styled.div`
  background-color: #f9fafb;
  padding: 1.5rem;
  border-radius: 0.5rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  min-height: 120px;
  margin-bottom: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem;
  background-color: white;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

const SubmitWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CommentForm = ({ onSubmit }: CommentFormProps) => {
  const [content, setContent] = useState('');

  const handleSubmit = () => {
    if (content.trim()) {
      onSubmit(content);
      setContent('');
    }
  };

  return (
    <FormWrapper>
      <TextArea
        placeholder="댓글을 입력하세요..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <SubmitWrapper>
        <Button onClick={handleSubmit}>댓글 작성</Button>
      </SubmitWrapper>
    </FormWrapper>
  );
};

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import styled from '@emotion/styled'

export interface ButtonProps {
  variant?: 'default' | 'outline' | 'ghost'
  size?: 'sm' | 'default' | 'lg'
  onClick?: () => void
  children: React.ReactNode
  className?: string
}

const StyledButton = styled.button<ButtonProps>`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 border-radius: 0.375rem;
 font-weight: 500;
 transition: all 0.2s;
 cursor: pointer;

 /* Size variants */
 ${props => props.size === 'sm' && `
   height: 2rem;
   padding: 0 0.75rem;
   font-size: 0.875rem;
 `}

 ${props => props.size === 'default' && `
   height: 2.5rem;
   padding: 0 1rem;
   font-size: 0.875rem;
 `}

 ${props => props.size === 'lg' && `
   height: 2.75rem;
   padding: 0 1.5rem;
   font-size: 0.875rem;
 `}

 /* Style variants */
 ${props => props.variant === 'default' && `
   background-color: #111827;
   color: white;
   &:hover {
     background-color: #374151;
   }
 `}

 ${props => props.variant === 'outline' && `
   background-color: transparent;
   border: 1px solid #d1d5db;
   color: inherit;
   &:hover {
     background-color: #f3f4f6;
   }
 `}

 ${props => props.variant === 'ghost' && `
   background-color: transparent;
   &:hover {
     background-color: #f3f4f6;
   }
 `}
`;

export const Button = ({
                         variant = 'default',
                         size = 'default',
                         className,
                         ...props
                       }: ButtonProps) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      className={className}
      {...props}
    />
  )
}

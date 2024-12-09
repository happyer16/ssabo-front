import * as React from "react"
import styled from '@emotion/styled'

export interface AvatarProps {
  src?: string
  alt?: string
  children?: React.ReactNode
  className?: string
}

const AvatarContainer = styled.div`
 position: relative;
 display: flex;
 align-items: center;
 justify-content: center;
 overflow: hidden;
 width: 2.5rem;
 height: 2.5rem;
 border-radius: 9999px;
 background-color: #f3f4f6;
`;

const AvatarImg = styled.img`
 width: 100%;
 height: 100%;
 object-fit: cover;
`;

const AvatarFallbackContainer = styled.div`
 display: flex;
 align-items: center;
 justify-content: center;
 width: 100%;
 height: 100%;
 background-color: #f3f4f6;
 color: #6b7280;
 font-size: 0.875rem;
 font-weight: 500;
`;

export const Avatar = ({ className, ...props }: AvatarProps) => {
  return <AvatarContainer className={className} {...props} />
}

export const AvatarImage = React.forwardRef<HTMLImageElement, AvatarProps>(
  ({ src, alt, className, ...props }, ref) => {
    return <AvatarImg ref={ref} src={src} alt={alt} className={className} {...props} />
  }
)

export const AvatarFallback = ({
                                 children,
                                 className,
                                 ...props
                               }: AvatarProps) => {
  return (
    <AvatarFallbackContainer className={className} {...props}>
      {children}
    </AvatarFallbackContainer>
  )
}

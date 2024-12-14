import {type ComponentPropsWithoutRef, type ElementType, type ForwardedRef, forwardRef,} from 'react';

import {css} from '@emotion/react';
import styled from '@emotion/styled';

type Size = 32 | 28 | 26 | 24 | 22 | 20 | 18 | 16 | 14 | 12 | number;
type Weight = 500 | 700 | number;
type LineHeight = 1.25 | 1.5 | number | string;
type WordBreak = 'break-all' | 'keep-all' | 'normal';
type WhiteSpace =
  | '-moz-pre-wrap'
  | 'break-spaces'
  | 'normal'
  | 'nowrap'
  | 'pre'
  | 'pre-line'
  | 'pre-wrap';

interface _TypoProps {
  size?: Size | [Size, Size];
  weight?: Weight | [Weight, Weight];
  lineHeight?: LineHeight | [LineHeight, LineHeight];
  color?: string;
  align?:
    | 'center'
    | 'end'
    | 'justify'
    | 'left'
    | 'match-parent'
    | 'right'
    | 'start';
  lineThrough?: boolean;
  wordBreak?: WordBreak;
  whiteSpace?: WhiteSpace;
}

const _Typo = styled.span<_TypoProps>`
  ${(p) => {
    if (typeof p.size === 'undefined') {
      return css`
        font-size: inherit;
      `;
    }

    if (typeof p.size === 'number') {
      return css`
        font-size: ${p.size}px;
      `;
    }

    const [mobile, desktop] = p.size;
    return css`
      font-size: ${mobile}px;
    `;
  }};

  ${(p) => {
    if (typeof p.weight === 'undefined') {
      return css`
        font-weight: inherit;
      `;
    }

    if (typeof p.weight === 'number') {
      return css`
        font-weight: ${p.weight};
      `;
    }

    const [mobile, desktop] = p.weight;
    return css`
      font-weight: ${mobile};
    `;
  }};

  ${(p) => {
    if (typeof p.lineHeight === 'undefined') {
      return css`
        line-height: inherit;
      `;
    }

    if (typeof p.lineHeight === 'number') {
      return css`
        line-height: ${p.lineHeight};
      `;
    }

    return css`
      line-height: ${p.lineHeight};
    `;
  }};

  ${(p) => {
    if (p.color) {
      return css`
        color: ${p.color};
      `;
    }
  }}

  ${(p) => {
    if (p.align) {
      return css`
        text-align: ${p.align};
      `;
    }
  }}

  ${(p) => {
    if (p.lineThrough) {
      return css`
        text-decoration: line-through;
      `;
    }
  }}

  ${(p) => {
    if (typeof p.wordBreak === 'undefined') {
      return css`
        word-break: keep-all;
      `;
    }
    if (p.wordBreak) {
      return css`
        word-break: ${p.wordBreak};
      `;
    }
  }}

  ${(p) => {
    if (p.whiteSpace) {
      return css`
        white-space: ${p.whiteSpace};
      `;
    }
  }}
`;

type TypographyProps<T extends ElementType> = {
  as?: T;
} & ComponentPropsWithoutRef<T> &
  _TypoProps;

function Typography<T extends ElementType = 'span'>(
  {as, ...props}: TypographyProps<T>,
  ref: ForwardedRef<HTMLElement>,
) {
  return (
    <_Typo ref={ref} as={as || 'span'} {...props}>
      {props.children}
    </_Typo>
  );
}

export default forwardRef(Typography) as typeof Typography;

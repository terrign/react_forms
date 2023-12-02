import { PropsWithChildren } from 'react';

export interface FlexProps extends PropsWithChildren {
  dir: 'col' | 'row';
  gap: number;
  wrap: boolean;
  align: React.CSSProperties['alignItems'];
  justify: React.CSSProperties['justifyContent'];
  style: React.CSSProperties;
  className: string;
}

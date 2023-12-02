import { FlexProps } from './flex';
import { ALIGN, DIR, DISPLAY, GAP, JUSTIFY, WRAP } from '../constants';

function useFlexStyles(props: Partial<FlexProps>): React.CSSProperties {
  const styles: React.CSSProperties = {
    display: DISPLAY,
    flexDirection: props.dir === 'col' ? 'column' : DIR,
    flexWrap: props.wrap ? 'wrap' : WRAP,
    gap: props.gap || GAP,
    alignItems: props.align || ALIGN,
    justifyContent: props.justify || JUSTIFY,
    ...props.style,
  };
  return styles;
}

export default useFlexStyles;

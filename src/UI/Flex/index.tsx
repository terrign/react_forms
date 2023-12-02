import type { FlexProps } from '../types';
import useFlexStyles from './useFlexStyles';

const Flex = (props: Partial<FlexProps>) => {
  const styles = useFlexStyles(props);
  return (
    <div style={styles} className={props.className}>
      {props.children}
    </div>
  );
};

export default Flex;

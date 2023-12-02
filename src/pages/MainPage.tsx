import Flex from '../UI/Flex';
import FormResult from '../components/FormResults';
import styles from './styles.module.css';

function MainPage() {
  return (
    <Flex justify="space-evenly" className={styles.mainFlex}>
      <FormResult controlled={true} />
      <FormResult controlled={false} />
    </Flex>
  );
}

export default MainPage;

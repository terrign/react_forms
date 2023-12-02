import Flex from '../../UI/Flex';
import { useAppSelector } from '../../store/hooks';
import styles from './styles.module.css';

function FormResult({ controlled }: { controlled?: boolean }) {
  const result = useAppSelector((state) => {
    return controlled ? state.controlledForm.prevResult : state.uncontrolledForm.result;
  });

  if (!result.formValues.acceptTC) {
    return null;
  }
  return (
    <Flex dir="col" align="flex-start" className={styles.formResult} gap={20}>
      <h2>{controlled ? 'Controlled form result:' : 'Uncontrolled form result:'}</h2>
      <Flex>
        <div style={{ backgroundImage: `url(${result.image})` }} className={styles.image} />
        <h2>{result.formValues.name}</h2>
      </Flex>
      <p>Email: {result.formValues.email}</p>
      <p>Gender: {result.formValues.gender}</p>
      <p>Password: {result.formValues.password}</p>
      <p>Age: {result.formValues.age}</p>
    </Flex>
  );
}

export default FormResult;

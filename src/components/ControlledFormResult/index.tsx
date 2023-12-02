import { useAppSelector } from '../../store/hooks';

function ControlledFormResult() {
  const prevResult = useAppSelector((state) => state.controlledFormReducer.prevResult);
  return (
    <>
      {prevResult && (
        <div>
          <img src={prevResult.image} />
          <h2>{prevResult.formValues.name}</h2>
          <p>{prevResult.formValues.email}</p>
          <p>{prevResult.formValues.gender}</p>
          <p>{prevResult.formValues.password}</p>
          <p>{prevResult.formValues.age}</p>
        </div>
      )}
    </>
  );
}

export default ControlledFormResult;

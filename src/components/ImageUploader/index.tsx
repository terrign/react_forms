import { useRef } from 'react';

import Flex from '../../UI/Flex';
import { setImage as setControlledImage } from '../../store/controlled.slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import convertBase64 from '../../util/convertBase64';
import styles from './styles.module.css';
import { setImage as setUncontrolledImage } from '../../store/uncontrolled.slice';

function ImageUploader({ isControlled }: { isControlled: boolean }) {
  const dispatch = useAppDispatch();
  const image = useAppSelector((state) => (isControlled ? state.controlledForm.image : state.uncontrolledForm.image));

  const ref = useRef<HTMLInputElement>(null);

  const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) {
      return;
    }
    const base = await convertBase64(files[0]);
    if (!base) {
      return;
    }
    isControlled ? dispatch(setControlledImage(base)) : dispatch(setUncontrolledImage(base));
  };

  const removeImage = () => {
    isControlled ? dispatch(setControlledImage('')) : dispatch(setUncontrolledImage(''));
    if (ref.current) {
      ref.current.value = '';
    }
  };

  return (
    <Flex justify="start" gap={40} style={{ position: 'relative' }}>
      {!!image && <div className={styles.cross} onClick={removeImage}></div>}
      <label className={styles.fileUpload} htmlFor="imageLoader" style={{ backgroundImage: `url(${image})` }}>
        {!image && '+'}
        <input type="file" accept="image/*" id="imageLoader" onChange={onChange} ref={ref} />
      </label>
      <h3>Load your avatar</h3>
    </Flex>
  );
}

export default ImageUploader;

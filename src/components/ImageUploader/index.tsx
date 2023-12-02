import { useRef } from 'react';

import Flex from '../../UI/Flex';
import { setImage } from '../../store/controlled.slice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import convertBase64 from '../../util/convertBase64';
import styles from './styles.module.css';

function ImageUploader() {
  const dispatch = useAppDispatch();
  const image = useAppSelector((state) => state.controlledFormReducer.image);
  const ref = useRef<HTMLInputElement>(null);

  const onChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;
    const base = await convertBase64(files[0]);
    if (!base) return;
    dispatch(setImage(base));
  };

  const removeImage = () => {
    dispatch(setImage(''));
    if (ref.current) ref.current.value = '';
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

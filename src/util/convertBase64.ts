const convertBase64 = (file: Blob): Promise<string> => {
  return new Promise((resolve) => {
    const fileReader = new FileReader();
    if (file) {
      fileReader.readAsDataURL(file);
    } else {
      resolve('');
    }
    fileReader.onload = () => {
      resolve(fileReader.result as string);
    };
  });
};

export default convertBase64;

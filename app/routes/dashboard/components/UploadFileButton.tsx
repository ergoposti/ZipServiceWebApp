import { Alert, Button } from '@mui/material';
import { AxiosError } from 'axios';
import { enqueueSnackbar } from 'notistack';
import { useContext } from 'react';
import { uploadZipFile } from '../../../core/api.js';
import UploadErrorContext from '../context/UploadErrorContext.js';
import ZipFileListContext from '../context/ZipFileListContext.js';

export default function UploadFileButton(): JSX.Element {
  const { triggerUpdate } = useContext(ZipFileListContext);
  const { setErrors } = useContext(UploadErrorContext);

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    console.log("Uploading file:", file);
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {

      setErrors([]);

      await uploadZipFile(formData);

      await triggerUpdate();

      enqueueSnackbar("Uploaded successfully", { content: (key, message) => <Alert id={key.toString()} severity="success">{message}</Alert> });

    } catch (error) {

      if (error instanceof AxiosError<string>) {
        console.error("uploading error", error);

        const errorMessages: string[] = error.response?.data.split(/\r?\n/);

        if (errorMessages.length <= 0) {
          throw error;
        }

        setErrors(errorMessages);

      } else {
        enqueueSnackbar("Error uploading file", { content: (key, message) => <Alert id={key.toString()} severity="error">{message}</Alert> });
        throw error;
      }

    }
  };

  return (
    <Button variant="contained" component="label">
      Upload
      <input hidden accept=".zip,.rar,.7zip" type="file" onChange={handleUpload} />
    </Button>
  );
}

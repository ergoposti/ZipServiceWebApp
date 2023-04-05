import { Alert } from "@mui/material";
import { useContext } from "react";
import UploadErrorContext from "../context/UploadErrorContext.js";


export default function UploadErrors(): JSX.Element {
  const { errors } = useContext(UploadErrorContext);

  return (
    <div>
      {errors.map(errorMessage => <Alert key={errorMessage} severity="error">{errorMessage}</Alert>)}
    </div>
  );
}

import { createContext } from "react";

type UploadErrorContextType = {
  errors: string[],
  setErrors: (errors: string[]) => void;
};

const defaultSetErrors = () => { throw new Error("trigger update is not defined"); }

const UploadErrorContext = createContext<UploadErrorContextType>({ errors: [], setErrors: defaultSetErrors });
export default UploadErrorContext;

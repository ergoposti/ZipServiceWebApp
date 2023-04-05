import * as React from "react";
import { useState } from "react";
import UploadErrorContext from "./UploadErrorContext.js";

interface UploadErrorContextProviderProps {
  children: React.ReactNode;
}

const UploadErrorContextProvider: React.FC<UploadErrorContextProviderProps> = ({ children }) => {
  const [errors, setErrors] = useState<string[]>([]);

  return (
    <UploadErrorContext.Provider value={{ errors, setErrors }}>
      {children}
    </UploadErrorContext.Provider>
  );
};

export default UploadErrorContextProvider;

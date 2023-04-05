import { Alert } from "@mui/material";
import axios from "axios";
import { enqueueSnackbar } from 'notistack';
import * as React from "react";
import { useCallback, useState } from "react";
import { ZipFileListDto } from "../../../models/zipFiles/ZipFileListDto.js";
import ZipFileListContext from './ZipFileListContext.js';

interface ZipFileListProviderProps {
  children: React.ReactNode;
}

const ZipFileListProvider: React.FC<ZipFileListProviderProps> = ({ children }) => {
  const [zipFileList, setZipFileList] = useState<ZipFileListDto>({ zipFiles: [] });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const updateZipFileList = useCallback(async () => {
    setIsLoading(true);

    try {

      const response = await axios.get<ZipFileListDto>("http://localhost:55000/ZipFile/List");
      console.log(response.data);

      setZipFileList(response.data);
    } catch (error) {
      console.error("Error downloading file tree:", error);

      enqueueSnackbar("Couldn't sync zip files", { content: (key, message) => <Alert id={key.toString()} severity="error">{message}</Alert> });
    }

    setIsLoading(false);
  }, []);

  return (
    <ZipFileListContext.Provider value={{ asyncLoadedItem: { isLoading, result: zipFileList }, triggerUpdate: updateZipFileList }}>
      {children}
    </ZipFileListContext.Provider>
  );
};

export default ZipFileListProvider;

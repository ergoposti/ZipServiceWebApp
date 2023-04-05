import { Container, Typography } from "@mui/material";
import { usePageEffect } from "../../core/page.js";
import FileTree from './components/FileTree.js';
import UploadErrors from "./components/UploadErrors.js";
import UploadFileButton from "./components/UploadFileButton.js";
import UploadErrorContextProvider from "./context/UploadErrorProvider.js";
import ZipFileListProvider from "./context/ZipFileListProvider.js";

export default function Home(): JSX.Element {
  usePageEffect({ title: "Game files Dashboard" });

  return (
    <ZipFileListProvider>
      <UploadErrorContextProvider>
        <Container sx={{ py: "20vh" }} maxWidth="sm">
          <Typography sx={{ mb: 2 }} variant="h1" align="center">
            Zip files
          </Typography>

          <UploadFileButton />
          <UploadErrors />

          <FileTree />
        </Container>
      </UploadErrorContextProvider>
    </ZipFileListProvider>
  );
}

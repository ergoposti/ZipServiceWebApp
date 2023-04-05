/* eslint-disable react/prop-types */
import { Download } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { getDownloadUrl } from "../../../core/api.js";

interface DownloadButtonProps {
  fileId: string;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ fileId }) => {
  const onDownload = () => {
    const link = document.createElement('a');
    link.download = `download.zip`;
    link.href = getDownloadUrl(fileId);
    link.click();
  };

  return (
    <Tooltip title="Download">
      <IconButton onClick={onDownload}>
        <Download />
      </IconButton>
    </Tooltip>
  );
};

export default DownloadButton;

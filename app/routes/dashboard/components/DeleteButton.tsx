/* eslint-disable react/prop-types */
import { Delete } from '@mui/icons-material';
import { Alert, Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, IconButton, Tooltip } from '@mui/material';
import { enqueueSnackbar } from 'notistack';
import * as React from "react";
import { useContext } from 'react';
import { deleteZipFile } from '../../../core/api.js';
import ZipFileListContext from '../context/ZipFileListContext.js';

interface DeleteButtonProps {
  fileEntityId: string;
}

const DeleteButton: React.FC<DeleteButtonProps> = ({ fileEntityId }) => {
  const { triggerUpdate } = useContext(ZipFileListContext);
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    handleClose();

    try {
      await deleteZipFile(fileEntityId);
      triggerUpdate();

      enqueueSnackbar("Successfully deleted file", { content: (key, message) => <Alert id={key.toString()} severity="success">{message}</Alert> });
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Error deleting file", { content: (key, message) => <Alert id={key.toString()} severity="error">{message}</Alert> });
    }
  };

  return (
    <Box>
      <Tooltip title="Delete">
        <IconButton onClick={handleClickOpen}>
          <Delete />
        </IconButton>
      </Tooltip>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete this file?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Some other text
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete} autoFocus color="error">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default DeleteButton;

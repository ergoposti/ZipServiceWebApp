import { Close, ExpandLess, ExpandMore } from '@mui/icons-material';
import { TreeView } from "@mui/lab";
import { Box, Divider } from '@mui/material';
import { useContext, useEffect } from 'react';
import { ZipFileNodeDto } from '../../../models/zipFiles/ZipFileDto.js';
import ZipFileListContext from '../context/ZipFileListContext.js';
import ZipFileTree from './ZipFileTree.js';

export default function FileTree(): JSX.Element {
  // TODO add loading indicator
  const { asyncLoadedItem, triggerUpdate } = useContext(ZipFileListContext);


  useEffect(() => {
    triggerUpdate();
  }, [triggerUpdate]);

  const renderZipFiles = (nodes: ZipFileNodeDto[]) => (
    nodes.flatMap((node, index) => {
      const treeItem = (
        <ZipFileTree node={node} />
      );

      if (index === nodes.length - 1) {
        return [treeItem];
      }

      return [treeItem, <Divider key={`divider-${node.id}`} />];
    })
  );

  return (
    <Box marginTop={2}>
      <TreeView
        aria-label="file tree"
        defaultExpanded={['root']}
        defaultCollapseIcon={<ExpandLess />}
        defaultExpandIcon={<ExpandMore />}
        defaultEndIcon={<Close />}
      >
        {renderZipFiles(asyncLoadedItem.result.zipFiles)}
      </TreeView>
    </Box>
  );
}

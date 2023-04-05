/* eslint-disable react/prop-types */
import { TreeItem } from "@mui/lab";
import { Box } from "@mui/material";
import * as React from "react";
import { FileNodeDto } from "../../../models/zipFiles/FileNodeDto.js";
import { ZipFileNodeDto } from "../../../models/zipFiles/ZipFileDto.js";
import DeleteButton from "./DeleteButton.js";
import DownloadButton from "./DownloadButton.js";

interface ZipFileTreeProps {
  node: ZipFileNodeDto;
}

const renderTree = (nodes: FileNodeDto[], parentId = "") => (
  nodes.map((node, index) => (
    <TreeItem key={node.name + index + parentId} nodeId={node.name + index + parentId} label={node.name}>
      {node.isDirectory && renderTree(node.childNodes, node.name + index + parentId)}
    </TreeItem>
  ))
);

const ZipFileTree: React.FC<ZipFileTreeProps> = ({ node }) => {

  return (
    <Box key={node.id} display="flex" alignItems="start">
      <DeleteButton fileEntityId={node.id} />
      <DownloadButton fileId={node.fileId} />
      <Box marginTop={1}>
        <TreeItem nodeId={node.id} label={node.name}>
          {node.isDirectory && renderTree(node.childNodes, node.id)}
        </TreeItem>
      </Box>
    </Box>
  );
};

export default ZipFileTree;

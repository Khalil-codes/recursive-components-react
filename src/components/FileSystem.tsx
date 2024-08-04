import {
  Folder as FolderIcon,
  FileText as FileIcon,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

export type Node = {
  name: string;
  nodes?: Node[];
  type?: "file" | "folder";
};

const FileSystem = ({ nodes }: { nodes: Node[] }) => {
  return (
    <ul>
      {nodes.map((node) => (
        <Folder node={node} />
      ))}
    </ul>
  );
};

export default FileSystem;

const Folder = ({ node }: { node: Node }) => {
  const [open, setOpen] = useState(false);
  return (
    <li className="my-1.5">
      <span
        className="flex items-center gap-2"
        onClick={() => {
          if (node.nodes) setOpen((prev) => !prev);
        }}
      >
        {node.nodes?.length && (
          <button>
            <ChevronRight
              size={16}
              className={`text-gray-500 transition ease-in`}
            />
          </button>
        )}
        {node.type === "file" ? (
          <FileIcon size={24} className="ml-6" />
        ) : (
          <FolderIcon
            fill="skyblue"
            size={24}
            className={!node.nodes ? "ml-6" : ""}
          />
        )}
        <span>{node.name}</span>
      </span>
      {open && node.nodes && (
        <ul className="pl-6">
          {node.nodes.map((node) => (
            <Folder node={node} />
          ))}
        </ul>
      )}
    </li>
  );
};

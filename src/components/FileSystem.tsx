import {
  Folder as FolderIcon,
  FileText as FileIcon,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        className="flex items-center gap-2 cursor-pointer group"
        onClick={() => {
          if (node.nodes) setOpen((prev) => !prev);
        }}
      >
        {node.nodes?.length && (
          <motion.button
            animate={{ rotate: open ? 90 : 0 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
          >
            <ChevronRight
              size={16}
              className={`text-gray-500 transition ease-in`}
            />
          </motion.button>
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
        <span className="group-hover:font-bold">{node.name}</span>
      </span>
      <AnimatePresence>
        {open && node.nodes && (
          <motion.ul
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className="pl-6 overflow-hidden"
          >
            {node.nodes.map((node) => (
              <Folder node={node} />
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};

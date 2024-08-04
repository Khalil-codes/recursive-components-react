import FileSystem, { Node } from "./components/FileSystem";

export default function App() {
  return (
    <main className="max-w-xl mx-auto my-10 flex flex-col gap-4">
      <h1 className="text-3xl font-bold p-8 border rounded">
        Recursive components using React
      </h1>
      <div className="w-full border p-8">
        <FileSystem nodes={nodes} />
      </div>
    </main>
  );
}

const nodes: Node[] = [
  {
    name: "Home",
    nodes: [
      {
        name: "Pages",
        nodes: [
          { name: "About", nodes: [{ name: "index.tsx", type: "file" }] },
          { name: "Pricing" },
        ],
      },
      {
        name: "Components",
        nodes: [
          {
            name: "UI",
            nodes: [
              { name: "button.tsx", type: "file" },
              { name: "slider.tsx", type: "file" },
            ],
          },
          {
            name: "Sections",
            nodes: [
              {
                name: "Hero",
                nodes: [{ name: "index.tsx", type: "file" }],
              },
            ],
          },
        ],
      },
    ],
  },
  { name: "Public" },
  {
    name: "Config",
    nodes: [
      { name: "tailwind.config.js", type: "file" },
      { name: "postcss.config.js", type: "file" },
      { name: "tsconfig.json", type: "file" },
    ],
  },
  { name: "package.json", type: "file" },
];

import React from "react";
import useStore from "@/lib/store";

export default function NodeEditor() {
  const selectedNodeId = useStore((s) => s.selectedNodeId);
  const nodes = useStore((s) => s.nodes);
  const updateNodeLabel = useStore((s) => s.updateNodeLabel);
  const updateNodeColor = useStore((s) => s.updateNodeColor);

  if (!selectedNodeId) return <div className="p-4">Select a node to edit</div>;

  const node = nodes.find((n) => n.id === selectedNodeId);
  if (!node) return <div className="p-4">Selected node not found</div>;

  return (
    <div className="p-4 border-l bg-gray-50 w-64 space-y-4">
      <div>
        <label className="block font-semibold mb-1">Edit Text</label>
        <input
          type="text"
          value={node.data.label}
          onChange={(e) => updateNodeLabel(selectedNodeId, e.target.value)}
          className="w-full border rounded px-2 py-1"
        />
      </div>
      <div>
        <label className="block font-semibold mb-1">Change Color</label>
        <input
          type="color"
          value={node.style?.backgroundColor || "#eeeeee"}
          onChange={(e) => updateNodeColor(selectedNodeId, e.target.value)}
          className="w-full h-10 p-0 border rounded"
        />
      </div>
    </div>
  );
}

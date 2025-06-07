import React from "react";
import useStore from "@/lib/store";

export default function NodeLabelEditor() {
  const selectedNodeId = useStore((s) => s.selectedNodeId);
  const nodes = useStore((s) => s.nodes);
  const updateNodeLabel = useStore((s) => s.updateNodeLabel);

  if (!selectedNodeId) return null;

  const node = nodes.find((n) => n.id === selectedNodeId);
  if (!node) return null;

  const onChange = (e) => {
    updateNodeLabel(selectedNodeId, e.target.value);
  };

  return (
    <div className="p-4 border-t bg-gray-100">
      <label className="block font-semibold mb-1">Edit Node Label:</label>
      <input
        type="text"
        value={node.data.label}
        onChange={onChange}
        className="w-full border px-2 py-1 rounded"
      />
    </div>
  );
}

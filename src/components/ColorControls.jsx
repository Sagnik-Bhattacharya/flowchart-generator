"use client";

import React, { useState, useEffect } from "react";
import useStore from "@/lib/store";

export default function ColorControls() {
  const { nodes, setNodes } = useStore();
  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const [bgColor, setBgColor] = useState("#eeeeee");
  const [textColor, setTextColor] = useState("#000000");

  // Assume you have some way to select a node,
  // For example, select the first node for demo:
  useEffect(() => {
    if (nodes.length > 0 && !selectedNodeId) {
      setSelectedNodeId(nodes[0].id);
    }
  }, [nodes, selectedNodeId]);

  // When selectedNodeId changes, load its colors
  useEffect(() => {
    if (!selectedNodeId) return;
    const node = nodes.find((n) => n.id === selectedNodeId);
    if (node) {
      setBgColor(node.data.bgColor || "#eeeeee");
      setTextColor(node.data.textColor || "#000000");
    }
  }, [selectedNodeId, nodes]);

  const updateColors = () => {
    const updatedNodes = nodes.map((node) => {
      if (node.id === selectedNodeId) {
        return {
          ...node,
          data: { ...node.data, bgColor, textColor },
          style: {
            ...node.style,
            backgroundColor: bgColor,
            color: textColor,
          },
        };
      }
      return node;
    });
    setNodes(updatedNodes);
  };

  return (
    <div style={{ padding: 16, borderLeft: "1px solid #ccc", width: 250 }}>
      <h3>Color Controls</h3>
      <div>
        <label>Background Color:</label>
        <input
          type="color"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
        />
      </div>
      <div>
        <label>Text Color:</label>
        <input
          type="color"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
        />
      </div>
      <button onClick={updateColors} style={{ marginTop: 10 }}>
        Update Colors
      </button>
    </div>
  );
}

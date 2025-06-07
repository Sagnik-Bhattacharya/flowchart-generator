"use client";
import ReactFlow, { Background, Controls, addEdge } from "reactflow";
import "reactflow/dist/style.css";
import { useCallback } from "react";
import useStore from "@/lib/store";
import html2canvas from "html2canvas";
import { useRef } from "react";
import { generateSVG } from "@/lib/exportSVG";

export default function FlowCanvas() {
  const {
    nodes,
    edges,
    setEdges,
    onNodesChange,
    onEdgesChange,
    setSelectedNodeId,
  } = useStore();

  const canvasRef = useRef(null);

  const onConnect = useCallback(
    (params) => {
      const newEdges = addEdge(
        {
          ...params,
          type: "default",
          animated: true,
          style: { stroke: "#000" },
        },
        edges || []
      );
      setEdges(newEdges);
    },
    [edges, setEdges]
  );
  const exportAsImage = async () => {
    const element = canvasRef.current;
    if (!element) return;

    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = data;
    link.download = "flowchart.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const exportAsSVG = () => {
    const svgString = generateSVG(nodes, edges);
    const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "flowchart.svg";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const onNodeClick = useCallback(
    (event, node) => {
      setSelectedNodeId(node.id);
    },
    [setSelectedNodeId]
  );

  return (
    <div className="flex-1 h-full">
      <div ref={canvasRef} className="h-full w-full">
        <ReactFlow
          nodes={Array.isArray(nodes) ? nodes : []}
          edges={Array.isArray(edges) ? edges : []}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onNodeClick={onNodeClick}
          fitView
          defaultEdgeOptions={{
            animated: true,
            style: { stroke: "#000" },
          }}
        >
          <Background />
          <Controls />
        </ReactFlow>
      </div>
      <button
        onClick={exportAsImage}
        className="absolute top-4 right-4 z-50 bg-green-600 text-white px-4 py-2 rounded shadow"
      >
        Export as PNG
      </button>
      <button
        onClick={exportAsSVG}
        className="absolute top-16 right-4 z-50 bg-purple-600 text-white px-4 py-2 rounded shadow"
      >
        Export as SVG
      </button>
    </div>
  );
}

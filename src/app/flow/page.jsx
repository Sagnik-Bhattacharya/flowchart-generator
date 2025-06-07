"use client";
import React from "react";
import Sidebar from "@/components/Sidebar";
import FlowCanvas from "@/components/FlowCanvas";
import NodeLabelEditor from "@/components/NodeLabelEditor";
import NodeEditor from "@/components/NodeEditor";

export default function FlowPage() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <FlowCanvas />
        <NodeEditor/>
      </div>
    </div>
  );
}

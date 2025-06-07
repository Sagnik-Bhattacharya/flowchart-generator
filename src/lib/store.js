import { create } from "zustand";
import { nanoid } from "nanoid";
import { applyNodeChanges, applyEdgeChanges } from "reactflow";

const shapeStyles = {
  square: { style: { width: 100, height: 100 } },
  rectangle: { style: { width: 140, height: 70 } },
  circle: { style: { width: 100, height: 100, borderRadius: "50%" } },
  oval: { style: { width: 120, height: 70, borderRadius: "50%" } },
  rhombus: { style: { width: 100, height: 100, transform: "rotate(45deg)" } },
};

const getInitialNodes = () => {
  if (typeof window !== "undefined") {
    try {
      return JSON.parse(localStorage.getItem("flowchart-nodes") || "[]");
    } catch {
      return [];
    }
  }
  return [];
};

const getInitialEdges = () => {
  if (typeof window !== "undefined") {
    try {
      return JSON.parse(localStorage.getItem("flowchart-edges") || "[]");
    } catch {
      return [];
    }
  }
  return [];
};

const useStore = create((set, get) => ({
  nodes: getInitialNodes(),
  edges: getInitialEdges(),

  setNodes: (nodes) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("flowchart-nodes", JSON.stringify(nodes));
    }
    set({ nodes });
  },

  setEdges: (edges) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("flowchart-edges", JSON.stringify(edges));
    }
    set({ edges });
  },

  onNodesChange: (changes) =>
    set((state) => {
      const updated = applyNodeChanges(changes, state.nodes || []);
      if (typeof window !== "undefined") {
        localStorage.setItem("flowchart-nodes", JSON.stringify(updated));
      }
      return { nodes: updated };
    }),

  onEdgesChange: (changes) =>
    set((state) => {
      const updated = applyEdgeChanges(changes, state.edges || []);
      if (typeof window !== "undefined") {
        localStorage.setItem("flowchart-edges", JSON.stringify(updated));
      }
      return { edges: updated };
    }),

  addNode: (type) => {
    const id = nanoid();
    const node = {
      id,
      type: "default",
      position: { x: Math.random() * 250, y: Math.random() * 250 },
      data: { label: type },
      ...shapeStyles[type],
    };
    const updatedNodes = [...(get().nodes || []), node];
    if (typeof window !== "undefined") {
      localStorage.setItem("flowchart-nodes", JSON.stringify(updatedNodes));
    }
    set({ nodes: updatedNodes });
  },
  selectedNodeId: null,

  setSelectedNodeId: (id) => set({ selectedNodeId: id }),

  updateNodeLabel: (nodeId, newLabel) => {
    const nodes = get().nodes || [];
    const updatedNodes = nodes.map((node) => {
      if (node.id === nodeId) {
        return {
          ...node,
          data: { ...node.data, label: newLabel },
        };
      }
      return node;
    });
    if (typeof window !== "undefined") {
      localStorage.setItem("flowchart-nodes", JSON.stringify(updatedNodes));
    }
    set({ nodes: updatedNodes });
  },
  updateNodeColor: (nodeId, newColor) => {
  const nodes = get().nodes || [];
  const updatedNodes = nodes.map((node) => {
    if (node.id === nodeId) {
      return {
        ...node,
        style: {
          ...node.style,
          backgroundColor: newColor,
        },
      };
    }
    return node;
  });
  if (typeof window !== "undefined") {
    localStorage.setItem("flowchart-nodes", JSON.stringify(updatedNodes));
  }
  set({ nodes: updatedNodes });
},
}));

export default useStore;

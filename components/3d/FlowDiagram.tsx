"use client";

import { Node } from "./Node";
import { Connection } from "./Connection";

export function FlowDiagram() {
  // Define node positions based on the "How it works" diagram
  // Input -> LLM -> Filter -> Selector -> Output -> (Feedback Loop)
  
  const nodes = [
    { id: "input", label: "Input", position: [-6, 0, 0], type: "input", description: "Campaign brief & context" },
    { id: "llm", label: "LLM Gen", position: [-3, 0, 0], type: "llm", description: "Generates K variants" },
    { id: "filter", label: "Filter", position: [0, 0, 0], type: "filter", description: "Brand & compliance rules" },
    { id: "selector", label: "Bandit/RL", position: [3, 0, 0], type: "selector", description: "Selects best variant" },
    { id: "output", label: "Output", position: [6, 0, 0], type: "output", description: "Published copy & metrics" },
    // Feedback loop node
    { id: "update", label: "RL Update", position: [0, -3, 0], type: "input", description: "Real-time learning" },
  ] as const;

  return (
    <group>
      {nodes.map((node) => (
        <Node
          key={node.id}
          position={node.position as [number, number, number]}
          label={node.label}
          description={node.description}
          type={node.type}
        />
      ))}

      {/* Forward connections */}
      <Connection start={[-6, 0, 0]} end={[-3, 0, 0]} />
      <Connection start={[-3, 0, 0]} end={[0, 0, 0]} />
      <Connection start={[0, 0, 0]} end={[3, 0, 0]} />
      <Connection start={[3, 0, 0]} end={[6, 0, 0]} />

      {/* Feedback loop connections */}
      <Connection start={[6, 0, 0]} end={[6, -3, 0]} />
      <Connection start={[6, -3, 0]} end={[0, -3, 0]} />
      <Connection start={[0, -3, 0]} end={[-6, -3, 0]} />
      <Connection start={[-6, -3, 0]} end={[-6, 0, 0]} />
      
      {/* Connection to Selector from Update */}
      <Connection start={[0, -3, 0]} end={[3, 0, 0]} />
    </group>
  );
}

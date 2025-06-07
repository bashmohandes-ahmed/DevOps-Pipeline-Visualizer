import React from "react";
import StageBlock from "./StageBlock";

export default function PipelineEditor({ pipeline, setPipeline }) {
  // Drag & Drop handlers (مبسطة للعرض)
  function moveStage(from, to) {
    let copy = [...pipeline];
    const [removed] = copy.splice(from, 1);
    copy.splice(to, 0, removed);
    setPipeline(copy);
  }
  return (
    <div className="pipeline-editor">
      {pipeline.map((stage, idx) => (
        <StageBlock
          key={stage.id}
          stage={stage}
          index={idx}
          total={pipeline.length}
          moveStage={moveStage}
        />
      ))}
    </div>
  );
}

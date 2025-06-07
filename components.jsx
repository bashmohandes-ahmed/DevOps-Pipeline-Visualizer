import React from "react";

export default function StageBlock({ stage, index, total, moveStage }) {
  return (
    <div className="stage-block">
      <div className="stage-header">
        <span className="stage-title">{stage.name}</span>
        <span className="stage-controls">
          {index > 0 && (
            <button onClick={() => moveStage(index, index - 1)}>↑</button>
          )}
          {index < total - 1 && (
            <button onClick={() => moveStage(index, index + 1)}>↓</button>
          )}
        </span>
      </div>
      <ul>
        {stage.steps.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}

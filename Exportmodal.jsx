import React from "react";

export default function ExportModal({ show, onClose, pipeline }) {
  if (!show) return null;
  // مثال تحويل pipeline إلى YAML (مبسط)
  const yaml = pipeline
    .map(
      (stage) =>
        `${stage.name}:\n  steps:\n${stage.steps
          .map((s) => `    - ${s}`)
          .join("\n")}`
    )
    .join("\n\n");
  return (
    <div className="modal-bg">
      <div className="modal">
        <h2>Export Pipeline YAML</h2>
        <textarea value={yaml} readOnly rows={pipeline.length * 3 + 2} />
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

import noProjectImage from "../assets/no-project.svg";

export default function NoProjectSelected() {
  return (
    <div className="mt-24 text-center w-2/3">
      <img />
      <h2>No Project Selected</h2>
      <p>Select a project or get started with a new one</p>
      <p>
        <button>+ New Project</button>
      </p>
    </div>
  );
}

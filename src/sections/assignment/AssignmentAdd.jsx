import AddNewProjectComponent from "../../components/assignment/form";

export default function AssignmentAdd(props) {
	return (
		<div className="flex justify-between items-center">
			{/* assignments  */}
			<h2 className="text-2xl font-semibold">Assignments</h2>

			<AddNewProjectComponent {...props} />
		</div>
	);
}

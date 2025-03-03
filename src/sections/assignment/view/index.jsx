import {  useState } from "react";
import AssignmentView from "./view";

export default function AssignmentContainer() {
	const [assignments, setAssignments] = useState([]);
	const [isAddAssignmentModalOpen, setIsAddAssignmentModalOpen] =
		useState(false);	
	
	// const fetchAssignments = async () => {
	// 	try {
	// 		const res = await db.assignments.toArray();
	// 		console.log(res)
	// 		setAssignments()
	// 	} catch (e) {
	// 		console.log(e.message)
	// 	}
	// }

	// useEffect(() => {
	// 	fetchAssignments();
	// }, [])	

	const handleToggleAssignmentModal = () => {
		setIsAddAssignmentModalOpen(!isAddAssignmentModalOpen);
	};

	// const handleCreateAssignment = async (assignment) => {
	// 	const id = await db.assignments.add(assignment)
	// 	setAssignments(prev => [...prev, {...assignment, id}])
	// }

	const handleCreateAssignment = (assignment) => {
		setAssignments(prev => [...prev, {...assignment, id: assignments.length + 1}])
		handleToggleAssignmentModal()
	}

	const assignmentViewProps = {
		assignments,
		isAddAssignmentModalOpen,
		handleToggleAssignmentModal,

		handleCreateAssignment,
	};



	return <AssignmentView {...assignmentViewProps} />;
}

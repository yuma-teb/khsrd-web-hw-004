import { useState } from "react";
import AssignmentView from "./view";

export default function AssignmentContainer() {
	const [isAddAssignmentModalOpen, setIsAddAssignmentModalOpen] =
		useState(false);

	const handleToggleAssignmentModal = () => {
		console.log("click menenenennet");
		setIsAddAssignmentModalOpen(!isAddAssignmentModalOpen);
	};

	const assignmentViewProps = {
		isAddAssignmentModalOpen,
		handleToggleAssignmentModal,
	};

	return <AssignmentView {...assignmentViewProps} />;
}

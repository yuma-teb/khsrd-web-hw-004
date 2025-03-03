import { dashboard } from "../../../data/dashboard";
import AssignmentAdd from "../AssignmentAdd";
import AssignmentList from "../AssignmentList";

export default function AssignmentView(props) {
	const { assignments, isAddAssignmentModalOpen, handleToggleAssignmentModal, handleCreateAssignment } = props;
	return (
		<div className="flex flex-col gap-8">
			<AssignmentAdd
				isAddAssignmentModalOpen={isAddAssignmentModalOpen}
				handleToggleAssignmentModal={handleToggleAssignmentModal}
				handleCreateAssignment={handleCreateAssignment}
			/>
			<AssignmentList assignments={assignments} />
		</div>
	);
}

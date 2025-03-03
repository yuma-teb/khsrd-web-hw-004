import { dashboard } from "../../../data/dashboard";
import AssignmentAdd from "../AssignmentAdd";
import AssignmentList from "../AssignmentList";

export default function AssignmentView(props) {
	const { isAddAssignmentModalOpen, handleToggleAssignmentModal } = props;
	return (
		<div className="flex flex-col gap-8">
			<AssignmentAdd
				isAddAssignmentModalOpen={isAddAssignmentModalOpen}
				handleToggleAssignmentModal={handleToggleAssignmentModal}
			/>
			<AssignmentList assignments={dashboard} />
		</div>
	);
}

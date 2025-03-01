import React from "react";
import { dashboard } from "../../data/dashboard";
import CardComponent from "../../components/assignment/card";

export default function AssignmentList() {
	return (
		<div className="flex flex-col gap-8">
			<div className="flex justify-between">
				{/* assignments  */}
				<h2 className="text-xl font-semibold">Assignments</h2>
			</div>

			<div className="grid grid-cols-3 gap-4">
				{dashboard?.map((data) => (
					<CardComponent {...data} />
				))}
			</div>
		</div>
	);
}

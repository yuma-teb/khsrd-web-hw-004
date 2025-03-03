import React from "react";
import CardComponent from "../../components/assignment/card";

export default function AssignmentList({ assignments }) {
	return (
		<div className="grid grid-cols-3 gap-4">
			{assignments?.map((data) => (
				<CardComponent {...data} />
			))}
		</div>
	);
}

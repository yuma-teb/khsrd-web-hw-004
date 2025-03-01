import React from "react";
import { dashboard } from "../../data/dashboard";
import DashboardCard from "../../components/dashboard/card";
export default function DashboardContainer() {
	return (
		<div>
			<h2 className="text-xl font-semibold mb-5">Dashboard</h2>

			<div className="flex justify-between gap-4">
				{dashboard?.map((data) => (
					<DashboardCard {...data} key={data.id} />
				))}
			</div>
		</div>
	);
}

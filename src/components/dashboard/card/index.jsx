export default function DashboardCard(props) {
	const imgStyle = `p-3 rounded-xl ${props?.color}`;
	return (
		<div className="flex gap-5">
			<div className="flex bg-white gap-5 py-3.5 px-4 rounded-xl w-auto">
				<div className={imgStyle}>
					<img src={props.icon} alt="file icon" />
				</div>
				<div>
					<p className="text-xl font-semibold">{props.totalTasks}</p>
					<p className="text-gray-400">{props.label}</p>
				</div>
			</div>
		</div>
	);
}

import "./App.css";
import SidebarComponent from "./components/SidebarComponent";
import TopNavbarComponent from "./components/TopNavbarComponent";
import AssignmentContainer from "./sections/assignment/view";
import DashboardComponent from "./sections/dashboard/DashboardComponent";

function App() {
	return (
		<div>
			<div className="flex">
				<SidebarComponent />
				<div className="flex flex-col grow-1 pt-4 px-8 bg-neutral-100">
					<TopNavbarComponent />
					<div className="flex gap-6 h-full mt-5">
						<div className="flex flex-col gap-5 w-8/10">
							<DashboardComponent />
							<AssignmentContainer />
						</div>
						<div className="w-1/4 bg-red-200 h-full">hii</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;

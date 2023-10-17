import Content from "./Content";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Dashboard() {
  return (
    <div className="flex h-[90%]">
      <Sidebar />
      <Content />
    </div>
  );
}

export default Dashboard;

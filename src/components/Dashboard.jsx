import Content from "./Content";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

function Dashboard() {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex h-5/6">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default Dashboard;

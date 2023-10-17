function Sidebar() {
  return (
    <div className="basis-1/5 bg-black text-white py-10 px-10 flex flex-col justify-between">
      <ul className="flex flex-col gap-2">
        <li className="bg-slate-800 px-3 py-2 rounded-lg hover:bg-slate-700 cursor-pointer">
          Dashboard
        </li>
        <li className="px-3 py-2 rounded-lg hover:bg-slate-800 cursor-pointer">
          Team
        </li>
        <li className="px-3 py-2 rounded-lg hover:bg-slate-800 cursor-pointer">
          Projects
        </li>
        <li className="px-3 py-2 rounded-lg hover:bg-slate-800 cursor-pointer">
          Documents
        </li>
      </ul>
      <h1 className="px-3 py-2 rounded-lg hover:bg-slate-800 cursor-pointer">
        Settings
      </h1>
    </div>
  );
}

export default Sidebar;

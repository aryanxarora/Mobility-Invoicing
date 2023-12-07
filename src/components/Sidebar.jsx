function Sidebar() {
  return (
    <div className="basis-1/5 bg-black text-white py-10 px-10 flex flex-col justify-between">
      <ul className="flex flex-col gap-2">
        <a href="/">
          <li className="px-3 py-2 rounded-lg hover:bg-slate-700 cursor-pointer">
            Dashboard
          </li>
        </a>
        <a href="/invoice">
          <li className="px-3 py-2 rounded-lg hover:bg-slate-800 cursor-pointer">
            Invoices
          </li>
        </a>
        {/* <a href="/">
          <li className="px-3 py-2 rounded-lg hover:bg-slate-800 cursor-pointer">
            Clients
          </li>
        </a> */}
      </ul>
      {/* <h1 className="px-3 py-2 rounded-lg hover:bg-slate-800 cursor-pointer">
        Settings
      </h1> */}
    </div>
  );
}

export default Sidebar;

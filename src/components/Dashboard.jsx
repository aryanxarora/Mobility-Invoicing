import Sidebar from "./Sidebar";
import refer from "../assets/refer.svg";

function Dashboard({ cookies }) {
  return (
    <div className="flex h-[90%]">
      <Sidebar />
      <div className="basis-4/5 p-10 flex flex-col overflow-scroll overflow-x-hidden">
        <h1 className="text-center font-black text-3xl py-5">My Plans</h1>
        <div className="bg-slate-100 p-10 rounded-lg mt-5">
          <div className="flex justify-between items-center">
            <div className="">
              <h2 className="font-bold text-2xl">Mobility</h2>
              <h3 className="font-bold text-xl text-slate-600">
                {cookies.address.address}
              </h3>
            </div>
            <div className="flex items-center gap-10">
              <h2 className="font-bold text-3xl">
                $55.00<span className="text-base">/month</span>
              </h2>
              <a
                className="bg-black text-white font-bold py-2 px-5 rounded-xl hover:bg-gray-600"
                href="#"
              >
                Manage my plan
              </a>
            </div>
          </div>
          <hr className="my-5" />
          <div className="flex gap-10">
            <div className="bg-slate-200 shadow-sm w-1/4 h-[120px] p-5 rounded-xl">
              <h2 className="font-bold mb-3">Montly Usage</h2>
              <h3>
                <span className="text-xl text-blue-500 font-black">∞</span>{" "}
                Unlimited
              </h3>
            </div>
            <div className="bg-slate-200 shadow-sm w-1/4 h-[120px] p-5 rounded-xl">
              <h2 className="font-bold mb-3">Plan</h2>
              <h3 className="text-sm">Ulimited Text and Call in Canada</h3>
              <h3 className="text-sm">Data: 45GB 5G</h3>
            </div>
            <div className="bg-slate-200 shadow-sm w-1/4 h-[120px] p-5 rounded-xl">
              <h2 className="font-bold mb-3">Payment in 28 days</h2>
              <h3 className="text-sm">
                <i>VISA</i> ****3875 | 0327 | {cookies.name}
              </h3>
              <a className="text-xs font-bold underline " href="#">
                Modify
              </a>
            </div>
          </div>
        </div>
        <div className="bg-slate-100 p-10 rounded-lg mt-5 px-40 flex gap-[200px]">
          <img className="w-64" src={refer} alt="" />
          <div className="flex flex-col justify-center gap-3">
            <h1 className="font-bold text-2xl">Refer your friends</h1>
            <p>
              Refer a friend and you’ll each get $25. Share the joy and invite
              as many friends as you like!
            </p>
            <a
              className="bg-black text-white font-bold py-2 px-5 rounded-xl hover:bg-gray-600 w-[180px] text-center mt-5"
              href="#"
            >
              Send Invitation
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

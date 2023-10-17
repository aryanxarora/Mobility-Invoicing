import Invoice from "./Invoice";
import InvoiceHeader from "./InvoiceHeader";

function Content() {
  return (
    <div className="basis-4/5 p-10 flex flex-col">
      <div className="flex gap-5 h-20 mb-3">
        <input
          type="text"
          className="bg-slate-100 w-11/12 rounded-md px-5 text-md"
          placeholder="Search..."
        />
        <a
          href=""
          className="bg-slate-600 text-white rounded-lg text-sm font-semibold flex justify-center items-center gap-2 px-5"
        >
          Submit
        </a>
      </div>
      <InvoiceHeader />
      <div className="overflow-scroll flex flex-col gap-3">
        <Invoice />
        <Invoice />
        <Invoice />
        <Invoice />
        <Invoice />
        <Invoice />
        <Invoice />
        <Invoice />
        <Invoice />
      </div>
    </div>
  );
}

export default Content;

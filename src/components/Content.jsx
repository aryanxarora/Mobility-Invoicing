import Invoice from "./Invoice";
import InvoiceHeader from "./InvoiceHeader";

function Content() {
  return (
    <div className="basis-4/5 p-10 flex flex-col">
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

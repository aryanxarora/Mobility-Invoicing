import Content from "./Content";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Invoice from "./Invoice";
import InvoiceHeader from "./InvoiceHeader";
import { useState } from "react";

function InvoiceTab({ cookies }) {
  const invoices = cookies.invoices;
  const [query, setQuery] = useState("");

  return (
    <div className="flex h-[90%]">
      <Sidebar />
      {/* <Content /> */}
      <div className="basis-4/5 p-10 flex flex-col">
        <div className="flex gap-5 h-20 mb-3">
          <input
            type="text"
            className="bg-slate-100 w-11/12 rounded-md px-5 text-md h-12"
            placeholder="Search by ID ..."
            onChange={(event) => setQuery(event.target.value)}
          />
          <a
            href=""
            className="bg-slate-600 text-white rounded-lg text-sm font-semibold flex justify-center items-center gap-2 px-5 h-12"
          >
            Submit
          </a>
        </div>
        <InvoiceHeader admin={cookies.user.usertype} />
        <div className="overflow-scroll flex flex-col gap-3">
          {/* {invoices.map((invoice) => (
            <Invoice invoice={invoice} user={cookies.user} />
          ))} */}
          {invoices
            .filter((invoice) => {
              if (query == "") {
                return invoice;
              } else if (
                String(invoice.id).toLowerCase().includes(query.toLowerCase())
              ) {
                return invoice;
              }
            })
            .map((invoice) => (
              <Invoice invoice={invoice} user={cookies.user} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default InvoiceTab;

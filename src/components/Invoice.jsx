function Invoice({ invoice, user }) {
  const date = new Date(invoice.invoiceDate);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return (
    <a
      href={`/invoice/${invoice.id}`}
      className="flex bg-slate-100 hover:bg-slate-200 px-10 py-5 items-center rounded-2xl"
    >
      <h1 href="" className="w-2/12">
        # {invoice.id}
      </h1>
      <div className="flex items-center w-3/12 justify-around">
        {user.usertype == true ? (
          // TODO: Change this to the customer name
          <h1>Aryan Arora</h1>
        ) : (
          //TODO: Change this to the plan name
          <h1>Vanier Mobility 45GB</h1>
        )}
      </div>
      <h1 className="w-4/12 text-center">
        {date.toLocaleDateString("en-US", options)}
      </h1>
      <h1 className="w-1/12">${invoice.invoiceTotal}</h1>
      <div className="w-2/12 flex justify-end">
        {invoice.invoiceStatus ? (
          <span
            href="#"
            className="bg-green-500 hover:bg-green-600 text-white rounded-xl py-2 px-5 border-solid border-white w-2/3 text-center"
          >
            Paid
          </span>
        ) : (
          <span
            href="#"
            className="bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl py-2 px-5 border-solid border-white w-2/3 text-center"
          >
            Pending
          </span>
        )}
      </div>
    </a>
  );
}

export default Invoice;

function Invoice({ admin }) {
  return (
    <div className="flex bg-white border-solid border-b-2 border-slate-100 px-10 py-5 mb-5 items-center font-semibold sticky top-0">
      <h1 className="w-2/12 ">Invoice ID</h1>
      <div className="flex items-center w-3/12 justify-around">
        {admin ? <h1>Customer</h1> : <h1>Plan</h1>}
      </div>
      <h1 className="w-4/12 text-center">Invoice Date</h1>
      <h1 className="w-1/12">Amount</h1>
      <div className="w-2/12 flex justify-center pr-3">
        <h1>Status</h1>
      </div>
    </div>
  );
}

export default Invoice;

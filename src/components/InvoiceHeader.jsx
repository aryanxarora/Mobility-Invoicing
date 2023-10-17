function Invoice() {
  return (
    <div className="flex bg-white border-solid border-b-2 border-slate-100 px-10 pb-5 mb-5 items-center font-semibold sticky top-0">
      <h1 className="w-2/12">Invoice ID</h1>
      <div className="flex items-center w-2/12 justify-around">
        <h1>Customer</h1>
      </div>
      <h1 className="w-5/12 text-center">Invoice Date</h1>
      <h1 className="w-1/12">Amount</h1>
      <div className="w-2/12 flex justify-end pr-3">
        <h1>Status</h1>
      </div>
    </div>
  );
}

export default Invoice;

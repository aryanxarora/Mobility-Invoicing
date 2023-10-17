function Invoice() {
  return (
    <a
      href="/invoice/aidf"
      className="flex bg-slate-100 hover:bg-slate-200 px-10 py-5 items-center rounded-2xl"
    >
      <h1 href="" className="w-2/12">
        #204578
      </h1>
      <div className="flex items-center w-2/12 justify-around">
        <img
          className="h-10 w-10 rounded-full"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          alt=""
        />
        <h1>Aryan Arora</h1>
      </div>
      <h1 className="w-5/12 text-center">October 17, 2023</h1>
      <h1 className="w-1/12">$58.69</h1>
      <div className="w-2/12 flex justify-end">
        <span
          href="#"
          className="bg-green-500 hover:bg-green-600 text-white rounded-xl py-2 px-5 border-solid border-white"
        >
          Paid
        </span>
      </div>
    </a>
  );
}

export default Invoice;

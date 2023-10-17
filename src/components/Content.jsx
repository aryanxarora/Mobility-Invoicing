function Content() {
  return (
    <div className="basis-4/5 p-10">
      <table class="table-auto w-full">
        <thead className="bg-slate-100">
          <tr className="text-left">
            <th>Invoice #</th>
            <th>Invoice Date</th>
            <th>Due Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>24397</td>
            <td>October 14, 2023</td>
            <td>October 17, 2023</td>
            <td>$130.00</td>
            <td>Paid</td>
          </tr>
          <tr>
            <td>24398</td>
            <td>October 15, 2023</td>
            <td>October 18, 2023</td>
            <td>$95.50</td>
            <td>Unpaid</td>
          </tr>
          <tr>
            <td>24399</td>
            <td>October 16, 2023</td>
            <td>October 19, 2023</td>
            <td>$225.00</td>
            <td>Paid</td>
          </tr>
          <tr>
            <td>24400</td>
            <td>October 17, 2023</td>
            <td>October 20, 2023</td>
            <td>$75.25</td>
            <td>Unpaid</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Content;

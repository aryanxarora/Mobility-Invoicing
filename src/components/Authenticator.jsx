import { useState } from "react";

function Authenticator({ onAuthSuccess }) {
  const [invalid, setInvalid] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleLogin() {
    const data = {
      user: {
        id: 1,
        firstName: "Demo",
        lastName: "User",
        email: "demouser@gmail.com",
        phone: "514-555-5555",
        userType: false,
        status: true,
      },
      invoice: [
        {
          id: 1398465,
          invoiceNumber: "1942396",
          invoiceDate: "2021-11-05",
          invoiceAmount: 250.0,
          invoiceTotal: 260.0,
          dueDate: "2021-11-25",
          invoiceStatus: false,
          invoiceDtls: [{ id: 8, productQty: 8 }],
        },
        {
          id: 1398464,
          invoiceNumber: "1942395",
          invoiceDate: "2021-10-30",
          invoiceAmount: 180.0,
          invoiceTotal: 190.0,
          dueDate: "2021-11-20",
          invoiceStatus: true,
          invoiceDtls: [{ id: 7, productQty: 7 }],
        },
        {
          id: 1398463,
          invoiceNumber: "1942394",
          invoiceDate: "2021-10-25",
          invoiceAmount: 300.0,
          invoiceTotal: 315.0,
          dueDate: "2021-11-15",
          invoiceStatus: true,
          invoiceDtls: [{ id: 6, productQty: 6 }],
        },
        {
          id: 1398462,
          invoiceNumber: "1942393",
          invoiceDate: "2021-10-20",
          invoiceAmount: 150.0,
          invoiceTotal: 160.0,
          dueDate: "2021-11-05",
          invoiceStatus: true,
          invoiceDtls: [{ id: 5, productQty: 5 }],
        },
        {
          id: 1398461,
          invoiceNumber: "1942392",
          invoiceDate: "2021-10-15",
          invoiceAmount: 200.0,
          invoiceTotal: 210.0,
          dueDate: "2021-10-31",
          invoiceStatus: true,
          invoiceDtls: [{ id: 4, productQty: 4 }],
        },
      ],
      address: {
        id: 1,
        address: "4585 Boulevard de Maisonneuve O",
        city: "Montreal",
        province: "QC",
        country: "Canada",
        postalCode: "H3Z 1L5",
        status: true,
      },
    };

    data.invoice.sort((a, b) => (a.invoiceDate > b.invoiceDate ? -1 : 1));
    setLoading(true);
    // const apiUrl =
    //   "https://vanierbillingapi.azurewebsites.net/api/User/loginEmailPass";
    // const userData = {
    //   email: document.getElementById("email").value,
    //   password: document.getElementById("password").value,
    // };

    // fetch(apiUrl, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(userData),
    // })
    //   .then((res) => {
    //     if (!res.ok) {
    //       throw new Error("Network response was not ok");
    //     }
    //     return res.json();
    //   })
    //   .then((user) => {
    //     onAuthSuccess(user);
    //   })
    //   .catch((error) => {
    //     console.error("There was a problem with the fetch operation:", error);
    //     setLoading(false);
    //     setInvalid(true);
    //   });
    onAuthSuccess(data);
  }

  return (
    <div className="bg-slate-200 h-[90%] p-20 flex justify-center items-center">
      <div className="flex flex-col justify-center bg-white p-20 shadow-xl gap-7 w-[500px] rounded-md">
        <h1 className="text-left font-bold text-2xl">
          Sign in to your account
        </h1>
        {invalid ? (
          <span className="bg-red-50 px-3 py-3 ring-1 ring-red-400 rounded-sm text-red-400">
            Invalid login credentials!
          </span>
        ) : (
          <span></span>
        )}
        <div className="">
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="w-full px-3 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 mt-2"
            type="text"
            id="email"
            name="email"
            placeholder="you@example.com"
            value="demouser@gmail.com"
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="w-full px-3 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 mt-2"
            type="password"
            id="password"
            name="password"
            value="demo"
          />
        </div>
        <button
          className="bg-black w-full px-3 py-3 text-center font-bold rounded-md text-white"
          onClick={handleLogin}
          disabled={loading}
        >
          {loading ? "Processing..." : "Log in"}
        </button>
        <a className="text-center underline text-blue-500" href="/register">
          Register for an account
        </a>
      </div>
    </div>
  );
}

export default Authenticator;

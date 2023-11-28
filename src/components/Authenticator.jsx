function Authenticator({ onAuthSuccess }) {
  function handleLogin() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // TODO: POST REQUEST TO API TO GET LOGIN DETAILS
    // fetch("https://vanierbillingapi.azurewebsites.net/api/User/Users")
    //   .then((res) => res.json())
    //   .then((user) => onAuthSuccess(user));
    const user = null;
    onAuthSuccess(user);
  }

  return (
    <div className="bg-slate-200 h-[90%] p-20 flex justify-center items-center">
      <div className="flex flex-col justify-center bg-white p-20 shadow-xl gap-7 w-[500px] rounded-md">
        <h1 className="text-left font-bold text-2xl">
          Sign in to your account
        </h1>
        <div className="">
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="w-full px-3 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 mt-2"
            type="text"
            id="email"
            name="email"
            placeholder="you@example.com"
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
          />
        </div>
        <button
          className="bg-black w-full px-3 py-3 text-center font-bold rounded-md text-white"
          onClick={handleLogin}
        >
          Log in
        </button>
        <a className="text-center underline text-blue-500" href="/register">
          Register for an account
        </a>
      </div>
    </div>
  );
}

export default Authenticator;

import { useState } from "react";

function Register() {
  const apiUrl = "https://vanierbillingapi.azurewebsites.net/api/User/create";
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: null,
    userType: null,
    address: "",
    city: "",
    province: "",
    country: "",
    postalCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="bg-slate-200 h-[90%] p-20 flex justify-center items-center">
      <div className="flex flex-col justify-center bg-white p-20 shadow-xl gap-7 w-[700px] rounded-md">
        <h1 className="text-left font-bold text-2xl">Create a new account</h1>
        <div>
          <form onSubmit={handleSubmit} className="w-full">
            <div className="grid grid-cols-1 gap-4">
              <div className="flex gap-5">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 mt-2"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 mt-2"
                  required
                />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 mt-2"
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 mt-2"
                required
              />

              <div className="flex gap-5">
                <input
                  type="text"
                  name="address"
                  placeholder="Address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 mt-2"
                  required
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 mt-2"
                  required
                />
              </div>
              <div className="flex gap-5">
                <input
                  type="text"
                  name="province"
                  placeholder="Province"
                  value={formData.province}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 mt-2"
                  required
                />
                <input
                  type="text"
                  name="country"
                  placeholder="Country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 mt-2"
                  required
                />
                <input
                  type="text"
                  name="postalCode"
                  placeholder="Postal Code"
                  value={formData.postalCode}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-md border-0 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 mt-2"
                  required
                />
              </div>
              <button
                className="bg-black w-full px-3 py-3 text-center font-bold rounded-md text-white"
                type="submit"
              >
                Register
              </button>
            </div>
          </form>
        </div>
        <a className="text-center underline text-blue-500" href="/">
          I have an existing account
        </a>
      </div>
    </div>
  );
}

export default Register;

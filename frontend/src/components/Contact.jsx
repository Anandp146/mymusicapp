import React, { useState } from "react";
import Header from "./Header";
// import "./contact.css";
const Contact = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const postUserData = (event) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, address, message } = userData;

    if (firstName && lastName && phone && email && address && message) {
      try {
        const response = await fetch(
          "https://project-music-app-e422a-default-rtdb.firebaseio.com/userDataRecord.json",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              firstName,
              lastName,
              phone,
              email,
              address,
              message,
            }),
          }
        );

        if (response.ok) {
          setUserData({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            address: "",
            message: "",
          });
          alert("Data Stored");
        } else {
          const data = await response.json(); // Get more detailed error info if available
          throw new Error(data.error || "Failed to store data");
        }
      } catch (error) {
        alert("Error storing data: " + error.message);
      }
    } else {
      alert("Please fill in all the fields");
    }
  };
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center bg-primary">
      <Header />
      <section className=" ">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form action="#" className="space-y-8">
            <div>
              <label
                for="firstName"
                className="block mb-2 text-sm text-black font-bold "
              >
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                id=""
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                placeholder="First Name"
                value={userData.firstName}
                onChange={postUserData}
              />
            </div>
            <div>
              <label
                for="lastName"
                className="block mb-2 text-sm text-black font-bold "
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                id=""
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                placeholder="First Name"
                value={userData.lastName}
                onChange={postUserData}
              />
            </div>
            <div className="col-12 col-lg-6 contact-input-feild">
              <label
                for="phone"
                className="block mb-2 text-sm text-black font-bold "
              >
                Phone
              </label>
              <input
                type="number"
                name="phone"
                id=""
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                placeholder="Phone Number "
                value={userData.phone}
                onChange={postUserData}
              />
            </div>
            <div>
              <label
                for="email"
                className="block mb-2 text-sm text-black font-bold "
              >
                Your email
              </label>
              <input
                type="text"
                name="email"
                id=""
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                placeholder="Email ID"
                value={userData.email}
                onChange={postUserData}
                required
              />
            </div>
            <div className="col-12 ">
              <label
                for="Address"
                className="block mb-2 text-sm text-black font-bold "
              >
                Address
              </label>
              <input
                type="text"
                name="address"
                id=""
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                placeholder="Add Address"
                value={userData.address}
                onChange={postUserData}
              />
            </div>
            <div>
              <label
                for="subject"
                className="block mb-2 text-sm text-black font-bold "
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                className="block mb-2 text-sm text-black font-bold"
              >
                Your message
              </label>
              <textarea
                placeholder="Enter Your Message"
                value={userData.message}
                onChange={postUserData}
                type="text"
                name="message"
                id=""
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-[#3b82f6] focus:border-[#3b82f6] "
              ></textarea>
            </div>
            <div class="form-check form-checkbox-style">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckChecked"
              />
              <label class="form-check-label" className="text-[#828286]">
                I agree that the agreement may contact me at the email address
                or phone number above
              </label>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-[#1d4ed8] sm:w-fit hover:bg-[#1e40af] focus:ring-4 focus:outline-none focus:ring-[#93c5fd]  "
              onClick={submitData}
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;

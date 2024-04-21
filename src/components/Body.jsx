import React from "react";

const Body = () => {
  return (
    <>
      <div className="lg:flex">
        <div className="flex items-center justify-center lg:flex-1 lg:order-2 lg:justify-end">
          <img
            src="./images/Group 1.png"
            alt=""
            className="h-64 md:h-72 lg:h-[400px]"
          />
        </div>
        <div className="lg:flex-1 lg:order-1 lg:mt-6">
          <h1 className="text-5xl font-bold font-playfair leading-tight space-y-4">
            Host your website in less than 5 minutes.
          </h1>
          <p className="font-lato text-gray-400 mt-3 mb-2">
            With Hosterr, get your website up and running in no less than 5
            minutes with the most competitive pricing packages available online.
          </p>

          <form action="" className="flex flex-col gap-4 md:flex-row">
            <input
              className="rounded-md px-4 py-3 placeholder:text-gray-400"
              type="email"
              name=""
              id=""
              placeholder="Enter email address"
            />
            <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600 text-white">
              Join Waitlist
            </button>
          </form>
          <div className="flex gap-2 pt-2">
            {/* <img src="./images/checkmark.png" alt="checkmark" className="h-6"/> */}
            <img src="./images/chk.svg" alt="checkmark" className="" />
            <p className="font-lato text-gray-400">
              No spam, ever. Unsubcribe anytime.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;

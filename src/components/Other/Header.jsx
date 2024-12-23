import React from "react";

const Header = ({ data, changeUser }) => {
  const logOutUser = () => {
    // Clear logged-in user data
    localStorage.setItem("loggedInUser", "");
    // Call the changeUser function passed as a prop
    changeUser("");
    // Optionally reload the page
    // window.location.reload();
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold">
          {data.firstname} 😀
        </span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-lg font-medium text-white rounded-sm px-5 py-2"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;

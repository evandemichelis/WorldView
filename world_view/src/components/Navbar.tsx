import React, { useState } from "react";

interface NavBar {
  title: string;
  searchbar: boolean;
}

const NavBar = (props: NavBar) => {
  const [editedTaskText, setEditedTaskText] = useState("");

  return (
      <nav className="bg-red-900">
          <div className="max-w-screen-xl flex justify-between mx-auto p-4">
              <a href="http://localhost:3000/">
                  <span className="text-2xl font-bold text-white">
                      {props.title}
                  </span>
              </a>
              <div>
                  <input
                      className="rounded-2xl"
                      type="text"
                      value={editedTaskText}
                      onChange={(e) => setEditedTaskText(e.target.value)}
                      style={{ color: 'black' }}
                      placeholder="  Search ..."
                  />
              </div>
          </div>
      </nav>
  )
};

export default NavBar;
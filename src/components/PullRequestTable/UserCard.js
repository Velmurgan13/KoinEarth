import React from "react";

export default function UserCard(props) {
  const { user } = props;
  return (
    <>
      <div className="flex px-2 py-1 text-xs rounded-lg mr-1 mb-1 w-8/12">
        <a
          href={user.html_url}
          target="_blank"
          rel="noreferrer"
          className="flex flex-row items-center text-primary"
        >
          <div className="w-5 h-5 rounded-full items-center overflow-hidden mr-2">
            <img src={user.avatar_url} alt={user.name} className="w-full" />
          </div>
          <span>{user.login}</span>
        </a>
      </div>
    </>
  );
}

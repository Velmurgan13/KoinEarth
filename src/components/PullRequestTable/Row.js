import React from "react";
import Label from "../Label";
import moment from "moment";

function Row(props) {
  const { pullRequest } = props;
  return (
    <>
      <div
        key={pullRequest.id}
        className="flex flex-row w-full border hover:border-gray-500 hover:bg-gray-100"
      >
        <div className="px-2 py-4 flex-col w-6/12">
          <div className="flex flex-row items-center justify-items-center break-words w-full">
            <a
              href={pullRequest.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-primary text-sm font-semibold pr-3 min-w-0 max-w-md"
            >
              {pullRequest.title}
            </a>
            <div className="flex flex-row flex-wrap items-start justify-start justify-items-start">
              {pullRequest.labels.map((l) => (
                <Label name={l.name} color={l.color} key={l.id} />
              ))}
            </div>
          </div>
          <p className="py-2 text-gray-600">
            #{pullRequest.number} opened{" "}
            {moment(pullRequest.created_at).fromNow()} by{" "}
            <a
              href={pullRequest.user.html_url}
              target="_blank"
              rel="noreferrer"
            >
              {pullRequest.user.login}
            </a>
          </p>
        </div>
        <div className="px-2 py-4 w-2/12 flex flex-col items-center justify-center">
          {pullRequest.base.ref}
        </div>
        <div className="px-2 py-4 w-2/12 flex flex-col items-center justify-center">
          {pullRequest.head.ref}
        </div>
        <div className="px-2 py-4 w-2/12 flex flex-col items-center justify-center">
          <a href={pullRequest.html_url} target="_blank" rel="noreferrer">
            {pullRequest.requested_reviewers.map((e) => e.login).join(", ")}
          </a>
        </div>
      </div>
    </>
  );
}

export default Row;

import React from "react";
import Head from "./Head";
import Rows from "./Rows";

function PullRequestTable() {
  return (
    <>
      <div className="flex flex-col w-full items-center justify-items-center py-12">
        <div className="flex flex-col w-11/12">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-2 lg:px-8">
              <h1 className="text-center text-3xl font-bold mb-5">
                Pull requests for{" "}
                <a
                  href="/"
                  className="text-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Neovim
                </a>{" "}
                project
              </h1>
              <div className="shadow overflow-hidden border-b border-gray-200">
                <div
                  id="pr-table"
                  className="min-w-full divide-gray-200 text-xs flex flex-col"
                >
                  <Head />
                  <div
                    id="pr-table-body"
                    className="bg-white divide-gray-200 flex flex-row w-full"
                  >
                    <Rows />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PullRequestTable;

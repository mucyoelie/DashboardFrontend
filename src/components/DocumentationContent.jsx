const DocumentationContent = () => {
  return (
    <div className="w-full bg-white p-6 overflow-y-auto rounded-lg xl:w-[70rem] my-10">
      <h1 className="text-3xl font-bold mb-4">Send Single SMS</h1>
      <p className="text-gray-700 mb-4">
        Send SMS through your application by making a
        <span className="px-2 py-1 bg-red-200 text-red-600 rounded text-xs ml-1">
          HTTP POST
        </span>
        request to the following endpoints:
      </p>

      <div className="bg-gray-900 text-white p-4 rounded-lg text-sm w-full">
        <p className="font-semibold text-green-400">Endpoints</p>
        <p className="mt-2">
          Live:{" "}
          <span className="text-blue-400">
            https://api.africastalking.com/version1/messaging
          </span>
        </p>
        <p>
          Sandbox:{" "}
          <span className="text-blue-400">
            https://api.sandbox.africastalking.com/version1/messaging
          </span>
        </p>
      </div>

      <h2 className="text-2xl font-bold mt-6">Request Parameters</h2>
      <p className="text-gray-700">
        In addition to the{" "}
        <span className="text-orange-600">standard request headers</span>, the
        body of the request should contain the following fields:
      </p>

      <div className="mt-4">
        <div className="flex justify-between border-b py-2">
          <span className="font-semibold">username</span>
          <span className="bg-red-200 text-red-600 px-2 py-1 text-xs rounded">
            String Required
          </span>
        </div>
        <p className="text-gray-600 text-sm">
          Your Africa’s Talking application username.
        </p>

        <div className="flex justify-between border-b py-2 mt-4">
          <span className="font-semibold">to</span>
          <span className="bg-red-200 text-red-600 px-2 py-1 text-xs rounded">
            String Required
          </span>
        </div>
        <p className="text-gray-600 text-sm">
          A comma-separated string of recipients’ phone numbers.
        </p>
      </div>
    </div>
  );
};
export default DocumentationContent;
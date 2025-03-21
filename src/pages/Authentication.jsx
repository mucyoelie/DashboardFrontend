const Authentication = () => {
  return (
    <div className="lg:ml-[7%] -ml-[12%] xl:right-20 p-5 w-[73vw] xl:absolute relative top-20">
      <h1 className="text-2xl  text-gray-900 dark:text-white mx-4">Authentication</h1>
      <div className="bg-white  rounded-lg  flex space-x-5 my-10 xl:w-[50rem] font-poppins">
          <p className=" mx-4 text-gray-700">The Mista.io API uses API tokens for authentication. You can generate an API token from your Mista.io dashboard under API Settings.
            <br/>
            <br/>
            <span className="text-2xl  text-gray-900">API Tokens</span>
            <br/>
            Include your API token in the Authorization header of all requests:
            <br/>
            <br/>
            <div className="bg-gray-200 text-white p-4 rounded-lg text-sm xl:w-full md:w-full lg:w-full w-[82vw] overflow-auto" >
        <p className=" text-blue-500">Authorization: Bearer YOUR_API_TOKEN</p>
      </div>
      <br/>
        <br/>
      <div className="bg-gray-200 text-white p-4 rounded-lg text-sm xl:w-full md:w-full lg:w-full w-[82vw] overflow-auto h-40" >
      <span className="text-2xl  text-gray-900">Security Note</span>
      <br/>
      <br/>
        <p className=" text-gray-900">Keep your API tokens secure and never share them publicly. If you believe a token has been compromised, you should immediately revoke it from your dashboard and generate a new one.</p>
      </div>
      <br/>
        <br/>
        <span className="text-2xl  text-gray-900">Rate Limiting</span>
        <br/>
        <br/>
        API requests are rate-limited to 100 requests per minute. If you exceed this limit, you will receive a 429 Too Many Requests response.
       
          </p>
      </div>
    </div>
  );
};

export default Authentication;

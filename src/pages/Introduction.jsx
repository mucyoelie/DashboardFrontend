const Introduction = () => {
    return (
      <div className="lg:ml-[7%] -ml-[10%] xl:right-20 p-5 w-[73vw] xl:absolute relative top-20 overflow-hidden">
        <h1 className="text-2xl  text-gray-900 dark:text-white mx-4 font-inter">Introduction</h1>
        <div className="bg-white  rounded-lg  flex space-x-5 my-10 xl:w-[50rem]">
            <p className=" mx-4  text-gray-700">Welcome to the Mista.io API documentation. Our API provides programmatic access to Mista  SMS messaging services, allowing you to integrate our powerful communication tools directly into your applications.
              <br/>
              <br/>
              <span className="text-2xl  text-gray-900">Getting Started</span>
              <br/>
              To start using the Mista.io API, you will need to:
              <br/>
              <br/>
              1. Create a Mista.io account
              <br/>
              2.Generate an API key from your dashboard
              <br/>
              3.Use the API key in your requests for authentication
              <br/>
              <br/>
              <span className="text-2xl  text-gray-900">Base URL</span>
              <br/>
              All API requests should be made to:
              <div className="bg-gray-200 text-white p-4 rounded-lg text-sm xl:w-full md:w-full lg:w-full w-[82vw] overflow-auto" >
          <p className=" text-blue-500">https://api.mista.io</p>
        </div>
        <br/>
          <br/>
          <span className="text-2xl  text-gray-900">Request Format</span>
          <br/>
          <br/>
          The API accepts JSON-encoded request bodies and returns JSON-encoded responses. Be sure to include the 
           <span className="text-blue-500 px-2">
            Content-Type: application/json
            </span> 
            header in your requests.
            </p>
        </div>
      </div>
    );
  };
  
  export default Introduction;
  


const HowitWork = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 mt-20 text-gray-800 dark:text-white font-medium">
      <h1 className="text-3xl font-bold mb-4 text-[#006242]">How it works</h1>
      <p className="mb-4">
      Build dynamic, scalable USSD and take advantage of handled complexity
      <br/>
      <br/>
      Start processing USSD requests in three simple steps
      <br/>
      <br/>
      egister a short code from Mista dashboard
      </p>
      <ul className="list-decimal list-inside mb-4">
        <li>Add a callback URL that we will call whenever we get a request from a client coming into our system</li>
        <li>Perform test on Mista USSD Simulator</li>
        <li>Switch Short code to Live and users will start using their mobile phones to interact with your Application</li>
      </ul>
      
      <p className="mb-4">
      Once you register your callback URL, any requests we receive belonging to your service code will trigger a HTTP POST request to the registered callback with the requests data.
       You can read the data from the form fields of the request. Content-Type: application/x-www-form-urlencoded.
       <br/>
       <br/>
       All you have to do at this point is respond with the string(Text) that you would like us to send back to the user.
      </p>
    </div>
  )
}

export default HowitWork;

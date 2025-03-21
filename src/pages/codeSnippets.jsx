import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaCopy, FaCheck } from "react-icons/fa"; // Import icons

const CodeSnippets = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("PHP");
  const [copied, setCopied] = useState(false); // Track copied state

  const codeSnippets = {
    PHP: `<?php
require 'vendor/autoload.php';
use AfricasTalking\\SDK\\AfricasTalking;

$username = "MyAppsUsername";
$apiKey = "MyAppAPIKey";

$AT = new AfricasTalking($username, $apiKey);
$sms = $AT->sms();`,

    JavaScript: `const axios = require('axios');

const sendSMS = async () => {
  const response = await axios.post('https://api.africastalking.com/version1/messaging', {
    username: 'MyAppsUsername',
    to: '+254711XXXXYY',
    message: 'Hello, this is a test message!',
  }, {
    headers: { 'apiKey': 'MyAppAPIKey' }
  });

  console.log(response.data);
};

sendSMS();`,

    Python: `import africastalking

username = "MyAppsUsername"
api_key = "MyAppAPIKey"

africastalking.initialize(username, api_key)
sms = africastalking.SMS

response = sms.send("Hello, this is a test message!", ["+254711XXXXYY"])
print(response)`,
  };

  const apiResponses = `{
  "Message": "Sent to 1/1 Total Cost: KES 0.8000",
  "Recipients": [
    {
      "statusCode": 101,
      "number": "+254711XXXXYY",
      "status": "Success",
      "cost": "KES 0.8000",
      "messageId": "ATPid_SampleTxnId123"
    }
  ]
}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippets[selectedLanguage]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2s
  };

  return (
    <div className="w-full bg-gray-900 p-6 overflow-y-auto rounded-lg xl:w-[70rem] my-10">
      {/* Right Section - Code Block */}
      <div className="w-full bg-gray-900 text-white px-6 py-6 rounded-lg mt-6 xl:min-h-screen xl:mr-0">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm text-gray-400">Select Language:</span>
          <select
            className="bg-gray-800 text-white text-sm p-2 rounded-lg border border-gray-700"
            onChange={(e) => setSelectedLanguage(e.target.value)}
            value={selectedLanguage}
          >
            <option value="PHP">PHP</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Python">Python</option>
          </select>
        </div>

        {/* Code Snippet */}
        <div className="overflow-y-auto h-[20rem] mb-6">
          <h3 className="text-lg font-bold t4ext-gray-300">Code Example</h3>
          <button
            onClick={copyToClipboard}
            className="relative top-2 xl:left-[62rem] right-2 bg-gray-800 p-2 rounded text-white hover:bg-gray-700 transition"
          >
            {copied ? <FaCheck className="text-green-400" /> : <FaCopy />}
          </button>
          <SyntaxHighlighter
            language={selectedLanguage.toLowerCase()}
            style={darcula}
            className="rounded-lg"
          >
            {codeSnippets[selectedLanguage]}
          </SyntaxHighlighter>
        </div>

        {/* API Response Section */}
        <div className="overflow-y-auto h-60">
          <h3 className="text-lg font-bold text-gray-300">Example Response</h3>
          <SyntaxHighlighter
            language="json"
            style={darcula}
            className="rounded-lg"
          >
            {apiResponses}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default CodeSnippets;

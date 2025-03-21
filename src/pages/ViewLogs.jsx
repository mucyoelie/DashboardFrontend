import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { darcula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { FaCopy, FaCheck } from "react-icons/fa"; // Import icons

const ViewLogs = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("PHP");
  const [copied, setCopied] = useState(false); // Track copied state

  const codeSnippets = {
    PHP: `
    <?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'https://api.mista.io/sms/log/view?from=E-Notifier&status=RECEIVED',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_POSTFIELDS =>'{
    "action": "check-balance",
    "response": "json"
}',
  CURLOPT_HTTPHEADER => array(
    'Content-Type: application/json',
    'Authorization: Bearer 691|noH3oYAbKckuYpgCq30VPquNTu3kUFnWksIwuaZx'
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;

`,

    NodeJS: `
    const axios = require('axios');
let data = JSON.stringify({
  "action": "check-balance",
  "response": "json"
});

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.mista.io/sms/log/view?from=E-Notifier&status=RECEIVED',
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer 691|noH3oYAbKckuYpgCq30VPquNTu3kUFnWksIwuaZx'
  },
  data : data
};

axios.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});

`,

    Python: `
    import requests
import json

url = "https://api.mista.io/sms/log/view?from=E-Notifier&status=RECEIVED"

payload = json.dumps({
  "action": "check-balance",
  "response": "json"
})
headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer 691|noH3oYAbKckuYpgCq30VPquNTu3kUFnWksIwuaZx'
}

response = requests.request("GET", url, headers=headers, data=payload)

print(response.text)

    `,

Go: `package main

import (
  "fmt"
  "strings"
  "net/http"
  "io"
)

func main() {
  url := "https://api.mista.io/sms"
  method := "POST"

  payload := strings.NewReader('{
"recipient":"250780405522",
"sender_id":"E-Notifier",
"type":"plain",
"message":"This is a test message",
"schedule_time": "2025-03-04 14:06"
}')

  client := &http.Client{}
  req, err := http.NewRequest(method, url, payload)
  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("Content-Type", "application/json")
  req.Header.Add("Authorization", "••••••")

  res, err := client.Do(req)
  if err != nil {
    fmt.Println(err)
    return
  }
  defer res.Body.Close()

  body, err := io.ReadAll(res.Body)
  if err != nil {
    fmt.Println(err)
    return
  }
  fmt.Println(string(body))
}`,


  };

  const apiResponses = `
  {
    "status": "success",
    "message": null,
    "data": {
        "current_page": 1,
        "data": [
            {
                "uid": "67c4ad893aa35",
                "to": "250780405522",
                "from": "E-Notifier",
                "message": "Hello from Mr SMS",
                "status": "RECEIVED",
                "cost": "1"
            },
            {
                "uid": "67c572c87e740",
                "to": "250780405522",
                "from": "E-Notifier",
                "message": "Hello from Mr SMS",
                "status": "RECEIVED",
                "cost": "1"
            },
            {
                "uid": "67c6eb434b274",
                "to": "250780405522",
                "from": "E-Notifier",
                "message": "This is a test message",
                "status": "RECEIVED",
                "cost": "1"
            },
            {
                "uid": "67c6ed25a0c2a",
                "to": "250780405522",
                "from": "E-Notifier",
                "message": "This is a test message on group",
                "status": "RECEIVED",
                "cost": "1"
            },
            {
                "uid": "67d6f5a6bc395",
                "to": "250791023994",
                "from": "E-Notifier",
                "message": "Yooo whatsapp this is test message",
                "status": "RECEIVED",
                "cost": "1"
            }
        ],
        "first_page_url": "https://api.mista.io/sms/log/view?page=1",
        "from": 1,
        "last_page": 1,
        "last_page_url": "https://api.mista.io/sms/log/view?page=1",
        "links": [
            {
                "url": null,
                "label": "pagination.previous",
                "active": false
            },
            {
                "url": "https://api.mista.io/sms/log/view?page=1",
                "label": "1",
                "active": true
            },
            {
                "url": null,
                "label": "pagination.next",
                "active": false
            }
        ],
        "next_page_url": null,
        "path": "https://api.mista.io/sms/log/view",
        "per_page": 25,
        "prev_page_url": null,
        "to": 5,
        "total": 5
    }
}
  `;

const copyToClipboard = () => {
  if (codeSnippets[selectedLanguage]) {
    navigator.clipboard.writeText(codeSnippets[selectedLanguage]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }
};


  return (
    <div className="flex flex-col xl:flex-col  xl:w-[70rem] min-h-screen bg-white px-4 py-10 justify-center items-center xl:mt-2 md:mt-2 xl:ml-auto md:w-[85vw] w-[100vw] -ml-10 dark:bg-black">
       {/* Left Section - Documentation Content */}
       <div className="w-full xl:w-[70rem] bg-white p-6  rounded-lg  xl:absolute xl:left-[17rem] xl:h-full">
        <h1 className="text-3xl  mb-4">View log by UID</h1>
        <p className="text-gray-700 mb-4 font-thin">
        Retrieve a specific SMS log by its unique identifier.
        <br/>
        <br/>
          <span className="px-2 py-1 bg-green-200 text-gray-900 rounded text-xs ml-1">
          GET
          </span>
          /sms/log/uid
          <br/>
          Base URL: <span className="text-blue-500">https://api.mista.io/sms/log/view?from=E-Notifier&status=RECEIVED</span>
        </p>

        <h1 className="text-3xl  mb-4">Authentication</h1>
        <div className="bg-gray-200 text-white p-4 rounded-lg text-sm xl:w-full md:w-full lg:w-full w-[82vw] overflow-auto xl:-ml-2" >
          <p className=" text-gray-900">Authorization: Bearer YOUR_API_TOKEN</p>
        </div>

        <h2 className="text-2xl  mt-6">Request Parameters</h2>
        <p className="text-gray-700">
        </p>

        <div className="mt-4 ">
          <div className="flex justify-between border-b py-4 my-4">
            <p className="font-medium">
            uid
            <span className="bg-gray-200 text-gray-900 px-2 py-1 text-xs rounded mx-4 h-6 ">
              String 
            </span>
            <span className="bg-red-200 text-gray-900 px-2 py-1 text-xs rounded mr-[50rem] h-6 ">Required</span>
            <br/>
            <span className="text-gray-700 mb-4 text-sm font-thin">Unique identifier of the SMS log.</span>
          </p>
          </div>

         
          
        </div>
      </div>

      {/* Right Section - Code Block */}
      <div className="w-full bg-gray-900 text-white px-6 py-6 rounded-lg mt-6 xl:mt-0 xl:min-h-screen xl:right-0 xl:w-[38rem] xl:absolute top-[5rem]">
        <div className="flex justify-end items-center mb-4">
          <span className="text-sm text-gray-400">Select Language:</span>
          <select
            className="bg-gray-800 text-white text-sm p-2 rounded-lg border border-gray-700"
            onChange={(e) => setSelectedLanguage(e.target.value)}
            value={selectedLanguage}
          >
            <option value="PHP">PHP</option>
            <option value="NodeJS">NodeJS</option>
            <option value="Python">Python</option>
            <option value="Go">Go</option>
            <option value="Java">Java</option>
          </select>
        </div>

        {/* Code Snippet */}
        <div className="relative overflow-y-auto h-100 mb-6">
          <h3 className="text-lg  text-gray-300">Code Example</h3>
          <button
            onClick={copyToClipboard}
            className="absolute right-4 top-10 bg-gray-800 p-2 rounded text-white hover:bg-gray-700 transition"
          >
            {copied ? <FaCheck className="text-green-400" /> : <FaCopy />}
          </button>
          <SyntaxHighlighter
            language={
              selectedLanguage === "NodeJS" ? "javascript" : selectedLanguage.toLowerCase()
            }
            style={darcula}
            customStyle={{
              background: "#1a1e2c", // Change to your preferred color (e.g., Tailwind `bg-gray-800`)
             
            }}
            className="rounded-lg text-sm"
          >
            {codeSnippets[selectedLanguage]}
          </SyntaxHighlighter>
        </div>

        {/* API Response Section */}
        <div className="overflow-y-auto h-100 text-sm">
          <h3 className="text-lg  text-gray-300">Example Response</h3>
          <SyntaxHighlighter
            language="json"
            style={darcula}
            customStyle={{
              background: "#1a1e2c", // Change to your preferred color (e.g., Tailwind `bg-gray-800`)
             
            }}
            className="rounded-lg"
          >
            {apiResponses}
          </SyntaxHighlighter>
        </div>
      </div>
    </div>
  );
};

export default ViewLogs;


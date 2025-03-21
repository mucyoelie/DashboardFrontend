import { FaBookOpen, FaPlusCircle, FaLayerGroup } from "react-icons/fa";

const WebHook = () => {
  const topics = [
    {
      title: "Calling a Webhook",
      description:
        "Use webhooks to send flow data as JSON to external services when contacts reach a Call Webhook action.",
      icon: <FaBookOpen className="text-green-600 text-xl" />,
      button: "Biginner",
      bgColor: "bg-green-100 text-green-700",
    },
    {
      title: "Configuring a Webhook with Airtable",
      description:
        "Connect your flows to Airtable to store and organize contact data in customizable databases.",
      icon: <FaPlusCircle className="text-green-600 text-xl" />,
      button: "Biginner",
      bgColor: "bg-green-100 text-green-700",
    },
    {
      title: "Zapier Integration",
      description:
        "Connect Flow Studio with thousands of apps through Zapier to extend the capabilities of your flows.",
      icon: <FaLayerGroup className="text-green-600 text-xl" />,
      button: "Intermediate",
      bgColor: "bg-blue-100 text-blue-700",
    },
    {
        title: "Google Sheets Integration",
        description:
          "Send flow data directly to Google Sheets to track responses, collect survey results, or manage contact information.",
        icon: <FaLayerGroup className="text-green-600 text-xl" />,
        button: "Intermediate",
        bgColor: "bg-blue-100 text-blue-700",
      },
     
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 xl:ml-60">
      <h2 className="text-2xl font-medium text-green-700 flex items-center gap-2 mb-6">
        📗 Webhooks & Integrations
        
      </h2>
      <p className="text-gray-600 mb-6">
      Integrate your flows with external services and applications using webhooks.
      </p>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:-mr-40">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 border border-gray-200"
          >
            <div className="flex items-center gap-2 mb-3">
              {topic.icon}
              <h3 className="text-lg  text-green-700">{topic.title}</h3>
            </div>
            <p className="text-gray-600">{topic.description}</p>
            <span className={`mt-3 inline-block text-green-700 px-3 py-1 text-sm rounded-full ${topic.bgColor}`}>
              {topic.button}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebHook;
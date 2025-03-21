import { FaBookOpen, FaPlusCircle, FaLayerGroup } from "react-icons/fa";

const Channels = () => {
  const topics = [
    {
      title: "Introduction to Channels",
      description:
        "Channels are how you engage with your contacts through different communication platforms like SMS, WhatsApp, and more.",
      icon: <FaBookOpen className="text-green-600 text-xl" />,
       button:" Beginner",
       bgColor: "bg-green-100 text-green-700",
       
    },
    {
      title: "Adding a Telegram Channel",
      description:
        "Connect your Flow Studio account to Telegram to engage with contacts through this popular messaging platform.",
      icon: <FaPlusCircle className="text-green-600 text-xl" />,
       button:" Beginner",
       bgColor: "bg-green-100 text-green-700",
    },
    {
      title: "SMS Channel Configuration",
      description:
        "Set up and configure SMS as a communication channel for your flows to reach contacts via text messages.",
      icon: <FaLayerGroup className="text-green-600 text-xl" />,
       button:" Beginner",
       bgColor: "bg-green-100 text-green-700",
    },
    {
        title: "WhatsApp Integration",
        description:
          "Connect your Flow Studio account with WhatsApp Business API to engage with contacts through WhatsApp messaging.",
        icon: <FaLayerGroup className="text-green-600 text-xl" />,
         button:"Intermediate",
         bgColor: "bg-blue-100 text-blue-700",
      },
      {
        title: "Voice (IVR) Channel Setup",
        description:
          "Configure Interactive Voice Response (IVR) to create automated phone call workflows for your contacts.",
        icon: <FaLayerGroup className="text-green-600 text-xl" />,
         button:"Intermediate",
         bgColor: "bg-blue-100 text-blue-700",
      },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 xl:ml-60">
      <h2 className="text-2xl font-medium text-green-700 flex items-center gap-2 mb-6">
        📗 Channels
      </h2>
      <p className="text-gray-600 mb-6">
      Connect with your contacts through various communication channels like SMS, WhatsApp, and Telegram.
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
            <span className={`mt-3 inline-block t px-3 py-1 text-sm rounded-full ${topic.bgColor}`}>
              {topic.button}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Channels;

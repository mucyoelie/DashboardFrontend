import { 
  MessageSquare,
  Bolt,
  PlayCircle,
  AlertTriangle,
  Send,
} 
from "lucide-react";

const Messages = () => {
  const topics = [
    {
      title: "Sending Messages with a Flow",
      description:
        "Create Send Message actions that will automatically deliver messages when a contact reaches that node in the flow.",
      icon: <Send className="text-green-600 text-xl" />,
      button:" Beginner",
      bgcolor:"bg-green-100 text-green-700"
    },
    {
      title: "Message Templates",
      description:
        "Create reusable message templates to maintain consistency and save time when building flows.",
      icon: <Bolt className="text-green-600 text-xl" />,
      button:" Intermediate",
      bgcolor:"bg-blue-100 text-blue-700"
    },
    {
      title: " Rich Media Messages",
      description:
        " Enhance your communication by sending images, videos, documents, and other media types in your flows.",
      icon: <AlertTriangle className="text-green-600 text-xl" />,
      button:" Intermediate",
       bgcolor:"bg-blue-100 text-blue-700"
    },
    {
        title: "Multi-Language Messaging",
        description:
          "Configure your flows to send messages in different languages based on contact preferences.",
        icon: <PlayCircle className="text-green-600 text-xl" />,
        button:" Advanced",
         bgcolor:"bg-gray-100 text-gray-800"
      },
     
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 xl:ml-60">
      <h2 className="text-2xl font-medium text-green-700 flex items-center gap-2 mb-6">
      < MessageSquare  className="text-[#2e8b57]" size={16} /> Messages
      </h2>
      <p className="text-gray-600 mb-6">
      Create and send messages through your flows with support for templates and rich media.
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
            <span className={`mt-3 inline-block  px-3 py-1 text-sm rounded-full ${topic.bgcolor}`}>
              {topic.button}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Messages;
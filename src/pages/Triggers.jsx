import { FaBookOpen, FaPlusCircle, FaLayerGroup } from "react-icons/fa";

const Triggers = () => {
  const topics = [
    {
      title: "Introduction to Triggers",
      description:
        "Triggers allow you to control how or when a flow begins automatically based on specific events or conditions.",
      icon: <FaBookOpen className="text-green-600 text-xl" />,
      button: "Beginner",
      bgColor: "bg-green-100 text-green-700",
    },
    {
      title: "Keyword Triggers",
      description:
        "Set up keyword triggers to allow contacts to start flows automatically by sending specific words or phrases.",
      icon: <FaPlusCircle className="text-green-600 text-xl" />,
      button: "Biginner",
      bgColor: "bg-green-100 text-green-700",
    },
    {
      title: "Scheduled Triggers",
      description:
        "Create triggers that start flows at specific times or on a recurring schedule for automated campaigns.",
      icon: <FaLayerGroup className="text-green-600 text-xl" />,
      button: "Intermediate",
      bgColor: "bg-blue-100 text-blue-700",
    },
    {
      title: "API Triggers",
      description:
        "Use the Flow Studio API to programmatically trigger flows from external systems and applications.",
      icon: <FaLayerGroup className="text-green-700 text-xl" />,
      button: "Intermediate",
      bgColor: "bg-blue-100 text-blue-700",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 xl:ml-60">
      <h2 className="text-2xl font-medium text-green-700 flex items-center gap-2 mb-6">
        📗 Triggers
      </h2>
      <p className="text-gray-600 mb-6">
        Set up automatic flow triggers based on keywords, schedules, or API
        calls.
      </p>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 xl:-mr-40">
        {topics.map((topic, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 border border-gray-200"
          >
            <div className="flex items-center gap-2 mb-3">
              {topic.icon}
              <h3 className="text-lg text-green-700">{topic.title}</h3>
            </div>
            <p className="text-gray-600">{topic.description}</p>
            <span
              className={`mt-3 inline-block px-3 py-1 text-sm rounded-full ${topic.bgColor}`}
            >
              {topic.button}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Triggers;

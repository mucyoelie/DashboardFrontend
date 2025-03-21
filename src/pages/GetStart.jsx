import { FaBookOpen, FaPlusCircle, FaLayerGroup } from "react-icons/fa";

const GetStart = () => {
  const topics = [
    {
      title: "Introduction to Flow Studio",
      description:
        "Learn the basics of Flow Studio and how it can help you create interactive communication workflows for your business or organization.",
      icon: <FaBookOpen className="text-green-600 text-xl" />,
    },
    {
      title: "Creating Your First Flow",
      description:
        "A step-by-step guide to creating your first communication flow, from naming and setup to publishing and testing.",
      icon: <FaPlusCircle className="text-green-600 text-xl" />,
    },
    {
      title: "Flow Studio Interface Overview",
      description:
        "Explore the Flow Studio interface including the canvas, toolbar, and properties panel to become familiar with the workspace.",
      icon: <FaLayerGroup className="text-green-600 text-xl" />,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 xl:ml-60">
      <h2 className="text-2xl font-medium text-green-700 flex items-center gap-2 mb-6">
        📗 Getting Started
      </h2>
      <p className="text-gray-600 mb-6">
        Get started with Flow Studio and learn the basics of creating interactive communication workflows.
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
            <span className="mt-3 inline-block text-green-700 bg-green-100 px-3 py-1 text-sm rounded-full">
              Beginner
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GetStart;

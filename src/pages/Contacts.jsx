import { FaBookOpen, FaPlusCircle, FaLayerGroup } from "react-icons/fa";

const Contacts = () => {
  const topics = [
    {
      title: "Contact Variables",
      description:
        "Use @contact to reference the active contact in your flows and access their stored information and history.",
      icon: <FaBookOpen className="text-green-600 text-xl" />,
      button:"Beginner",
      bgColor:"bg-green-100 text-green-700",
    },
    {
      title: "Creating and Managing Contact Groups",
      description:
        "Organize your contacts into groups for easier targeting and management of your communication campaigns.",
      icon: <FaPlusCircle className="text-green-600 text-xl" />,
      button:" Intermediate",
      bgColor: "bg-blue-100 text-blue-700",
    },
    {
      title: "Contact Fields and Attributes",
      description:
        "Store and manage custom information about your contacts using fields that can be referenced in your flows.",
      icon: <FaLayerGroup className="text-green-600 text-xl" />,
      button:" Intermediate",
      bgColor: "bg-blue-100 text-blue-700",
    },
    {
        title: "Importing and Exporting Contacts",
        description:
          "Add contacts to your account by importing CSV files or export your contact database for external use.",
        icon: <FaLayerGroup className="text-green-600 text-xl" />,
        button:" Intermediate",
        bgColor: "bg-blue-100 text-blue-700",
      },
     
  ];

  return (
    <div className="max-w-5xl mx-auto p-6 xl:ml-60">
      <h2 className="text-2xl font-medium text-green-700 flex items-center gap-2 mb-6">
        📗 Contacts
      </h2>
      <p className="text-gray-600 mb-6">
      Manage your contacts, groups, and contact information to better target your communications.
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
            <span className={`mt-3 inline-block  px-3 py-1 text-sm rounded-full ${topic.bgColor}`}>
              {topic.button}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;

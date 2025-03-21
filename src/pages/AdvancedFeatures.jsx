import {
  Globe,
  Layout,
  ClipboardList,
  Zap,
  Layers,
  Settings,
} from "lucide-react"

const AdvancedFeatures = () => {
  const topics = [
    {
      title: "Background Flows",
      description:
        "Use Background Flows to perform actions that don't require contact responses, allowing contacts to remain active in messaging flows.",
      icon: <Layers className="text-green-600 text-xl" />,
      button:"Intermediate",
      bgcolor:"bg-blue-100 text-blue-700",
    },
    {
      title: "Regular Expressions",
      description:
        "Use Perl-style regular expressions to create advanced pattern matching rules in your flow logic.",
      icon: <Zap className="text-green-600 text-xl" />,
      button:"Advanced",
      bgcolor:"bg-gray-100 text-gray-800",
    },
    {
      title: "Flow Results and Analytics",
      description:
        "Access and analyze flow results to gain insights into contact engagement and response patterns.",
      icon: <ClipboardList className="text-green-600 text-xl" />,
      button:"Intermediate",
      bgcolor:"bg-blue-100 text-blue-700",
    },
    {
        title: "Global Variables",
        description:
          "Create and manage shared values that can be referenced across multiple flows, broadcasts, and campaigns.",
        icon: <Globe className="text-green-600 text-xl" />,
        button:"Intermediate",
        bgcolor:"bg-blue-100 text-blue-700",
        
      },
      {
        title: "Adding Timeouts to Flows",
        description:
          "Configure timeouts to automatically send messages or take actions when contacts don't respond within a specified period.",
        icon: <Layout className="text-green-600 text-xl" />,
        button:"Intermediate",
        bgcolor:"bg-blue-100 text-blue-700",
        
      },
     
  ];

  return (
    <div className="max-w-5xl  mx-auto p-6 xl:ml-60">
      <h2 className="text-2xl font-medium text-green-700 flex items-center gap-2 mb-6">
      <Settings  className="text-[#2e8b57]" size={16} /> Advanced Features
      </h2>
      <p className="text-gray-600 mb-6">
      Explore advanced features and techniques to get the most out of Flow Studio.
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

export default AdvancedFeatures;

import{
  MessageSquare,
  Languages,
  GitMerge,
  GitBranch,
  Users
 }
 from "lucide-react"

const Flows = () => {
  const topics = [
    {
      title: "Flow Types",
      description:
        "Understand the different types of flows available: Messaging Flows, Background Flows, Voice Flows, and more.",
      icon: <Users className="text-green-600 text-xl" />,
      button:"Beginner",
      bgColor: "bg-green-100 text-green-700",
    },
    {
      title: "Actions and Nodes",
      description:
        "Learn about the building blocks of flows: nodes composed of actions that determine how contacts move through your workflow.",
      icon: <GitMerge className="text-green-600 text-xl" />,
      button:" Beginner",
      bgColor: "bg-green-100 text-green-700",
    },
    {
      title: "Split Actions",
      description:
        "Use Split Actions to create branching logic in your flows based on contact responses, variables, or other conditions.",
      icon: <MessageSquare className="text-green-600 text-xl" />,
      button:" Beginner",
      bgColor: "bg-green-100 text-green-700",
    },
    {
        title: "Wait for Response",
        description:
          "Configure your flow to pause and wait for user input before proceeding to the next step in the workflow.",
        icon: <Languages className="text-green-600 text-xl" />,
        button:" Intermediate",
        bgColor: "bg-blue-100 text-blue-700",
      },
      {
        title: "Starting a Flow",
        description:
          "Learn the different ways to start a flow: manually, through triggers, via API, or from another flow.",
        icon: <Languages className="text-green-600 text-xl" />,
        button:"Intermediate",
        bgColor: "bg-blue-100 text-blue-700",
      },
      {
        title: "Flow Variables",
        description:
          "Understand how to use variables in your flows to store and reference information throughout the contact journey.",
        icon: <Languages className="text-green-600 text-xl" />,
        button:"Intermediate",
        bgColor: "bg-blue-100 text-blue-700",
      },
      {
        title: "Exporting and Importing Flows",
        description:
          "Share flows between accounts or create backups by exporting and importing flow definitions.",
        icon: <Languages className="text-green-600 text-xl" />,
        button:"Advanced",
        bgColor: "bg-gray-100 text-gray-700",
      },

  ];

  return (
    <div className="max-w-6xl mx-auto p-6 xl:ml-40 2xl:ml-60 xl:mr-40 2xl:max-w-7xl xl:max-w-5xl">
      <h2 className="text-2xl font-medium text-green-700 flex items-center gap-2 mb-6">
      < GitBranch className="text-[#2e8b57]" size={24}/> Flows
      </h2>
      <p className="text-gray-600 mb-6">
      Build and manage your communication flows with actions, nodes, and branching logic.
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

export default Flows;

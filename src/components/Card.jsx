import { Link } from "react-router-dom";
import { FaEnvelope, FaPhone } from "react-icons/fa";


const Card = () => {
  const apis = [
    {
      icon:<FaEnvelope className="text-green-600 text-2xl my-4" />,
      title: "SMS API",
      description: "Send and manage messages effortlessly with our powerful SMS API.",
      features: [
        "Send SMS to multiple recipients",
        "Schedule messages for future delivery",
        "Manage contact groups",
        "Track delivery status",
      ],
      link: "/sms-api/introduction", // Route for SMS API page
    },
    {
      icon:<FaPhone className="text-green-600 text-2xl my-4" />,
      title: "USSD API",
      description: "Create interactive USSD applications with our easy-to-use USSD API.",
      features: [
        "Send SMS to multiple recipients",
        "Schedule messages for future delivery",
        "Manage contact groups",
        "Track delivery status",
      ],
      link: "/ussd-api", // Route for USSD API page
    },
    {
      icon:<FaEnvelope className="text-green-600 text-2xl my-4" />,
      title: " Flow Studio",
      description: "Design and automate communication workflows with our Flow Studio API.",

      features: [
        "Send SMS to multiple recipients",
        "Schedule messages for future delivery",
        "Manage contact groups",
        "Track delivery status",
      ],
      link: "/flow-studio/get-start", // Route for Use Case page
    },
  ];

  return (
    <div className="flex flex-col xl:flex-row justify-between gap-8 p-10 bg-white dark:bg-black dark:text-white">
      {apis.map((api, index) => (
        <div key={index} className="bg-white shadow-lg rounded-xl p-6 text-center border border-gray-200 max-w-sm  w-80 lg:w-80 xl:w-[70rem] text-start h-[25rem]">
          {api.icon}
          <h1 className="text-black text-xl font-medium text-start">{api.title}</h1>
          <p className="text-[#B0B0B0] mt-2 text-start">{api.description}</p>
           {/* Features List */}
        
           <ul className="list-disc list-inside text-gray-600 mt-3 text-start ">
            {api.features.map((feature, i) => (
              <li key={i} className="text-sm py-1">{feature}</li>
            ))}
          </ul>
          <Link to={api.link}>
            <button className="mt-4 px-6 py-2 border  text-white rounded-lg hover:bg-[#006242] w-full bg-[#2e8b57]">
              View docs 
            </button>
          </Link>
        </div>
      ))}
      
    </div>
  );
};

export default Card;

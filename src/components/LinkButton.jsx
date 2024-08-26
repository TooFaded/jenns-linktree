import React from "react";

function LinkButton({
  url,
  text,
  icon: Icon,
  bgColor = "bg-white",
  textColor = "text-primary",
}) {
  return (
    <a
      href={url}
      className={`flex items-center justify-center w-full px-6 py-2 my-2 text-center font-poppins font-normal ${textColor} ${bgColor} rounded-3xl transition-colors duration-300 hover:bg-gray-200 hover:shadow-inner-custom relative`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex-grow-0">
        <Icon className="text-xl" />
      </div>
      <span className="flex-grow text-center">{text}</span>
      <div className="flex-grow-0 opacity-0"></div>
    </a>
  );
}

export default LinkButton;

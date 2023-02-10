import React, { useState } from "react";

function Section({ title, description, isVisible, setIsVisible }) {
  //   const [isVisible, setIsVisible] = useState(false);
  const handleShow = () => {
    setIsVisible(!isVisible);
  };
  return (
    <div className="border border-black p-2 m-2">
      <div className="flex gap-2">
        {" "}
        <h1 className="text-2xl font-bold"> {title}</h1>{" "}
        <button onClick={handleShow} className="bg-blue-300 p-1 rounded-md">
          {isVisible ? "Hide" : "Show"}
        </button>
      </div>
      {isVisible && <div>{description}</div>}
    </div>
  );
}
const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("first");
  return (
    <div>
      <Section
        title={"First"}
        description={
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isVisible={visibleSection === "first"}
        setIsVisible={() => setVisibleSection("first")}
      />
      <Section
        title={"Second"}
        description={
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isVisible={visibleSection === "second"}
        setIsVisible={() => setVisibleSection("second")}
      />
      <Section
        title={"Third"}
        description={
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isVisible={visibleSection === "third"}
        setIsVisible={() => setVisibleSection("third")}
      />
    </div>
  );
};

export default Instamart;

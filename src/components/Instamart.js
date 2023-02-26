import React, { useState } from "react";
import Section from "./Section";

const Instamart = () => {
  const [visibleSection, setVisibleSection] = useState("");
  return (
    <div>
      <Section
        title={"First"}
        description={
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isVisible={visibleSection === "first"}
        setIsVisible={(prev) => {
          prev ? setVisibleSection("first") : setVisibleSection("");
        }}
      />
      <Section
        title={"Second"}
        description={
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isVisible={visibleSection === "second"}
        setIsVisible={(prev) => {
          prev ? setVisibleSection("second") : setVisibleSection("");
        }}
      />
      <Section
        title={"Third"}
        description={
          "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        isVisible={visibleSection === "third"}
        setIsVisible={(prev) => {
          prev ? setVisibleSection("third") : setVisibleSection("");
        }}
      />
    </div>
  );
};

export default Instamart;

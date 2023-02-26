function Section({ title, description, isVisible, setIsVisible }) {
  // const [isVisible, setIsVisible] = useState(false);
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

export default Section;

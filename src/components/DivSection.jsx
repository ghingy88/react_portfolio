const DivSection = ({ title, children }) => {
  return (
    <div className="custom-div">
      <h1 className="text-9xl">{title}</h1>
      {children}
    </div>
  );
};
  export default DivSection;
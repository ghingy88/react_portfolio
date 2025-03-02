const Title  = ({ title, children }) => {
  return (
    <div className="custom-div">
      <h1 className="text-4xl pb-2 underline mx-auto max-w-7xl xl:text-left text-center">{title}</h1>
      {children}
    </div>
  );
};
  export default Title;
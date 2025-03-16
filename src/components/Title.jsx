const Title  = ({ title, children }) => {
  return (
    <div className="custom-div">
      <h1 className="text-4xl pt-2 xl:text-left text-center">{title}</h1>
      <hr className="w-full pb-2"/>
      {children}
    </div>
  );
};
  export default Title;
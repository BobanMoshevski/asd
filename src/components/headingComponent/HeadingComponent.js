const HeadingComponent = ({ headingDetails, idScroll }) => {
  return (
    <h2 id={idScroll} className={headingDetails.headingClassName}>
      {headingDetails.heading}
    </h2>
  );
};

export default HeadingComponent;

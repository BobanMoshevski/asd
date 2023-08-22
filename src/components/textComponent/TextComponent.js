const TextComponent = ({ content, alignLeft, alignRight }) => {
  const isAlignLeft = alignLeft === "left" ? alignLeft : alignRight;

  return (
    <p
      className="font-color text-font"
      style={{
        textAlign: isAlignLeft,
      }}
    >
      {content}
    </p>
  );
};

export default TextComponent;

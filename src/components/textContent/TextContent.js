import TextComponent from "../textComponent/TextComponent";

const TextContent = ({ textDetails }) => {
  return (
    <div className={textDetails.textClassName}>
      <TextComponent content={textDetails.textContent} />
    </div>
  );
};

export default TextContent;

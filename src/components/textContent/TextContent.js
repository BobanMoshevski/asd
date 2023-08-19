import { motion } from "framer-motion";
import { Box } from "@mui/material";
import TextComponent from "../textComponent/TextComponent";

const TextContent = ({ textDetails }) => {
  return (
    <motion.div
      initial={{ x: -500, opacity: 0 }}
      animate={{ x: -100, opacity: 1 }}
      transition={{ duration: 3.5, delay: 1 }}
    >
      <Box
        className={textDetails.textClassName}
        sx={{
          width: "30%",
          marginTop: textDetails.textMarginTop,
          marginLeft: textDetails.textMarginLeft,
        }}
      >
        <TextComponent content={textDetails.textContent} />
      </Box>
    </motion.div>
  );
};

export default TextContent;

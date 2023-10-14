import { Box, Typography } from "@mui/material";
import Image from "mui-image";

const banner = (props) => {
  const { title, text, image } = props;

  return (
    <Box
      sx={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        height: "50vh",
        backgroundColor: "#fff",
        overflow: "auto",
      }}
    >
      <Image
        src={image}
        alt={title}
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
      />
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Typography variant="h1" component="h1" fontWeight={700}>
          {title}
        </Typography>
        <Typography variant="h6" component="h6">
          {text}
        </Typography>
      </Box>
    </Box>
  );
};

export default banner;

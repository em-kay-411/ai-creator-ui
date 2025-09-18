import { Container, Typography, Box } from "@mui/material";

function MainContent() {
  return (
    <Container
      maxWidth={false}
      sx={{
        borderRadius: "16px",   // rounded corners
        border: "2px solid #ccc", // light border
        padding: 3,              // spacing inside
        boxShadow: 3,            // subtle shadow
        backgroundColor: "#3f2513", // white background
        textAlign: "center",     // center content
        mt: 5,                   // margin from top
        color : "#f3e3d8",
        fontFamily : "Times New Roman",
        height : "100vh",
        zIndex : "2"
      }}
    >
      <Typography variant="h4" gutterBottom>
        Under Construction
      </Typography>

      <Typography variant="body1" gutterBottom>
        Launching Soon...
      </Typography>

      {/* <Box
        component="img"
        src="https://via.placeholder.com/300"
        alt="Sample"
        sx={{
          borderRadius: "12px",
          width: "100%",
          height: "auto",
          mt: 2,
        }}
      />

      <Box
        component="img"
        src="https://via.placeholder.com/150"
        alt="Small Sample"
        sx={{
          borderRadius: "50%",
          width: "150px",
          height: "150px",
          mt: 2,
        }}
      /> */}
    </Container>
  );
}

export default MainContent;

import { Box, Container } from "@mui/material";
import AutoTopUp from "./components/AutoTopUp";

function App() {
  return (
    <Box  sx={{ backgroundColor: "#efefef",minHeight: "90vh" }}>
      <Container maxWidth="md">
      <AutoTopUp />
       </Container>
    </Box>
  );
}

export default App;

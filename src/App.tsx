import { Container } from "@mui/material";
import AutoTopUp from "./components/AutoTopUp";

function App() {
  return (
    <Container maxWidth="xl" sx={{ backgroundColor: "#efefef",minHeight: "96vh" }}>
      <Container maxWidth="lg">
      <AutoTopUp />
       </Container>
    </Container>
  );
}

export default App;

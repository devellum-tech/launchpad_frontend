import "@/styles/globals.css";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Box
        sx={{
          width: '100%',
          mx: 'auto',
          px: 2,
          '@media (min-width: 900px)': {
            maxWidth: '80%',
          },
        }}
      >
        <Component {...pageProps} />
      </Box>
    </>
  );
}

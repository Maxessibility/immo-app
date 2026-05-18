import type { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Typography,
  Link as MuiLink,
} from "@mui/material";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Box className="app">
      <a className="skip-link" href="#main">
        Aller au contenu
      </a>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <MuiLink component={Link} to="/" color="inherit" underline="none">
              <Typography variant="h6" fontWeight={700}>
                Immo App
              </Typography>
            </MuiLink>
            <Box component="nav" aria-label="Navigation principale">
              <MuiLink
                component={Link}
                to="/"
                color="inherit"
                underline="hover"
                sx={{ fontWeight: 500 }}
              >
                Annonces
              </MuiLink>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>

      <Container component="main" id="main" sx={{ py: 4, flex: 1 }}>
        {children}
      </Container>

      <Box component="footer" sx={{ bgcolor: "#0f172a", color: "#fff", py: 2 }}>
        <Container>
          <Typography variant="body2">© 2026 Immo App — Démo</Typography>
        </Container>
      </Box>
    </Box>
  );
}

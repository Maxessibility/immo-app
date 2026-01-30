import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Alert,
  Box,
  Card,
  CardActions,
  CardContent,
  Chip,
  Stack,
  Typography,
  Button,
} from "@mui/material";
import type { Property } from "../types/property";
import { fetchProperties } from "../services/api";

export default function Home() {
  const [items, setItems] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProperties()
      .then(setItems)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Typography>Chargement des annonces…</Typography>;
  if (error) return <Alert severity="error">Erreur : {error}</Alert>;

  return (
    <Box component="section" aria-labelledby="listing-title">
      <Typography id="listing-title" variant="h4" gutterBottom>
        Annonces disponibles
      </Typography>
      <Box
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
          },
        }}
      >
        {items.map((p) => (
          <Card key={p.id} variant="outlined">
            <CardContent>
              <Typography variant="h6" gutterBottom>
                {p.title}
              </Typography>
              <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                <Chip label={p.type === "HOUSE" ? "Maison" : "Appartement"} size="small" />
                <Chip label={`${p.surface} m²`} size="small" />
                <Chip label={`${p.rooms} pièces`} size="small" />
              </Stack>
              <Typography variant="h5" fontWeight={700}>
                {p.price.toLocaleString()} €
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                component={Link}
                to={`/properties/${p.id}`}
                size="small"
                variant="contained"
              >
                Voir le détail
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Box>
  );
}

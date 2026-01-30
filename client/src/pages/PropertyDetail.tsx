import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Alert,
  Box,
  Button,
  Chip,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import type { Property } from "../types/property";
import { fetchProperty } from "../services/api";

export default function PropertyDetail() {
  const { id } = useParams();
  const [item, setItem] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    fetchProperty(id)
      .then(setItem)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Typography>Chargement du bien…</Typography>;
  if (error) return <Alert severity="error">Erreur : {error}</Alert>;
  if (!item) return <Typography>Bien introuvable.</Typography>;

  return (
    <Box component="section" aria-labelledby="property-title">
      <Button component={Link} to="/" variant="text" sx={{ mb: 2 }}>
        ← Retour aux annonces
      </Button>
      <Typography id="property-title" variant="h4" gutterBottom>
        {item.title}
      </Typography>

      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
        <Chip label={item.type === "HOUSE" ? "Maison" : "Appartement"} />
        <Chip label={`${item.surface} m²`} />
        <Chip label={`${item.rooms} pièces`} />
        <Chip label={item.status === "SALE" ? "Vente" : "Location"} />
      </Stack>

      <Typography variant="h5" fontWeight={700} gutterBottom>
        {item.price.toLocaleString()} €
      </Typography>

      {item.description && <Typography>{item.description}</Typography>}

      <Divider sx={{ my: 3 }} />

      <Stack direction="row" spacing={4}>
        <Box>
          <Typography variant="subtitle2">Chambres</Typography>
          <Typography>{item.bedrooms ?? "—"}</Typography>
        </Box>
        <Box>
          <Typography variant="subtitle2">Statut</Typography>
          <Typography>{item.status === "SALE" ? "Vente" : "Location"}</Typography>
        </Box>
      </Stack>
    </Box>
  );
}

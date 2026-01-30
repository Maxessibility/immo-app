import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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

  if (loading) return <p>Chargement du bien…</p>;
  if (error) return <p role="alert">Erreur : {error}</p>;
  if (!item) return <p>Bien introuvable.</p>;

  return (
    <section aria-labelledby="property-title">
      <Link to="/" className="link">
        ← Retour aux annonces
      </Link>
      <h1 id="property-title">{item.title}</h1>
      <p className="card__meta">
        {item.surface} m² · {item.rooms} pièces · {item.type === "HOUSE" ? "Maison" : "Appartement"}
      </p>
      <p className="card__price">{item.price.toLocaleString()} €</p>
      {item.description && <p>{item.description}</p>}

      <dl className="specs">
        <div>
          <dt>Statut</dt>
          <dd>{item.status === "SALE" ? "Vente" : "Location"}</dd>
        </div>
        <div>
          <dt>Chambres</dt>
          <dd>{item.bedrooms ?? "—"}</dd>
        </div>
      </dl>
    </section>
  );
}

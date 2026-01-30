import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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

  if (loading) return <p>Chargement des annonces…</p>;
  if (error) return <p role="alert">Erreur : {error}</p>;

  return (
    <section aria-labelledby="listing-title">
      <h1 id="listing-title">Annonces disponibles</h1>
      <div className="grid">
        {items.map((p) => (
          <article key={p.id} className="card">
            <div className="card__body">
              <h2 className="card__title">{p.title}</h2>
              <p className="card__meta">
                {p.surface} m² · {p.rooms} pièces · {p.type === "HOUSE" ? "Maison" : "Appartement"}
              </p>
              <p className="card__price">{p.price.toLocaleString()} €</p>
            </div>
            <div className="card__actions">
              <Link to={`/properties/${p.id}`} className="button">
                Voir le détail
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

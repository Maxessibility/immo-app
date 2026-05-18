import type { Property } from "../types/property";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:4000";

export async function fetchProperties(): Promise<Property[]> {
  const res = await fetch(`${API_BASE}/api/properties`);
  if (!res.ok) throw new Error("Failed to load properties");
  return res.json();
}

export async function fetchProperty(id: string): Promise<Property> {
  const res = await fetch(`${API_BASE}/api/properties/${id}`);
  if (!res.ok) throw new Error("Failed to load property");
  return res.json();
}

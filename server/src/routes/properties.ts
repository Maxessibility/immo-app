import { Router } from "express";
import multer from "multer";
import path from "path";
import { prisma } from "../prisma";
import {
  propertyCreateSchema,
  propertyUpdateSchema,
} from "../validation/property";

const router = Router();

const uploadDir = path.join(process.cwd(), "uploads");
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => cb(null, uploadDir),
  filename: (_req, file, cb) => {
    const ext = path.extname(file.originalname);
    const name = `${Date.now()}-${Math.round(Math.random() * 1e9)}${ext}`;
    cb(null, name);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const allowed = ["image/jpeg", "image/png", "image/webp"];
    cb(null, allowed.includes(file.mimetype));
  },
});

router.get("/", async (_req, res) => {
  const properties = await prisma.property.findMany({
    include: { images: true },
    orderBy: { createdAt: "desc" },
  });
  res.json(properties);
});

router.get("/:id", async (req, res) => {
  const property = await prisma.property.findUnique({
    where: { id: req.params.id },
    include: { images: true },
  });

  if (!property) return res.status(404).json({ error: "Not found" });
  res.json(property);
});

router.post("/", upload.array("images", 5), async (req, res) => {
  const parsed = propertyCreateSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.flatten() });
  }

  const imageFiles = (req.files as Express.Multer.File[]) || [];
  const images = imageFiles.map((f) => ({ url: `/uploads/${f.filename}` }));

  const property = await prisma.property.create({
    data: {
      ...parsed.data,
      images: { create: images },
    },
    include: { images: true },
  });

  res.status(201).json(property);
});

router.put("/:id", upload.array("images", 5), async (req, res) => {
  const parsed = propertyUpdateSchema.safeParse(req.body);
  if (!parsed.success) {
    return res.status(400).json({ error: parsed.error.flatten() });
  }

  const imageFiles = (req.files as Express.Multer.File[]) || [];
  const images = imageFiles.map((f) => ({ url: `/uploads/${f.filename}` }));

  const property = await prisma.property.update({
    where: { id: req.params.id },
    data: {
      ...parsed.data,
      images: images.length ? { create: images } : undefined,
    },
    include: { images: true },
  });

  res.json(property);
});

router.delete("/:id", async (req, res) => {
  await prisma.property.delete({ where: { id: req.params.id } });
  res.status(204).send();
});

export default router;

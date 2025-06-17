import express from 'express';
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

// define the home page route.. 
router.get('/', (req, res) => {
  res.redirect("/hello-world");
});

router.get("/hello-world", (req,res) => {
  res.redirect("/hello-word.json");
});

router.get("/hello-word.json", (req,res) => {
  res.redirect("/hello-world.png");
});
// Animals..
router.get('/cute-bear', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "cute-bear.png"));
});
router.get('/elephant', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "elephant.PNG"));
});
router.get('/peeking-animal', (req, res) => {
  res.sendFile(path.join(__dirname, "..", "public", "peeking-animal.png"));
});

router.use((req, res) => {
  res.status(404).send(`${req.method} is not supported on ${req.path}`);
});

export default router;

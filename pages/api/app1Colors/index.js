import { app1Colors } from "../../../data/app1Colors";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(app1Colors);
  }
  return false;
}

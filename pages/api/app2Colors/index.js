import { app2Colors } from "../../../data/app2Colors";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(app2Colors);
  }
  return false;
}

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === "GET") {
    return res.status(200).json({ name: "John Doe" });
  } else if (req.method === "POST") {
    return res.status(200).json({ name: "idk what that is" });
  } else {
    return res.status(404).json({ name: "Doe John" });
  }
}

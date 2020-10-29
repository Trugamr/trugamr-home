import { NextApiRequest, NextApiResponse } from "next"

const handler =  (req: NextApiRequest, res: NextApiResponse) => {
  res.statusCode = 200
  res.json({ message: 'herro 🌊🌸', ...req.body })
}

export default handler

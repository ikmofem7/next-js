import { NextApiRequest, NextApiResponse } from "next/types";

type Data = {
  name: string;
};
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.json({ name: "John Doe" });
}

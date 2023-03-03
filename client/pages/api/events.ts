// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {data} from "data";
import type {NextApiRequest, NextApiResponse} from "next";

export type Data = {
  id: number;
  name: string;
  slug: string;
  address: string;
  description: string;
  time: string;
  date: string;
  image: string;
};

export default function events(
  req: NextApiRequest,
  res: NextApiResponse<Data[] | string>
) {
  if (req.method === "GET") {
    res.status(200).json(data);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json(`${req.method} is not allowed`);
  }
}

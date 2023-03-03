// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import {data} from "data";
import type {NextApiRequest, NextApiResponse} from "next";

import {Data} from "./events";

export default function events(
  req: NextApiRequest,
  res: NextApiResponse<Data | string>
) {
  const pathEvt = data.filter((path) => path.slug === req.query.slug);

  if (req.method === "GET") {
    res.status(200).json(pathEvt[0]);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json(`${req.method} is not allowed`);
  }
}

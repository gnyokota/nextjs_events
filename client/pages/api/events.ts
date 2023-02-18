// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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
    res.status(200).json([
      {
        id: 1,
        name: "Festival of lights (Berlin)",
        slug: "festival_lights_ber",
        address: "Berlin",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        time: "10:00 PM GMT+1",
        date: "June 09, 2023",
        image: "/images/berlin.jpeg",
      },
      {
        id: 2,
        name: "Festival of lights (Amsterdam)",
        slug: "festival_lights_ams",
        address: "Amsterdam",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
        time: "10:00 PM GMT+1",
        date: "June 09, 2023",
        image: "/images/amsterdam.jpeg",
      },
    ]);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json(`${req.method} is not allowed`);
  }
}

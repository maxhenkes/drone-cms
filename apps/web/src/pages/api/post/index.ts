import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import multiparty from "multiparty";

export const config = {
  api: {
    bodyParser: false,
  },
};
// POST /api/post
// Required fields in body: title, authorEmail
// Optional fields in body: content
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
    const form = new multiparty.Form();
    const data = await new Promise((resolve, reject) => {
      form.parse(req, function (err, fields, files) {
        if (err) reject({ err });
        resolve({ fields, files });
      });
    });
    console.log(`data: `, JSON.stringify(data));

  //const { title, content } = req.body;
  console.log(await req.body)
  // const result = await prisma.post.create({
  //   data: {
  //     title: title,
  //     content: content,
  //     published: true
  //   },
  // });
  return res.status(201).json("test");
}

var cookie = require("cookie");
// import cookie from "cookie"; // server side cookie only https and available on the server side

import {
  EVENT_SUB_ADMIN_ACCESS_TOKEN,
  EVENT_ADMIN_ACCESS_TOKEN,
  EVENT_USER_ADMIN,
  EVENT_USER_SUB_ADMIN,
} from "@/lib/helper";

async function handler(req: any, res: any) {
  const cookies = cookie.parse(req.headers.cookie || "");
  const userAccessTokenAdmin = cookies[EVENT_ADMIN_ACCESS_TOKEN];
  const userAccessTokenSubAdmin = cookies[EVENT_SUB_ADMIN_ACCESS_TOKEN];

  let userType = "";
  if (userAccessTokenAdmin) userType = EVENT_ADMIN_ACCESS_TOKEN;
  else userType = EVENT_SUB_ADMIN_ACCESS_TOKEN;
  console.log(userType);

  try {
    res.setHeader(
      "Set-Cookie",
      cookie.serialize(userType, "", {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        expires: new Date(0),
        sameSite: "strict",
        path: "/",
      })
    );
    res.status(201).json({ status: true });
  } catch (error) {
    console.log(error);
    res.status(422).json({ status: false });
  }
}

export default handler;

import { createAuthUser, createPublicUser } from "../../services/supabase/auth.js";

export default async function handler(req, res) {
  try {
    const { email, password, firstName, lastName } = req.body
    // const authResponse = await createAuthUser(req.body);
    const authResponse = await createAuthUser({ email, password });

    if (!authResponse.success) {
      return res.status(400).json(authResponse);
    } else {
      const publicResponse = await createPublicUser(firstName, lastName, email);

      if (!publicResponse.success) {
        return res.status(400).json(publicResponse);
      } else {
        return res.status(200).json(publicResponse);
      }
    }
  } catch(error) {
    console.log('ERROR:', error);
  }
}
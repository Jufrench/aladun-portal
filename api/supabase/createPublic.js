import { createPublicUser } from "../../services/supabase/auth.js";

export default async function handler(req, res) {
  try {
    const status = await createPublicUser(req.body);
    res.status(200).json({ status });
  } catch(error) {
    console.log('ERROR:', error);
  }
}
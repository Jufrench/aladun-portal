import { createAuthUser } from "../../services/supabase/auth.js";

export default async function handler(req, res) {
  try {
    const authId = await createAuthUser(req.body);
    res.status(200).json({ authId });
  } catch(error) {
    console.log('ERROR:', error);
  }
}
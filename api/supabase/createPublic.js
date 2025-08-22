import { createPublicUser } from "../../services/supabase/auth.js";

export default async function handler(req, res) {
  try {
    const response = await createPublicUser(req.body);

    if (!response.success) {
      return res.status(400).json(response);
    }

    return res.status(200).json(response);
  } catch(error) {
    console.log('ERROR:', error);
  }
}
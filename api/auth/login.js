import { loginAuthUser } from "../../services/supabase/auth.js";
import { getUserByAuthId } from "../../services/db/users.js"

export default async function handler(req, res) {
  try {
    const { email, password } = req.body;
    const authResponse = await loginAuthUser(email, password);
    
    if (!authResponse.success) {
      return res.status(400).json(authResponse);
    }

    const getUserResponse = await getUserByAuthId(authResponse.data.user.id);
    const combinedResponse = {
      success: true,
      auth: authResponse.data,
      public: getUserResponse.data
    };

    return res.status(200).json(combinedResponse);
  } catch(error) {
    console.log('ERROR:', error);
  }
}
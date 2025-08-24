import supabase from "../supabase/supabaseClient.js";

export const createPublicUser = async (id, given_name, family_name, email_address) => {
  try {
    const { data, error, status } = await supabase
      .from('test')
      .insert({ id, given_name, family_name, email_address })
      .select();

    if (error) {
      console.log('error:', error)
      console.log('status:', status)
      return {
        success: false,
        status,
        code: error.code,
        details: error.details,
        message: error.message
      }
    }

    return { success: true, data };
  } catch(error) {
    console.log('ERROR:', error);
  }
};

export const getUserByAuthId = async (authId) => {
  try {
    const { data, error } = await supabase
      .from("test")
      .select()
      .eq("id", authId)
      .select();

    if (error) {
      console.log('error:', error)
      return {
        success: false,
        code: error.code,
        details: error.details,
        message: error.message
      }
    }

    return { success: true, data };
  } catch(error) {
    console.log('ERROR:', error);
  }
}
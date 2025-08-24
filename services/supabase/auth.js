import supabase from "./supabaseClient.js"

export const createAuthUser = async ({ email, password }) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      // options: { emailRedirectTo: 'https://example.com/welcome', },
    });

    if (error) {
      console.log('error:', error)
      return {
        success: false,
        status: error.status,
        code: error.code
      }
    };
    
    return { success: true, user: data.user };
  } catch(error) {
    console.log('ERROR:', error);
  }
};

export const loginAuthUser = async (email, password) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email, password
    });

    if (error) {
      console.log('error:', error)
      console.log('status:', status)
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

import supabase from "./supabaseClient.js"

export const createAuthUser = async ({ email, password }) => {
  try {
    const response = await supabase.auth.signUp({
      email,
      password,
      // options: { emailRedirectTo: 'https://example.com/welcome', },
    });
    return response.data.user?.id;
  } catch(error) {
    console.log('ERROR:', error);
  }
};

export const createPublicUser = async ({ given_name, family_name, email_address }) => {
  try {
    const { data, error, status } = await supabase.from('test').insert({
      given_name, family_name, email_address,
    });
    return status;
  } catch(error) {
    console.log('ERROR:', error);
  }
};
export const env = {
  supabase_url: process.env.SUPABASE_URL,
  supabase_key: process.env.SUPABASE_KEY,

  user_mail: process.env.USER_MAIL,
  pass_mail: process.env.PASS_MAIL,

  sign: process.env.JWT_SIGN,

  isProduction: process.env.NODE_ENV === "production",
};

// @ts-check
import memoryCache from "memory-cache";
import { generateJWT } from "helpers/generateJWT";
import { UserRepository } from "db/supabase/UserRepository";
/**
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */
export default async function verifyCode(req, res) {
  try {
    const { to, name, code } = req.body;

    const userRepository = new UserRepository();

    // step 1: obtener código e identificar del cache
    const { cacheCode, cacheEmail } =
      JSON.parse(memoryCache.get(`codeNumberWithFormat`)) ?? {};

    // step 2: validar que el código e identificador
    // que se recibe sean igual al de la cache
    if (cacheCode !== code || cacheEmail !== to)
      throw new Error("*code*, *to* or *name* body fields is not valid");

    // step 3: validar si el usuario existe
    const user = await userRepository.existUser({
      sendVerifyCodeTo: to,
    });

    // step 4: en caso de que el usuario exista
    // actualizar [lastLogin] en la base de datos
    // borrar el código del cache y
    // retornar el token
    if (user.data.length !== 0) {
      const uuid = user.data[0].uuid;
      const token = await generateJWT({ uuid });
      userRepository.updateLastLogin({ uuid });
      memoryCache.del(`codeNumberWithFormat`);
      return res.json({ success: true, token });
    }

    // step 5: en caso de que no exista
    // crear el usuario borrar el código del cache
    // y retornar el token
    const newUser = await userRepository.create({
      sendVerifyCodeTo: to,
      name,
    });
    const token = await generateJWT({ uuid: newUser.data[0].uuid });
    memoryCache.del(`codeNumberWithFormat`);
    return res.json({ success: true, token });
  } catch (error) {
    return res.status(400).json({ success: false, error: error.message });
  }
}

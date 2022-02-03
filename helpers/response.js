/**
 * @param {Object} args
 * @param {import("next").NextApiResponse} args.res
 * @param {boolean} [args.success] 
]
 * @param {string} [args.message]
 * @returns
 */
export const response = (args) => {
  const { success = false, message = "Default message", res } = args;

  return res.status(400).json({ success, message });
};

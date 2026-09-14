import * as z from "zod";

export const User = z.object({
	nome: z
		.string()
		.min(3, { message: "O nome deve ter no mínimo 3 caracteres" }),
	email: z.email({ message: "E-mail inválido" }),
	senha: z
		.string()
		.min(8, { message: "A senha deve ter no mínimo 8 caracteres" }),
	telefone: z.string(),
});

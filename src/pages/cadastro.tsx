import { useState } from "react";
import {
	Box,
	Button,
	Container,
	IconButton,
	InputAdornment,
	Paper,
	TextField,
	Typography,
} from "@mui/material";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import verboLogo from "../assets/logo-verbo.png";
import { User } from "../validations/cadastro";
import axios from "axios";
import toast from "react-hot-toast";

const ORANGE = "#FF6600";
const ORANGE_LIGHT = "#FF7A00";
const TEXT = "#1A1A1A";

export default function Cadastro() {
	const [showPassword, setShowPassword] = useState(false);

	const [nameHelperText, setNameHelperText] = useState("");
	const [emailHelperText, setEmailHelperText] = useState("");
	const [telefoneHelperText, setTelefoneHelperText] = useState("");
	const [senhaHelperText, setSenhaHelperText] = useState("");

	const [form, setForm] = useState({
		nome: "",
		email: "",
		telefone: "",
		senha: "",
	});

	const handleChange =
		(field: keyof typeof form) =>
		(event: React.ChangeEvent<HTMLInputElement>) => {
			setForm({
				...form,
				[field]: event.target.value,
			});
		};

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		setNameHelperText("");
		setEmailHelperText("");
		setTelefoneHelperText("");
		setSenhaHelperText("");
		const validations = User.safeParse(form);

		if (!validations.success) {
			const error = validations.error.issues[0];
			switch (error.path[0] as any) {
				case "nome":
					setNameHelperText(error.message);
					break;
				case "email":
					setEmailHelperText(error.message);
					break;
				case "telefone":
					setTelefoneHelperText(error.message);
					break;
				case "senha":
					setSenhaHelperText(error.message);
					break;
			}
			console.log(error.path);
			return;
		}
		try {
			const response = await axios.post(
				`${import.meta.env.VITE_API_URL}/users/createUser`,
				form,
			);
			if (response.status === 201) {
				toast.success("Usuário criado com sucesso.");
				window.location.href = "/login";
			}
		} catch (__e) {
			toast.error("Verifique os dados e tente novamente.");
		}
	};

	return (
		<Box
			sx={{
				width: "100%",
				minHeight: "100vh",
				boxSizing: "border-box",

				display: "flex",
				alignItems: "center",
				justifyContent: "center",

				position: "relative",

				overflowX: "hidden",

				background: `
          radial-gradient(
            circle at 20% 20%,
            rgba(255, 102, 0, 0.20),
            transparent 35%
          ),
          radial-gradient(
            circle at 80% 80%,
            rgba(255, 122, 0, 0.12),
            transparent 35%
          ),
          #111111
        `,

				// Espaçamento responsivo
				px: { xs: 1.5, sm: 3 },
				py: { xs: 3, sm: 5 },
			}}
		>
			{/* Brilho decorativo */}
			<Box
				sx={{
					position: "absolute",

					width: { xs: 220, sm: 350, md: 450 },
					height: { xs: 220, sm: 350, md: 450 },

					borderRadius: "50%",

					background: `
            radial-gradient(
              circle,
              rgba(255, 102, 0, 0.16),
              transparent 70%
            )
          `,

					top: { xs: -100, md: -180 },
					right: { xs: -100, md: -150 },

					pointerEvents: "none",
				}}
			/>

			<Container
				maxWidth="sm"
				disableGutters
				sx={{
					width: "100%",
					position: "relative",
					zIndex: 1,

					display: "flex",
					justifyContent: "center",
				}}
			>
				<Paper
					elevation={0}
					sx={{
						width: "100%",
						maxWidth: 500,

						boxSizing: "border-box",

						p: {
							xs: 2.5,
							sm: 4,
							md: 5,
						},

						borderRadius: {
							xs: 3,
							sm: 4,
						},

						backgroundColor: "#FFFFFF",

						boxShadow: `
              0 25px 80px rgba(0, 0, 0, 0.35),
              0 0 40px rgba(255, 102, 0, 0.08)
            `,
					}}
				>
					{/* Cabeçalho */}
					<Box
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							textAlign: "center",

							mb: {
								xs: 3,
								sm: 4,
							},
						}}
					>
						{/* Logo */}
						<Box
							sx={{
								width: {
									xs: 85,
									sm: 105,
									md: 120,
								},

								height: {
									xs: 85,
									sm: 105,
									md: 120,
								},

								borderRadius: "50%",

								display: "flex",
								alignItems: "center",
								justifyContent: "center",

								background: `
                  linear-gradient(
                    135deg,
                    ${ORANGE},
                    ${ORANGE_LIGHT}
                  )
                `,

								boxShadow: `
                  0 10px 30px rgba(255, 102, 0, 0.30)
                `,

								mb: 2,

								flexShrink: 0,
							}}
						>
							<Box
								component="img"
								src={verboLogo}
								alt="Verbo Encarnado"
								sx={{
									width: {
										xs: 70,
										sm: 85,
										md: 100,
									},

									height: "auto",

									maxWidth: "80%",

									objectFit: "contain",
								}}
							/>
						</Box>

						<Typography
							variant="h4"
							sx={{
								fontWeight: 800,
								color: TEXT,

								fontSize: {
									xs: "1.6rem",
									sm: "2rem",
									md: "2.1rem",
								},

								lineHeight: 1.2,
							}}
						>
							Crie sua conta
						</Typography>

						<Typography
							sx={{
								mt: 1,

								color: "#666666",

								fontSize: {
									xs: "0.85rem",
									sm: "0.95rem",
								},

								lineHeight: 1.5,

								maxWidth: 400,
							}}
						>
							Faça parte do Vozes do Verbo e una-se à nossa missão.
						</Typography>
					</Box>

					{/* Formulário */}
					<Box
						component="form"
						onSubmit={handleSubmit}
						sx={{
							width: "100%",

							display: "flex",
							flexDirection: "column",

							gap: {
								xs: 1.8,
								sm: 2.2,
							},
						}}
					>
						{/* Nome */}
						<TextField
							fullWidth
							label="Nome"
							helperText={nameHelperText}
							error={nameHelperText ? true : false}
							value={form.nome}
							onChange={handleChange("nome")}
							required
							autoComplete="name"
							sx={{
								"& .MuiOutlinedInput-root": {
									borderRadius: 2.5,

									"&.Mui-focused fieldset": {
										borderColor: ORANGE,
									},
								},

								"& .MuiInputLabel-root.Mui-focused": {
									color: ORANGE,
								},
							}}
						/>

						{/* E-mail */}
						<TextField
							fullWidth
							type="email"
							label="E-mail"
							helperText={emailHelperText}
							error={emailHelperText ? true : false}
							value={form.email}
							onChange={handleChange("email")}
							required
							autoComplete="email"
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<EmailOutlinedIcon
											sx={{
												color: ORANGE,
												fontSize: {
													xs: 20,
													sm: 22,
												},
											}}
										/>
									</InputAdornment>
								),
							}}
							sx={{
								"& .MuiOutlinedInput-root": {
									borderRadius: 2.5,

									"&.Mui-focused fieldset": {
										borderColor: ORANGE,
									},
								},

								"& .MuiInputLabel-root.Mui-focused": {
									color: ORANGE,
								},
							}}
						/>

						<TextField
							fullWidth
							label="Telefone"
							value={form.telefone}
							onChange={handleChange("telefone")}
							helperText={telefoneHelperText}
							error={telefoneHelperText ? true : false}
							required
							autoComplete="name"
							sx={{
								"& .MuiOutlinedInput-root": {
									borderRadius: 2.5,

									"&.Mui-focused fieldset": {
										borderColor: ORANGE,
									},
								},

								"& .MuiInputLabel-root.Mui-focused": {
									color: ORANGE,
								},
							}}
						/>

						{/* Senha */}
						<TextField
							fullWidth
							type={showPassword ? "text" : "password"}
							helperText={senhaHelperText}
							error={senhaHelperText ? true : false}
							label="Senha"
							value={form.senha}
							onChange={handleChange("senha")}
							required
							autoComplete="new-password"
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<LockOutlinedIcon
											sx={{
												color: ORANGE,
												fontSize: {
													xs: 20,
													sm: 22,
												},
											}}
										/>
									</InputAdornment>
								),

								endAdornment: (
									<InputAdornment position="end">
										<IconButton
											type="button"
											onClick={() => setShowPassword(!showPassword)}
											edge="end"
											size="small"
										>
											{showPassword ? <VisibilityOff /> : <Visibility />}
										</IconButton>
									</InputAdornment>
								),
							}}
							sx={{
								"& .MuiOutlinedInput-root": {
									borderRadius: 2.5,

									"&.Mui-focused fieldset": {
										borderColor: ORANGE,
									},
								},

								"& .MuiInputLabel-root.Mui-focused": {
									color: ORANGE,
								},
							}}
						/>

						{/* Botão */}
						<Button
							type="submit"
							fullWidth
							variant="contained"
							sx={{
								mt: 0.5,

								height: {
									xs: 50,
									sm: 54,
								},

								borderRadius: "14px",

								fontSize: {
									xs: "0.95rem",
									sm: "1rem",
								},

								fontWeight: 700,

								textTransform: "none",

								background: `
                  linear-gradient(
                    135deg,
                    ${ORANGE},
                    ${ORANGE_LIGHT}
                  )
                `,

								boxShadow: `
                  0 10px 25px rgba(255, 102, 0, 0.25)
                `,

								"&:hover": {
									background: `
                    linear-gradient(
                      135deg,
                      #E85C00,
                      ${ORANGE}
                    )
                  `,

									boxShadow: `
                    0 14px 30px rgba(255, 102, 0, 0.32)
                  `,
								},
							}}
						>
							Criar minha conta
						</Button>
					</Box>

					{/* Login */}
					<Box
						sx={{
							mt: {
								xs: 2.5,
								sm: 3,
							},

							textAlign: "center",
						}}
					>
						<Typography
							sx={{
								color: "#777777",

								fontSize: {
									xs: "0.8rem",
									sm: "0.9rem",
								},
							}}
						>
							Já possui uma conta?
						</Typography>

						<Button
							href="/login"
							sx={{
								mt: 0.3,

								color: ORANGE,

								fontWeight: 700,

								fontSize: {
									xs: "0.85rem",
									sm: "0.9rem",
								},

								textTransform: "none",

								"&:hover": {
									background: "rgba(255, 102, 0, 0.06)",
								},
							}}
						>
							Entrar na minha conta
						</Button>
					</Box>
				</Paper>
			</Container>
		</Box>
	);
}

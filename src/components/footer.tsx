import {
	Box,
	Container,
	Divider,
	IconButton,
	Link,
	Stack,
	Typography,
} from "@mui/material";

import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
	return (
		<Box
			component="footer"
			sx={{
				background: "rgb(255, 102, 0)",
				color: "#fff",
				mt: 8,
			}}
		>
			<Container maxWidth="lg">
				<Box
					sx={{
						py: 6,
						display: "grid",
						gridTemplateColumns: {
							xs: "1fr",
							md: "2fr 1fr 1fr 1fr",
						},
						gap: 5,
					}}
				>
					{/* SOBRE */}
					<Box>
						<Typography
							variant="h6"
							sx={{
								fontWeight: 700,
								mb: 2,
							}}
						>
							Vozes do Verbo
						</Typography>

						<Typography
							variant="body2"
							sx={{
								color: "rgba(255,255,255,0.7)",
								lineHeight: 1.8,
								maxWidth: 380,
							}}
						>
							Um grupo dedicado ao aprofundamento da fé católica, à
							evangelização e à defesa da verdade do Evangelho, levando a voz do
							Verbo a diferentes culturas e realidades.
						</Typography>

						<Stack direction="row" spacing={1} sx={{ mt: 3 }}>
							<IconButton
								component="a"
								href="#"
								target="_blank"
								sx={{
									color: "#fff",
									"&:hover": {
										backgroundColor: "rgba(255,255,255,0.1)",
									},
								}}
							>
								<InstagramIcon />
							</IconButton>

							<IconButton
								component="a"
								href="#"
								target="_blank"
								sx={{
									color: "#fff",
									"&:hover": {
										backgroundColor: "rgba(255,255,255,0.1)",
									},
								}}
							>
								<YouTubeIcon />
							</IconButton>

							<IconButton
								component="a"
								href="#"
								target="_blank"
								sx={{
									color: "#fff",
									"&:hover": {
										backgroundColor: "rgba(255,255,255,0.1)",
									},
								}}
							>
								<FacebookIcon />
							</IconButton>
						</Stack>
					</Box>

					{/* NAVEGAÇÃO */}
					<Box>
						<Typography
							variant="subtitle1"
							sx={{
								fontWeight: 700,
								mb: 2,
							}}
						>
							Navegação
						</Typography>

						<Stack spacing={1.2}>
							<Link href="/" underline="none" color="inherit">
								Início
							</Link>

							<Link href="/quem-somos" underline="none" color="inherit">
								Quem Somos
							</Link>

							<Link href="/conteudos" underline="none" color="inherit">
								Conteúdos
							</Link>

							<Link href="/eventos" underline="none" color="inherit">
								Eventos
							</Link>

							<Link href="/contato" underline="none" color="inherit">
								Contato
							</Link>
						</Stack>
					</Box>

					{/* MISSÃO */}
					<Box>
						<Typography
							variant="subtitle1"
							sx={{
								fontWeight: 700,
								mb: 2,
							}}
						>
							Nossa Missão
						</Typography>

						<Stack spacing={1.2}>
							<Link href="#" underline="none" color="inherit">
								Formação
							</Link>

							<Link href="#" underline="none" color="inherit">
								Evangelização
							</Link>

							<Link href="#" underline="none" color="inherit">
								Cultura
							</Link>

							<Link href="#" underline="none" color="inherit">
								Apostolado
							</Link>
						</Stack>
					</Box>

					{/* INSTITUIÇÃO */}
					<Box>
						<Typography
							variant="subtitle1"
							sx={{
								fontWeight: 700,
								mb: 2,
							}}
						>
							Instituto do Verbo Encarnado
						</Typography>

						<Typography
							variant="body2"
							sx={{
								color: "rgba(255,255,255,0.7)",
								lineHeight: 1.7,
							}}
						>
							Conheça a família religiosa que acompanha e orienta a missão do
							Vozes do Verbo.
						</Typography>

						<Link
							href="#"
							underline="hover"
							sx={{
								display: "inline-block",
								mt: 2,
								color: "#fff",
								fontWeight: 600,
							}}
						>
							Saiba mais →
						</Link>
					</Box>
				</Box>

				<Divider
					sx={{
						borderColor: "rgba(255,255,255,0.12)",
					}}
				/>

				{/* COPYRIGHT */}
				<Box
					sx={{
						py: 3,
						display: "flex",
						flexDirection: {
							xs: "column",
							sm: "row",
						},
						justifyContent: "space-between",
						alignItems: {
							xs: "flex-start",
							sm: "center",
						},
						gap: 2,
					}}
				>
					<Typography
						variant="body2"
						sx={{
							color: "rgba(255,255,255,0.55)",
						}}
					>
						© {new Date().getFullYear()} Vozes do Verbo. Todos os direitos
						reservados.
					</Typography>

					<Stack direction="row" spacing={3}>
						<Link
							href="/privacidade"
							underline="hover"
							color="inherit"
							variant="body2"
						>
							Política de Privacidade
						</Link>

						<Link
							href="/termos"
							underline="hover"
							color="inherit"
							variant="body2"
						>
							Termos de Uso
						</Link>
					</Stack>
				</Box>
			</Container>
		</Box>
	);
};

export default Footer;

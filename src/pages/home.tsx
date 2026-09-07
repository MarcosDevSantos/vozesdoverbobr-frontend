
import Header from "../components/header";
import JoinVozes from "../components/joinVozesButton";
import LastPublications from "../components/lastPublications";

import vozesLogo from "../assets/logoVozes.png";
import groupImage1 from "../assets/group1.jpeg";
import map from "../assets/mapa.png";
import videoApresentacao from "../assets/apresentacao.mp4";

import {
	Box,
	Container,
	Typography,
	Stack,
	Button,
	Divider,
} from "@mui/material";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import PublicIcon from "@mui/icons-material/Public";
import ChurchIcon from "@mui/icons-material/Church";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Home() {
	const scrollToContent = () => {
		document
			.getElementById("quem-somos")
			?.scrollIntoView({ behavior: "smooth" });
	};

	return (
		<Box
			sx={{
				width: "100%",
				overflow: "hidden",
				backgroundColor: "#fff",
			}}
		>
			{/* ========================================
				 HERO
			======================================== */}

			<Box
				component="section"
				sx={{
					position: "relative",
					minHeight: "100vh",
					width: "100%",
					display: "flex",
					flexDirection: "column",
					isolation: "isolate",
					backgroundColor: "#1a1009",
				}}
			>
				{/* VIDEO */}
				<Box
					component="video"
					src={videoApresentacao}
					autoPlay
					loop
					muted
					playsInline
					sx={{
						position: "absolute",
						inset: 0,
						width: "100%",
						height: "100%",
						objectFit: "cover",
						zIndex: -2,
					}}
				/>

				{/* OVERLAY PRINCIPAL */}
				<Box
					sx={{
						position: "absolute",
						inset: 0,
						zIndex: -1,
						background: `
							linear-gradient(
								180deg,
								rgba(15, 9, 4, 0.78) 0%,
								rgba(32, 19, 10, 0.35) 45%,
								rgba(15, 9, 4, 0.85) 100%
							)
						`,
					}}
				/>

				{/* EFEITO DE LUZ */}
				<Box
					sx={{
						position: "absolute",
						width: "700px",
						height: "700px",
						borderRadius: "50%",
						background:
							"radial-gradient(circle, rgba(181,145,91,0.20) 0%, transparent 65%)",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						zIndex: -1,
						pointerEvents: "none",
					}}
				/>

				<Header />

				{/* HERO CONTENT */}

					<Container
	maxWidth={false}
	sx={{
		flex: 1,
		width: "100%",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		px: 2,
		py: {
			xs: 10,
			md: 6,
		},
	}}
>
	<Box
		sx={{
			width: "100%",
			maxWidth: "1100px",
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			justifyContent: "center",
			textAlign: "center",
		}}
	>
		{/* LINHA SUPERIOR */}

		<Box
			sx={{
				width: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				gap: {
					xs: 1.5,
					md: 2,
				},
				mb: {
					xs: 1,
					md: 2,
				},
			}}
		>
			<Box
				sx={{
					width: {
						xs: 25,
						sm: 40,
						md: 60,
					},
					height: "1px",
					backgroundColor: "#FF6600",
					flexShrink: 0,
				}}
			/>

			<Typography
				sx={{
					color: "#FFB07A",
					fontFamily: "Cinzel, serif",
					fontSize: {
						xs: "0.6rem",
						sm: "0.7rem",
						md: "0.85rem",
					},
					letterSpacing: {
						xs: "1.5px",
						sm: "2px",
						md: "4px",
					},
					textTransform: "uppercase",
					textAlign: "center",
					lineHeight: 1.4,
				}}
			>
				Instituto do Verbo Encarnado
			</Typography>

			<Box
				sx={{
					width: {
						xs: 25,
						sm: 40,
						md: 60,
					},
					height: "1px",
					backgroundColor: "#FF6600",
					flexShrink: 0,
				}}
			/>
		</Box>

		{/* LOGO */}

		<Box
			sx={{
				width: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				mb: {
					xs: 1,
					md: 2,
				},
			}}
		>
			<Box
				component="img"
				src={vozesLogo}
				alt="Vozes do Verbo"
				sx={{
					display: "block",
					width: {
						xs: 100,
						sm: 130,
						md: 160,
					},
					height: "auto",
					margin: 0,
					filter:
						"drop-shadow(0px 10px 20px rgba(0,0,0,0.35))",
				}}
			/>
		</Box>

		{/* TÍTULO */}

		<Box
			sx={{
				width: "100%",
				display: "flex",
				justifyContent: "center",
			}}
		>
			<Typography
				component="h1"
				sx={{
					color: "#fff",
					fontFamily: "Cinzel, serif",
					fontWeight: 600,
					fontSize: {
						xs: "3rem",
						sm: "4.5rem",
						md: "6.5rem",
						lg: "6.5rem",
					},
					lineHeight: 0.95,
					letterSpacing: {
						xs: "-1px",
						md: "-3px",
					},
					textAlign: "center",
					textShadow: "0 10px 30px rgba(0,0,0,0.4)",
					margin: 0,
				}}
			>
				Vozes do Verbo
			</Typography>
		</Box>

		{/* DESCRIÇÃO */}

		<Box
			sx={{
				width: "100%",
				display: "flex",
				justifyContent: "center",
			}}
		>
			<Typography
				sx={{
					color: "rgba(255,255,255,0.88)",
					fontSize: {
						xs: "1rem",
						md: "1.2rem",
					},
					lineHeight: 1.8,
					maxWidth: "650px",
					fontWeight: 300,
					textAlign: "center",
					px: 2,
					margin: 0,
				}}
			>
				Uma voz que nasce da fé, encontra a verdade e
				se faz presente no mundo.
			</Typography>
		</Box>

		{/* DIVISOR */}

		<Box
			sx={{
				width: "70px",
				height: "2px",
				backgroundColor: "#FF6600",
				my: 2,
			}}
		/>

		{/* BOTÃO */}

	
	</Box>
</Container>

				{/* SCROLL BUTTON */}

				<Box
					onClick={scrollToContent}
					sx={{
						position: "absolute",
						
						bottom: {
							xs: 25,
							md: 35,
						},
						left: "50%",
						transform: "translateX(-50%)",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						gap: 0.5,
						cursor: "pointer",
						color: "#fff",
						opacity: 0.8,
						transition: "0.3s",

						"&:hover": {
							opacity: 1,
							transform: "translateX(-50%) translateY(3px)",
						},
					}}
				>
					<Typography
						sx={{
							fontSize: "0.65rem",
							letterSpacing: "2px",
							textTransform: "uppercase",
						}}
					>
						Conheça
					</Typography>

					<ArrowDownwardIcon />
				</Box>
			</Box>

			{/* ========================================
				 QUEM SOMOS
			======================================== */}

			<Box
				id="quem-somos"
				component="section"
				sx={{
					position: "relative",
					py: {
						xs: 9,
						md: 16,
					},
					backgroundColor: "#fff",
				}}
			>
				<Container maxWidth="xl">
					<Box
						sx={{
							display: "grid",
							gridTemplateColumns: {
								xs: "1fr",
								md: "1.05fr 0.95fr",
							},
							gap: {
								xs: 6,
								md: 10,
								lg: 14,
							},
							alignItems: "center",
						}}
					>
						{/* IMAGEM */}

						<Box
							sx={{
								position: "relative",
								width: "100%",
							}}
						>
							<Box
								component="img"
								src={groupImage1}
								alt="Grupo Vozes do Verbo"
								sx={{
									width: "100%",
									height: {
										xs: "350px",
										sm: "450px",
										md: "600px",
									},
									objectFit: "cover",
									borderRadius: {
										xs: "30px",
										md: "60px",
									},
									display: "block",
									boxShadow:
										"0px 25px 70px rgba(40,25,10,0.18)",
								}}
							/>

							{/* DETALHE DECORATIVO */}

							<Box
								sx={{
									position: "absolute",
									width: {
										xs: "100px",
										md: "170px",
									},
									height: {
										xs: "100px",
										md: "170px",
									},
									border: "1px solid #b99864",
									borderRadius: {
										xs: "25px",
										md: "45px",
									},
									right: {
										xs: "-10px",
										md: "-25px",
									},
									bottom: {
										xs: "-10px",
										md: "-25px",
									},
									zIndex: -1,
								}}
							/>

							{/* BADGE */}

							<Box
								sx={{
									position: "absolute",
									left: {
										xs: 15,
										md: 30,
									},
									bottom: {
										xs: 15,
										md: 30,
									},
									backgroundColor: "rgba(35,20,10,0.9)",
									backdropFilter: "blur(10px)",
									color: "#fff",
									borderRadius: "20px",
									px: {
										xs: 2,
										md: 3,
									},
									py: {
										xs: 1.5,
										md: 2,
									},
								}}
							>
								<Typography
									sx={{
										fontFamily: "Cinzel, serif",
										fontSize: {
											xs: "1.2rem",
											md: "1.8rem",
										},
										fontWeight: 600,
										color: "#e0bf88",
									}}
								>
									Desde 2014
								</Typography>

								<Typography
									sx={{
										fontSize: {
											xs: "0.65rem",
											md: "0.75rem",
										},
										letterSpacing: "2px",
										textTransform: "uppercase",
										opacity: 0.8,
									}}
								>
									Uma missão
								</Typography>
							</Box>
						</Box>

						{/* TEXTO */}

						<Stack spacing={3}>
							<Typography
								sx={{
									color: "rgb(255, 90, 0)",
									fontFamily: "Cinzel, serif",
									fontSize: "0.8rem",
									letterSpacing: "3px",
									textTransform: "uppercase",
									fontWeight: 600,
								}}
							>
								Nossa história
							</Typography>

							<Typography
								component="h2"
								sx={{
									color: "#21140b",
									fontFamily: "Cinzel, serif",
									fontWeight: 600,
									fontSize: {
										xs: "2.5rem",
										md: "4rem",
									},
									lineHeight: 1.1,
								}}
							>
								Quem somos nós?
							</Typography>

							<Divider
								sx={{
									width: "70px",
									borderColor: "rgb(255, 90, 0)",
									borderBottomWidth: 2,
								}}
							/>

							<Typography
								sx={{
									color: "#5a514b",
									fontSize: {
										xs: "1rem",
										md: "1.1rem",
									},
									lineHeight: 1.9,
								}}
							>
								O Vozes do Verbo nasceu em 2014, na Itália,
								com o desejo de aprofundar, viver e defender
								a fé católica.
							</Typography>

							<Typography
								sx={{
									color: "#5a514b",
									fontSize: {
										xs: "1rem",
										md: "1.1rem",
									},
									lineHeight: 1.9,
								}}
							>
								Hoje, nossa missão alcança diferentes culturas
								e realidades, levando a verdade do Evangelho
								aos mais diversos círculos da sociedade.
							</Typography>

							<Typography
								sx={{
									color: "#5a514b",
									fontSize: {
										xs: "1rem",
										md: "1.1rem",
									},
									lineHeight: 1.9,
								}}
							>
								No Brasil, iniciamos nossa caminhada no dia
								15 de novembro de 2019, sob a tutela da família
								religiosa do Verbo Encarnado.
							</Typography>

							<Box sx={{ pt: 2 }}>
								<Button
									endIcon={<ArrowForwardIcon />}
									sx={{
										color: "rgb(255, 90, 0)",
										fontFamily: "Cinzel, serif",
										fontWeight: 600,
										textTransform: "none",
										fontSize: "1rem",

										"&:hover": {
											backgroundColor: "transparent",
											transform: "translateX(5px)",
										},
									}}
								>
									Conheça nossa missão
								</Button>
							</Box>
						</Stack>
					</Box>
				</Container>
			</Box>

			{/* ========================================
				 NUMEROS
			======================================== */}

			<Box
				component="section"
				sx={{
					py: {
						xs: 8,
						md: 12,
					},
					background:
						"linear-gradient(135deg, rgb(218, 102, 40) 0%, rgb(255, 90, 0) 100%)",
					color: "#fff",
				}}
			>
				<Container maxWidth="lg">
					<Stack
						spacing={2}
						alignItems="center"
						textAlign="center"
						sx={{
							mb: {
								xs: 6,
								md: 9,
							},
						}}
					>
						<Typography
							sx={{
								color: "#fff",
								fontFamily: "Cinzel, serif",
								letterSpacing: "3px",
								fontSize: "0.75rem",
								textTransform: "uppercase",
							}}
						>
							Uma missão que cresce
						</Typography>

						<Typography
							sx={{
								fontFamily: "Cinzel, serif",
								fontSize: {
									xs: "2rem",
									md: "3.5rem",
								},
							}}
						>
							Uma voz presente no mundo
						</Typography>
					</Stack>

					<Box
						sx={{
							display: "grid",
							gridTemplateColumns: {
								xs: "1fr",
								sm: "repeat(3, 1fr)",
							},
							gap: {
								xs: 3,
								md: 6,
							},
						}}
					>
						{[
							{
								icon: <PublicIcon />,
								number: "11+",
								label: "Países",
							},
							{
								icon: <ChurchIcon />,
								number: "2014",
								label: "Ano de origem",
							},
							{
								icon: <FavoriteBorderIcon />,
								number: "1",
								label: "Missão",
							},
						].map((item) => (
							<Box
								key={item.label}
								sx={{
									textAlign: "center",
									py: 4,
									border: "1px solid #fff",
									borderRadius: "25px",
									backgroundColor:
										"rgba(255,255,255,0.03)",
									transition: "0.3s",

									"&:hover": {
										transform: "translateY(-8px)",
										backgroundColor:
											"rgba(255,255,255,0.07)",
										borderColor:
											"#fff",
									},
								}}
							>
								<Box
									sx={{
										color: "#fff",
										mb: 2,
										display: "flex",
										justifyContent: "center",
									}}
								>
									{item.icon}
								</Box>

								<Typography
									sx={{
										fontFamily: "Cinzel, serif",
										fontSize: {
											xs: "2.5rem",
											md: "3.5rem",
										},
										fontWeight: 600,
									}}
								>
									{item.number}
								</Typography>

								<Typography
									sx={{
										color: "rgba(255,255,255,0.65)",
										letterSpacing: "2px",
										textTransform: "uppercase",
										fontSize: "0.7rem",
									}}
								>
									{item.label}
								</Typography>
							</Box>
						))}
					</Box>
				</Container>
			</Box>

			{/* ========================================
				 ONDE ESTAMOS
			======================================== */}

			<Box
				component="section"
				sx={{
					py: {
						xs: 9,
						md: 16,
					},
					backgroundColor: "#f7f4f0",
				}}
			>
				<Container maxWidth="xl">
					<Box
						sx={{
							display: "grid",
							gridTemplateColumns: {
								xs: "1fr",
								md: "0.9fr 1.1fr",
							},
							gap: {
								xs: 6,
								md: 10,
								lg: 14,
							},
							alignItems: "center",
						}}
					>
						{/* TEXTO */}

						<Stack spacing={3}>
							<Typography
								sx={{
									color: "rgb(255, 90, 0)",
									fontFamily: "Cinzel, serif",
									fontSize: "0.8rem",
									letterSpacing: "3px",
									textTransform: "uppercase",
									fontWeight: 600,
								}}
							>
								Nossa presença
							</Typography>

							<Typography
								component="h2"
								sx={{
									color: "#21140b",
									fontFamily: "Cinzel, serif",
									fontSize: {
										xs: "2.5rem",
										md: "4rem",
									},
									fontWeight: 600,
									lineHeight: 1.1,
								}}
							>
								Onde estamos?
							</Typography>

							<Divider
								sx={{
									width: "70px",
									borderColor: "rgb(255, 90, 0)",
									borderBottomWidth: 2,
								}}
							/>

							<Typography
								sx={{
									color: "#5a514b",
									fontSize: {
										xs: "1rem",
										md: "1.1rem",
									},
									lineHeight: 1.9,
								}}
							>
								O Vozes do Verbo está presente em diversos
								países do mundo, levando a fé e a missão do
								Verbo a diferentes culturas e realidades.
							</Typography>

							<Typography
								sx={{
									color: "#5a514b",
									fontSize: {
										xs: "1rem",
										md: "1.1rem",
									},
									lineHeight: 1.9,
								}}
							>
								No Brasil, nossa presença se estende por
								diversos estados, onde buscamos anunciar,
								formar e testemunhar a fé católica.
							</Typography>

							{/* ESTADOS */}

							<Box
								sx={{
									mt: 2,
									p: {
										xs: 3,
										md: 4,
									},
									borderRadius: "20px",
									backgroundColor: "#fff",
									boxShadow:
										"0px 15px 40px rgba(40,25,10,0.08)",
									borderLeft: "4px solid rgb(255, 90, 0)",
								}}
							>
								<Typography
									sx={{
										color: "rgb(255, 90, 0)",
										fontFamily: "Cinzel, serif",
										fontSize: "0.7rem",
										letterSpacing: "2px",
										textTransform: "uppercase",
										mb: 1,
									}}
								>
									No Brasil
								</Typography>

								<Typography
									sx={{
										color: "#2b1b10",
										fontFamily: "Cinzel, serif",
										fontWeight: 600,
										lineHeight: 1.8,
									}}
								>
									Amazonas · Mato Grosso · Pará · São Paulo
									· Bahia · Espírito Santo · Ceará
								</Typography>
							</Box>
						</Stack>

						{/* MAPA */}

						<Box
							sx={{
								position: "relative",
							}}
						>
							<Box
								sx={{
									position: "absolute",
									inset: {
										xs: "15px -10px -15px 10px",
										md: "30px -25px -30px 25px",
									},
									border: "1px solid rgb(255, 90, 0)",
									borderRadius: {
										xs: "25px",
										md: "50px",
									},
								}}
							/>

							<Box
								component="img"
								src={map}
								alt="Estados onde o Vozes do Verbo está presente"
								sx={{
									position: "relative",
									width: "100%",
									display: "block",
									borderRadius: {
										xs: "25px",
										md: "50px",
									},
									boxShadow:
										"0px 25px 70px rgba(40,25,10,0.12)",
								}}
							/>
						</Box>
					</Box>
				</Container>
			</Box>

			{/* ========================================
				 CTA
			======================================== */}

			<Box
				component="section"
				sx={{
					py: {
						xs: 9,
						md: 13,
					},
					backgroundColor: "#fff",
				}}
			>
				<Container maxWidth="md">
					<Box
						sx={{
							position: "relative",
							overflow: "hidden",
							textAlign: "center",
							py: {
								xs: 6,
								md: 10,
							},
							px: {
								xs: 3,
								md: 8,
							},
							borderRadius: {
								xs: "30px",
								md: "50px",
							},
							background:
								"linear-gradient(135deg, rgb(180, 102, 60) 0%, rgb(224, 82, 6) 100%)",
							color: "#fff",
							boxShadow:
								"0px 30px 80px rgba(35,20,10,0.2)",
						}}
					>
						{/* EFEITO */}

						<Box
							sx={{
								position: "absolute",
								width: "500px",
								height: "500px",
								borderRadius: "50%",
								background:
									"radial-gradient(circle, rgba(214,182,125,0.15), transparent 70%)",
								top: "-300px",
								left: "50%",
								transform: "translateX(-50%)",
							}}
						/>

						<Stack
							alignItems="center"
							spacing={3}
							sx={{
								position: "relative",
							}}
						>
							<Typography
								sx={{
									color: "#fff",
									fontFamily: "Cinzel, serif",
									fontSize: "0.75rem",
									letterSpacing: "3px",
									textTransform: "uppercase",
								}}
							>
								Faça parte
							</Typography>

							<Typography
								sx={{
									fontFamily: "Cinzel, serif",
									fontWeight: 600,
									fontSize: {
										xs: "2rem",
										md: "3.5rem",
									},
									lineHeight: 1.2,
								}}
							>
								Seja também uma voz do Verbo
							</Typography>

							<Typography
								sx={{
									maxWidth: "600px",
									color: "rgba(255,255,255,0.75)",
									lineHeight: 1.8,
								}}
							>
								Junte-se a nós nessa missão de levar a
								verdade, a fé e a esperança aos diferentes
								círculos da sociedade.
							</Typography>

							<Box sx={{ pt: 2 }}>
								<JoinVozes />
							</Box>
						</Stack>
					</Box>
				</Container>
			</Box>

			{/* ========================================
				 PUBLICACOES
			======================================== */}

			<Box
				component="section"
				sx={{
					py: {
						xs: 8,
						md: 12,
					},
					backgroundColor: "#f7f4f0",
				}}
			>
				<Container maxWidth="xl">
					<Box
						sx={{
							textAlign: "center",
							mb: {
								xs: 5,
								md: 8,
							},
						}}
					>
						<Typography
							sx={{
								color: "#FF6600",
								fontFamily: "Cinzel, serif",
								fontSize: "0.75rem",
								letterSpacing: "3px",
								textTransform: "uppercase",
								mb: 2,
							}}
						>
							Acompanhe
						</Typography>

						<Typography
							component="h2"
							sx={{
								color: "#21140b",
								fontFamily: "Cinzel, serif",
								fontWeight: 600,
								fontSize: {
									xs: "2.2rem",
									md: "3.5rem",
								},
							}}
						>
							Últimas publicações
						</Typography>
					</Box>

					<LastPublications />
				</Container>
			</Box>
		</Box>
	);
}


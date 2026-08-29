import { Card, CardContent, CardMedia, Typography } from "@mui/material";

import imageTest from "../assets/group1.jpeg";

export default function LastPublications() {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				gap: "24px",
			}}
		>
			<div>
				<Typography
					sx={{ color: "#000", fontFamily: "Cinzel, serif" }}
					variant="h3"
				>
					Últimas Publicações
				</Typography>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "center",
				}}
			>
				<div
					style={{
						width: "100px",
						height: "10px",
						backgroundColor: "rgb(255, 115, 0)",
					}}
				></div>
			</div>
			<div style={{ display: "flex", flexDirection: "row", gap: "24px" }}>
				<Card
					sx={{
						width: "300px",

						flexShrink: 0,

						borderRadius: "18px",

						background: "#151515",

						border: "1px solid rgba(255,255,255,0.08)",

						overflow: "hidden",

						transition: "all 0.3s ease",

						"&:hover": {
							transform: "translateY(-8px)",

							border: "1px solid rgba(255,150,0,0.5)",

							boxShadow: `
                    0 0 15px rgba(255,100,0,0.25),
                    0 15px 40px rgba(0,0,0,0.4)
                  `,
						},
					}}
				>
					{/* IMAGEM */}
					<CardMedia
						component="img"
						image={imageTest}
						alt={"Test"}
						sx={{
							height: "200px",
							objectFit: "cover",
						}}
					/>

					{/* CONTEÚDO */}
					<CardContent sx={{ p: 3 }}>
						<Typography
							sx={{
								color: "#ff9500",
								fontSize: "0.75rem",
								fontWeight: 700,
								letterSpacing: "1px",
								mb: 1,
							}}
						>
							{"29 ago 2026"}
						</Typography>

						<Typography
							sx={{
								color: "#fff",
								fontFamily: "Cinzel, serif",
								fontSize: "1.2rem",
								fontWeight: 600,
								mb: 1,
							}}
						>
							{"TESTE"}
						</Typography>

						<Typography
							sx={{
								color: "rgba(255,255,255,0.65)",
								fontSize: "0.9rem",
								lineHeight: 1.6,
							}}
						>
							{"lorem ipsum dolor it est"}
						</Typography>
					</CardContent>
				</Card>

				<Card
					sx={{
						width: "300px",

						flexShrink: 0,

						borderRadius: "18px",

						background: "#151515",

						border: "1px solid rgba(255,255,255,0.08)",

						overflow: "hidden",

						transition: "all 0.3s ease",

						"&:hover": {
							transform: "translateY(-8px)",

							border: "1px solid rgba(255,150,0,0.5)",

							boxShadow: `
                    0 0 15px rgba(255,100,0,0.25),
                    0 15px 40px rgba(0,0,0,0.4)
                  `,
						},
					}}
				>
					{/* IMAGEM */}
					<CardMedia
						component="img"
						image={imageTest}
						alt={"Test"}
						sx={{
							height: "200px",
							objectFit: "cover",
						}}
					/>

					{/* CONTEÚDO */}
					<CardContent sx={{ p: 3 }}>
						<Typography
							sx={{
								color: "#ff9500",
								fontSize: "0.75rem",
								fontWeight: 700,
								letterSpacing: "1px",
								mb: 1,
							}}
						>
							{"29 ago 2026"}
						</Typography>

						<Typography
							sx={{
								color: "#fff",
								fontFamily: "Cinzel, serif",
								fontSize: "1.2rem",
								fontWeight: 600,
								mb: 1,
							}}
						>
							{"TESTE"}
						</Typography>

						<Typography
							sx={{
								color: "rgba(255,255,255,0.65)",
								fontSize: "0.9rem",
								lineHeight: 1.6,
							}}
						>
							{"lorem ipsum dolor it est"}
						</Typography>
					</CardContent>
				</Card>
				<Card
					sx={{
						width: "300px",

						flexShrink: 0,

						borderRadius: "18px",

						background: "#151515",

						border: "1px solid rgba(255,255,255,0.08)",

						overflow: "hidden",

						transition: "all 0.3s ease",

						"&:hover": {
							transform: "translateY(-8px)",

							border: "1px solid rgba(255,150,0,0.5)",

							boxShadow: `
                    0 0 15px rgba(255,100,0,0.25),
                    0 15px 40px rgba(0,0,0,0.4)
                  `,
						},
					}}
				>
					{/* IMAGEM */}
					<CardMedia
						component="img"
						image={imageTest}
						alt={"Test"}
						sx={{
							height: "200px",
							objectFit: "cover",
						}}
					/>

					{/* CONTEÚDO */}
					<CardContent sx={{ p: 3 }}>
						<Typography
							sx={{
								color: "#ff9500",
								fontSize: "0.75rem",
								fontWeight: 700,
								letterSpacing: "1px",
								mb: 1,
							}}
						>
							{"29 ago 2026"}
						</Typography>

						<Typography
							sx={{
								color: "#fff",
								fontFamily: "Cinzel, serif",
								fontSize: "1.2rem",
								fontWeight: 600,
								mb: 1,
							}}
						>
							{"TESTE"}
						</Typography>

						<Typography
							sx={{
								color: "rgba(255,255,255,0.65)",
								fontSize: "0.9rem",
								lineHeight: 1.6,
							}}
						>
							{"lorem ipsum dolor it est"}
						</Typography>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}

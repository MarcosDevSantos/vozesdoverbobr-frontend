import bannerVideo from "../assets/banner.mp4";
import Header from "../components/header";
import vozesLogo from "../assets/logoVozes.png";
import { Button, Typography } from "@mui/material";
import groupImage from "../assets/grupo.jpeg";
import JoinVozes from "../components/joinVozesButton";
import groupImage1 from "../assets/group1.jpeg";
import LastPublications from "../components/lastPublications";

export default function Home() {
	return (
		<div>
			<div style={{ width: "100%", height: "90vh" }}>
				<img
					style={{
						position: "absolute",
						inset: 0,

						width: "100%",
						height: "90vh",

						objectFit: "cover",
						objectPosition: "center",

						zIndex: 0,
					}}
					src={groupImage}
				/>

				<div
					style={{
						position: "absolute",
						inset: 0,
						height: "90vh",
						backgroundColor: "rgba(34, 22, 11, 0.48)",
						zIndex: 1,
					}}
				/>

				<div style={{ zIndex: 2, position: "relative" }}>
					<div>
						<Header />
					</div>
					<div
						style={{
							width: "100%",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							alignItems: "center",
							marginTop: "80px",
						}}
					>
						<div>
							<img style={{ width: "150px" }} src={vozesLogo} />
						</div>
						<div>
							<Typography
								sx={{ color: "#fff", fontFamily: "Cinzel, serif" }}
								variant="h5"
							>
								Instituto do Verbo Encarnado
							</Typography>
						</div>
						<div>
							<Typography
								sx={{ color: "#fff", fontFamily: "Cinzel, serif" }}
								variant="h2"
							>
								Vozes do Verbo
							</Typography>
						</div>

						<div>
							<JoinVozes />
						</div>
					</div>
					<div
						style={{
							width: "100%",
							display: "flex",
							flexDirection: "column",
							marginTop: "80px",
						}}
					></div>
				</div>
			</div>
			<div
				style={{ width: "100%", marginTop: "50px", backgroundColor: "#fff" }}
			>
				<div
					style={{
						padding: "30px",
						display: "flex",
						flexDirection: "row",
						gap: "50px",
					}}
				>
					<div style={{ width: "70%" }}>
						<img
							style={{ width: "100%", borderRadius: "60px" }}
							src={groupImage1}
						/>
					</div>
					<div style={{ display: "flex", flexDirection: "column" }}>
						<div>
							<Typography
								sx={{ color: "#000", fontFamily: "Cinzel, serif" }}
								variant="h3"
							>
								Quem Somos Nós?
							</Typography>
						</div>
						<div>
							<br />
							<Typography
								sx={{ color: "#000", fontFamily: "Cinzel, serif" }}
								variant="body1"
							>
								O Vozes do Verbo é um grupo nascido em 2014 na Itália,
								comprometidos com o aprofundamento da fé católica e sua defesa
								pelo mundo. Estamos atualmente em 11 países, tendo como objetivo
								levar a verdade do evangelho a todos os círculos da cultura.
							</Typography>
							<br />
							<Typography
								sx={{ color: "#000", fontFamily: "Cinzel, serif" }}
								variant="body1"
							>
								NO Brasil, nascemos sob a tutela da família religiosa do Verbo
								Encarnado, no dia 15 de novembro de 2019. COm grande desejo de
								ser a voz do Verbo para humanidade.
							</Typography>
						</div>
					</div>
				</div>
			</div>
			<div
				style={{ width: "100%", backgroundColor: "#fff", marginTop: "24px" }}
			>
				<LastPublications />
			</div>
		</div>
	);
}

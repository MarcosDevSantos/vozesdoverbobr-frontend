import { Button } from "@mui/material";

export default function JoinVozes() {
	return (
		<Button
			sx={{
				p: 0,
				minWidth: "280px",
				height: "65px",

				borderRadius: "50px",
				overflow: "hidden",

				background: "transparent",

				boxShadow: `
        0 0 10px rgba(255, 100, 0, 0.5),
        0 0 25px rgba(255, 200, 0, 0.3)
      `,

				transition: "all 0.3s ease",

				"&:hover": {
					transform: "scale(1.06)",

					boxShadow: `
          0 0 15px rgba(255, 100, 0, 0.8),
          0 0 30px rgba(255, 180, 0, 0.7),
          0 0 50px rgba(255, 200, 0, 0.4)
        `,
				},

				"&:active": {
					transform: "scale(0.97)",
				},
			}}
		>
			{/* PARTE LARANJA */}
			<span
				style={{
					width: "65%",
					height: "100%",

					display: "flex",
					alignItems: "center",
					justifyContent: "center",

					background: "linear-gradient(135deg, #ff5a00, #ff9500)",

					color: "#fff",

					fontSize: "1.05rem",
					fontWeight: 800,
					letterSpacing: "1px",

					border: "2px solid #ff7300",

					borderRight: "none",
					borderRadius: "50px 0 0 50px",

					boxShadow: `
          inset 0 0 15px rgba(255,255,255,0.2),
          0 0 10px rgba(255,90,0,0.8),
          0 0 20px rgba(255,90,0,0.5)
        `,
				}}
			>
				FAÇA PARTE
			</span>

			{/* PARTE VERDE */}
			<span
				style={{
					width: "35%",
					height: "100%",

					display: "flex",
					alignItems: "center",
					justifyContent: "center",

					background: "linear-gradient(135deg, #006b35, #009c4a)",

					fontSize: "2rem",

					border: "2px solid #ffd700",

					borderLeft: "none",
					borderRadius: "0 50px 50px 0",

					boxShadow: `
          inset 0 0 15px rgba(255,255,255,0.15),
          0 0 8px #ffd700,
          0 0 20px rgba(255,215,0,0.7),
          0 0 35px rgba(255,200,0,0.4)
        `,
				}}
			>
				🇧🇷
			</span>
		</Button>
	);
}

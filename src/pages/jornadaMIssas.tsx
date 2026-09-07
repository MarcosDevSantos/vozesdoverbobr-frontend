import { useMemo, useState } from "react";
import {
	Box,
	Button,
	Container,
	Divider,
	Stack,
	Typography,
} from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import GroupsIcon from "@mui/icons-material/Groups";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ORANGE = "#FF6600";
const ORANGE_LIGHT = "#FF7A00";
const ORANGE_SOFT = "#FFF7F2";
const TEXT = "#1A1A1A";
const TEXT_LIGHT = "#666666";

type Day = {
	date: Date;
	dayName: string;
	shortName: string;
	dayNumber: number;
	month: string;
};

const getStartOfWeek = (date: Date) => {
	const result = new Date(date);
	const day = result.getDay();

	// Segunda-feira como início da semana
	const diff = day === 0 ? -6 : 1 - day;

	result.setDate(result.getDate() + diff);
	result.setHours(0, 0, 0, 0);

	return result;
};

const getWeekDays = (date: Date): Day[] => {
	const start = getStartOfWeek(date);

	const formatter = new Intl.DateTimeFormat("pt-BR", {
		weekday: "long",
	});

	const shortFormatter = new Intl.DateTimeFormat("pt-BR", {
		weekday: "short",
	});

	const monthFormatter = new Intl.DateTimeFormat("pt-BR", {
		month: "long",
	});

	return Array.from({ length: 7 }, (_, index) => {
		const current = new Date(start);

		current.setDate(start.getDate() + index);

		const dayName = formatter.format(current);
		const shortName = shortFormatter.format(current);

		return {
			date: current,
			dayName:
				dayName.charAt(0).toUpperCase() +
				dayName.slice(1),
			shortName:
				shortName.charAt(0).toUpperCase() +
				shortName.slice(1).replace(".", ""),
			dayNumber: current.getDate(),
			month: monthFormatter
				.format(current)
				.replace(".", ""),
		};
	});
};

const isSameDay = (date1: Date, date2: Date) => {
	return (
		date1.getFullYear() === date2.getFullYear() &&
		date1.getMonth() === date2.getMonth() &&
		date1.getDate() === date2.getDate()
	);
};

export default function JornadaMissas() {
	const today = new Date();

	const weekDays = useMemo(() => {
		return getWeekDays(today);
	}, []);

	const [selectedDays, setSelectedDays] = useState<string[]>([]);

	/*
	 * MOCK
	 *
	 * Depois você pode substituir isso pelos dados
	 * vindos do seu backend.
	 */
	const commitments: Record<string, number> = {
		[weekDays[0].date.toISOString()]: 18,
		[weekDays[1].date.toISOString()]: 27,
		[weekDays[2].date.toISOString()]: 31,
		[weekDays[3].date.toISOString()]: 24,
		[weekDays[4].date.toISOString()]: 42,
		[weekDays[5].date.toISOString()]: 56,
		[weekDays[6].date.toISOString()]: 61,
	};

	const toggleDay = (date: Date) => {
		const key = date.toISOString();

		setSelectedDays((current) => {
			if (current.includes(key)) {
				return current.filter((item) => item !== key);
			}

			return [...current, key];
		});
	};

	const selectedCount = selectedDays.length;

	return (
		<Box
			sx={{
				minHeight: "100vh",
				backgroundColor: "#fff",
				color: TEXT,
			}}
		>
			{/* HERO */}

			<Box
				sx={{
					minHeight: {
						xs: "520px",
						md: "600px",
					},
					position: "relative",
					display: "flex",
					alignItems: "center",
					overflow: "hidden",

					background: `
						radial-gradient(
							circle at 50% 40%,
							rgba(255,102,0,0.22),
							transparent 45%
						),
						linear-gradient(
							135deg,
							#120904 0%,
							#241006 50%,
							#0c0704 100%
						)
					`,
				}}
			>
				{/* brilho decorativo */}

				<Box
					sx={{
						position: "absolute",
						width: "500px",
						height: "500px",
						borderRadius: "50%",
						backgroundColor: ORANGE,
						opacity: 0.06,
						filter: "blur(100px)",
						top: "-200px",
						right: "-150px",
					}}
				/>

				<Box
					sx={{
						position: "absolute",
						width: "400px",
						height: "400px",
						borderRadius: "50%",
						backgroundColor: ORANGE,
						opacity: 0.05,
						filter: "blur(100px)",
						bottom: "-200px",
						left: "-100px",
					}}
				/>

				<Container
					maxWidth="lg"
					sx={{
						position: "relative",
						zIndex: 2,
						display: "flex",
						justifyContent: "center",
					}}
				>
					<Stack
						alignItems="center"
						textAlign="center"
						spacing={3}
						sx={{
							maxWidth: "850px",
							width: "100%",
							mx: "auto",
						}}
					>

						

						{/* PEQUENO TÍTULO */}

						<Typography
							sx={{
								color: "#FF9A5C",
								fontFamily: "Cinzel, serif",
								fontSize: {
									xs: "0.7rem",
									md: "0.85rem",
								},
								letterSpacing: {
									xs: "2px",
									md: "4px",
								},
								textTransform: "uppercase",
							}}
						>
							Uma missão, uma oração, um compromisso
						</Typography>

						{/* TÍTULO */}

						<Typography
							component="h1"
							sx={{
								color: "#fff",
								fontFamily: "Cinzel, serif",
								fontWeight: 600,
								fontSize: {
									xs: "3rem",
									sm: "4.5rem",
									md: "6rem",
								},
								lineHeight: 0.95,
								letterSpacing: {
									xs: "-1px",
									md: "-3px",
								},
								textShadow:
									"0 10px 40px rgba(0,0,0,0.5)",
							}}
						>
							Jornada de Missas
						</Typography>

						{/* DESCRIÇÃO */}

						<Typography
							sx={{
								color:
									"rgba(255,255,255,0.82)",
								fontSize: {
									xs: "1rem",
									md: "1.15rem",
								},
								lineHeight: 1.8,
								maxWidth: "680px",
								fontWeight: 300,
							}}
						>
							Una-se a nós em oração e participe da
							Santa Missa oferecendo seus frutos
							pelas missões do Instituto do Verbo
							Encarnado.
						</Typography>

						<Box
							sx={{
								width: 70,
								height: 2,
								backgroundColor: ORANGE,
								mt: 1,
							}}
						/>
					</Stack>
				</Container>
			</Box>

			{/* CONTEÚDO */}

			<Container
				maxWidth="lg"
				sx={{
					py: {
						xs: 7,
						md: 10,
					},
				}}
			>
				{/* INTRODUÇÃO */}

				<Stack
					alignItems="center"
					textAlign="center"
					spacing={2}
					sx={{
						maxWidth: "800px",
						mx: "auto",
						mb: 6,
					}}
				>
					<Typography
						sx={{
							color: ORANGE,
							fontFamily: "Cinzel, serif",
							fontWeight: 600,
							fontSize: "0.8rem",
							letterSpacing: "3px",
							textTransform: "uppercase",
						}}
					>
						Sua semana de oração
					</Typography>

					<Typography
						component="h2"
						sx={{
							fontFamily: "Cinzel, serif",
							fontWeight: 600,
							fontSize: {
								xs: "2rem",
								md: "3rem",
							},
							lineHeight: 1.15,
						}}
					>
						Escolha os dias da sua jornada
					</Typography>

					<Typography
						sx={{
							color: TEXT_LIGHT,
							fontSize: "1rem",
							lineHeight: 1.8,
							maxWidth: "650px",
						}}
					>
						Assuma o compromisso de participar da
						Santa Missa em um ou mais dias desta
						semana, oferecendo sua oração pelas
						missões e pelos frutos do Instituto.
					</Typography>
				</Stack>

				{/* SEMANA */}

				<Box
					sx={{
						backgroundColor: ORANGE_SOFT,
						borderRadius: {
							xs: "20px",
							md: "28px",
						},
						p: {
							xs: 2,
							sm: 3,
							md: 5,
						},
						border:
							"1px solid rgba(255,102,0,0.1)",
					}}
				>
					{/* CABEÇALHO */}

					<Stack
						direction={{
							xs: "column",
							md: "row",
						}}
						alignItems={{
							xs: "flex-start",
							md: "center",
						}}
						justifyContent="space-between"
						gap={2}
						mb={4}
					>
						<Box>
							<Typography
								sx={{
									color: TEXT_LIGHT,
									fontSize: "0.8rem",
									textTransform:
										"uppercase",
									letterSpacing: "2px",
									mb: 0.5,
								}}
							>
								Semana atual
							</Typography>

							<Typography
								sx={{
                                    marginBottom: '20px',
									fontFamily:
										"Cinzel, serif",
									fontSize: {
										xs: "1.5rem",
										md: "2rem",
									},
									fontWeight: 600,
									textTransform:
										"capitalize",
								}}
							>
								{weekDays[0].dayNumber}{" "}
								{weekDays[0].month} —{" "}
								{weekDays[6].dayNumber}{" "}
								{weekDays[6].month}
							</Typography>
						</Box>


					</Stack>

					{/* DIAS */}

					<Box
						sx={{
							display: "grid",
							gridTemplateColumns: {
								xs: "repeat(2, 1fr)",
								sm: "repeat(4, 1fr)",
								md: "repeat(7, 1fr)",
							},
							gap: {
								xs: 1.5,
								md: 2,
							},
						}}
					>
						{weekDays.map((day) => {
							const key =
								day.date.toISOString();

							const selected =
								selectedDays.includes(key);

							const isToday = isSameDay(
								day.date,
								today
							);

							const people =
								commitments[key] ?? 0;

							return (
								<Box
									key={key}
									onClick={() =>
										toggleDay(
											day.date
										)
									}
									sx={{
										cursor: "pointer",
										position:
											"relative",
										minHeight: {
											xs: 160,
											md: 210,
										},
										backgroundColor:
											selected
												? ORANGE
												: "#fff",
										borderRadius:
											"18px",
										border: isToday
											? `2px solid ${ORANGE}`
											: "1px solid rgba(0,0,0,0.06)",
										display: "flex",
										flexDirection:
											"column",
										alignItems:
											"center",
										justifyContent:
											"space-between",
										p: {
											xs: 1.5,
											md: 2,
										},
										transition:
											"all 0.25s ease",

										"&:hover": {
											transform:
												"translateY(-5px)",
											boxShadow:
												"0 15px 30px rgba(0,0,0,0.08)",
										},
									}}
								>
									{/* HOJE */}

									{isToday && (
										<Box
											sx={{
												position:
													"absolute",
												top: 10,
												right: 10,
												backgroundColor:
													selected
														? "#fff"
														: ORANGE,
												color:
													selected
														? ORANGE
														: "#fff",
												fontSize:
													"0.55rem",
												fontWeight: 700,
												letterSpacing:
													"1px",
												borderRadius:
													"50px",
												px: 1,
												py: 0.5,
											}}
										>
											HOJE
										</Box>
									)}

									{/* DIA */}

									<Stack
										alignItems="center"
										spacing={0.5}
									>
										<Typography
											sx={{
												fontSize:
													"0.7rem",
												fontWeight: 600,
												color:
													selected
														? "rgba(255,255,255,0.8)"
														: TEXT_LIGHT,
												textTransform:
													"uppercase",
											}}
										>
											{day.shortName}
										</Typography>

										<Typography
											sx={{
												fontFamily:
													"Cinzel, serif",
												fontSize: {
													xs: "2rem",
													md: "2.5rem",
												},
												fontWeight: 600,
												lineHeight: 1,
												color:
													selected
														? "#fff"
														: TEXT,
											}}
										>
											{
												day.dayNumber
											}
										</Typography>

										<Typography
											sx={{
												fontSize:
													"0.7rem",
												color:
													selected
														? "rgba(255,255,255,0.75)"
														: TEXT_LIGHT,
												textTransform:
													"capitalize",
											}}
										>
											{
												day.month
											}
										</Typography>
									</Stack>

									{/* COMPROMISSOS */}

									<Stack
										alignItems="center"
										spacing={0.5}
									>
										<GroupsIcon
											sx={{
												fontSize: 18,
												color:
													selected
														? "#fff"
														: ORANGE,
											}}
										/>

										<Typography
											sx={{
												fontSize:
													"0.7rem",
												fontWeight: 500,
												color:
													selected
														? "#fff"
														: TEXT_LIGHT,
												textAlign:
													"center",
											}}
										>
											{people}{" "}
											{people ===
											1
												? "pessoa"
												: "pessoas"}
										</Typography>
									</Stack>

									{/* CHECK */}

									{selected && (
										<Box
											sx={{
												position:
													"absolute",
												top: 10,
												left: 10,
											}}
										>
											<CheckCircleIcon
												sx={{
													color:
														"#fff",
													fontSize: 22,
												}}
											/>
										</Box>
									)}
								</Box>
							);
						})}
					</Box>
				</Box>

				{/* ÁREA DE COMPROMISSO */}

				<Box
					sx={{
						mt: 5,
						p: {
							xs: 3,
							md: 5,
						},
						borderRadius: "24px",
						backgroundColor: "#fff",
						border:
							"1px solid rgba(255,102,0,0.15)",
						boxShadow:
							"0 15px 50px rgba(0,0,0,0.06)",
					}}
				>
					<Stack
						direction={{
							xs: "column",
							md: "row",
						}}
						sx={{
                            justifyContent: 'center'
                        }}
						gap={4}
					>
						

						<Button
							variant="contained"
							disabled={selectedCount === 0}
							endIcon={
								<ArrowForwardIcon />
							}
							sx={{
								minWidth: {
									xs: "100%",
									md: "230px",
								},
								height: 52,
								borderRadius: "50px",
								backgroundColor:
									ORANGE,
								fontWeight: 600,
								textTransform:
									"none",
								boxShadow:
									"0 10px 25px rgba(255,102,0,0.25)",

								"&:hover": {
									backgroundColor:
										"#E85C00",
								},

								"&.Mui-disabled": {
									backgroundColor:
										"#eee",
									color: "#aaa",
								},
							}}
							onClick={() => {
								console.log(
									"Enviar compromisso:",
									selectedDays
								);

								/*
								 * Aqui futuramente:
								 *
								 * POST /jornada-missas
								 *
								 * {
								 *   days: selectedDays
								 * }
								 */
							}}
						>
							Assumir compromisso
						</Button>
					</Stack>
				</Box>

				{/* FRASE FINAL */}

				<Stack
					alignItems="center"
					textAlign="center"
					sx={{
						mt: 8,
						maxWidth: "700px",
						mx: "auto",
					}}
					spacing={2}
				>
					<Divider
						sx={{
							width: 50,
							borderColor: ORANGE,
							borderBottomWidth: 2,
						}}
					/>

					<Typography
						sx={{
							fontFamily: "Cinzel, serif",
							fontStyle: "italic",
							fontSize: {
								xs: "1rem",
								md: "1.15rem",
							},
							lineHeight: 1.8,
							color: TEXT_LIGHT,
						}}
					>
						“Que cada Santa Missa oferecida seja
						uma semente de graça para as almas e
						para o crescimento das missões.”
					</Typography>
				</Stack>
			</Container>
		</Box>
	);
}
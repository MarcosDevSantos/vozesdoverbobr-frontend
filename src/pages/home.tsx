import React from 'react';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Grid,
  Card,
  Stack,
  IconButton,
  Chip,
  createTheme,
  ThemeProvider,
  CssBaseline,
  Divider,
} from '@mui/material';

import {
  ArrowForward,
  Church,
  Groups,
  FavoriteBorder,
  CalendarMonth,
  Instagram,
  WhatsApp,
  Menu,
  Bolt,
  LocationOn,
} from '@mui/icons-material';

import videoBg from '../assets/banner.mp4';
import logoVerbo from '../assets/logo-verbo.png';

/* =========================================================
   TEMA
========================================================= */

const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6B00',
      dark: '#E85F00',
      light: '#FF8A3D',
      contrastText: '#FFFFFF',
    },

    secondary: {
      main: '#171717',
    },

    background: {
      default: '#F7F7F5',
      paper: '#FFFFFF',
    },

    text: {
      primary: '#171717',
      secondary: '#707070',
    },
  },

  typography: {
    fontFamily: '"Poppins", "Inter", "Roboto", sans-serif',

    h1: {
      fontWeight: 800,
      letterSpacing: '-0.055em',
    },

    h2: {
      fontWeight: 800,
      letterSpacing: '-0.045em',
    },

    h3: {
      fontWeight: 800,
      letterSpacing: '-0.035em',
    },

    button: {
      fontWeight: 700,
      textTransform: 'none',
    },
  },

  shape: {
    borderRadius: 20,
  },

  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 700,
        },
      },
    },
  },
});

/* =========================================================
   DADOS
========================================================= */

const pillars = [
  {
    number: '01',
    icon: <Church />,
    title: 'Espiritualidade',
    text: 'Fundamentados no carisma do Verbo Encarnado, buscamos viver a Palavra de Deus em nossa vida cotidiana.',
  },
  {
    number: '02',
    icon: <Groups />,
    title: 'Comunidade',
    text: 'Um espaço de amizade, partilha e crescimento onde ninguém precisa caminhar sozinho.',
  },
  {
    number: '03',
    icon: <FavoriteBorder />,
    title: 'Missão',
    text: 'Transformamos aquilo que vivemos em ações concretas para servir a Deus e à comunidade.',
  },
];

/* =========================================================
   HOME
========================================================= */

export const Home: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* =====================================================
          HEADER
      ====================================================== */}

      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: '#FFFFFF',
          color: '#171717',
          borderBottom: '1px solid #EAEAEA',
          zIndex: 1000,
        }}
      >
        <Container maxWidth="lg">
          <Toolbar
            disableGutters
            sx={{
              height: 76,
              minHeight: '76px !important',
            }}
          >
            {/* LOGO */}

            <Box
              sx={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1.5,
                }}
              >
                <Box
                  component="img"
                  src={logoVerbo}
                  alt="Vozes do Verbo"
                  sx={{
                    width: 43,
                    height: 43,
                    objectFit: 'contain',
                  }}
                />

                <Box>
                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 800,
                      letterSpacing: '0.06em',
                      lineHeight: 1.1,
                      color: '#171717',
                    }}
                  >
                    VOZES DO VERBO
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 9,
                      fontWeight: 600,
                      letterSpacing: '0.18em',
                      color: '#999',
                      mt: 0.5,
                    }}
                  >
                    JUVENTUDE
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* MENU DESKTOP */}

            <Stack
              direction="row"
              spacing={0.5}
              sx={{
                display: {
                  xs: 'none',
                  md: 'flex',
                },
              }}
            >
              <Button
                sx={{
                  px: 2,
                  color: '#555',
                  borderRadius: 2,

                  '&:hover': {
                    color: '#FF6B00',
                    background: '#FFF5EE',
                  },
                }}
              >
                Início
              </Button>

              <Button
                sx={{
                  px: 2,
                  color: '#555',
                  borderRadius: 2,

                  '&:hover': {
                    color: '#FF6B00',
                    background: '#FFF5EE',
                  },
                }}
              >
                Sobre Nós
              </Button>

              <Button
                sx={{
                  px: 2,
                  color: '#555',
                  borderRadius: 2,

                  '&:hover': {
                    color: '#FF6B00',
                    background: '#FFF5EE',
                  },
                }}
              >
                Encontros
              </Button>

              <Button
                sx={{
                  px: 2,
                  color: '#555',
                  borderRadius: 2,

                  '&:hover': {
                    color: '#FF6B00',
                    background: '#FFF5EE',
                  },
                }}
              >
                Galeria
              </Button>
            </Stack>

            {/* BOTÃO */}

            <Box
              sx={{
                flex: 1,
                display: 'flex',
                justifyContent: 'flex-end',
              }}
            >
              <Button
                variant="contained"
                sx={{
                  px: 3,
                  py: 1.15,
                  borderRadius: 2,
                  background: '#FF6B00',
                  boxShadow: 'none',

                  '&:hover': {
                    background: '#E85F00',
                    boxShadow: 'none',
                  },
                }}
              >
                Participar
              </Button>

              {/* MOBILE */}

              <IconButton
                sx={{
                  display: {
                    xs: 'flex',
                    md: 'none',
                  },
                  ml: 1,
                  color: '#171717',
                }}
              >
                <Menu />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* =====================================================
          HERO
      ====================================================== */}

      <Box
        sx={{
          position: 'relative',
          minHeight: {
            xs: 'calc(100svh - 76px)',
            md: 'calc(100vh - 76px)',
          },
          marginTop: '76px',
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
          background: '#111',
        }}
      >
        {/* VÍDEO */}

        <Box
          component="video"
          src={videoBg}
          autoPlay
          loop
          muted
          playsInline
          sx={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />

        {/* OVERLAY */}

        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            background: `
              linear-gradient(
                90deg,
                rgba(0,0,0,0.90) 0%,
                rgba(0,0,0,0.72) 42%,
                rgba(0,0,0,0.32) 100%
              )
            `,
          }}
        />

        {/* GLOW */}

        <Box
          sx={{
            position: 'absolute',
            width: 650,
            height: 650,
            borderRadius: '50%',
            background: 'rgba(255,107,0,0.16)',
            filter: 'blur(130px)',
            right: -300,
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        />

        {/* CONTEÚDO */}

        <Container
          maxWidth="lg"
          sx={{
            position: 'relative',
            zIndex: 2,
            py: {
              xs: 9,
              md: 10,
            },
          }}
        >
          <Grid container>
            <Grid item xs={12} md={8} lg={7}>

              <Stack spacing={3}>

                {/* CHIP */}

                <Chip
                  icon={<Bolt />}
                  label="JUVENTUDE • FÉ • COMUNIDADE"
                  sx={{
                    alignSelf: 'flex-start',
                    color: '#FF9A58',
                    background: 'rgba(255,107,0,0.12)',
                    border: '1px solid rgba(255,107,0,0.28)',
                    fontWeight: 700,
                    letterSpacing: '0.04em',

                    '& .MuiChip-icon': {
                      color: '#FF6B00',
                    },
                  }}
                />

                {/* TÍTULO */}

                <Typography
                  component="h1"
                  sx={{
                    color: '#FFFFFF',
                    fontSize: {
                      xs: '3.2rem',
                      sm: '4.5rem',
                      md: '5.8rem',
                    },
                    lineHeight: 0.96,
                    maxWidth: 750,
                  }}
                >
                  Uma geração
                  <br />

                  que quer
                  <br />

                  <Box
                    component="span"
                    sx={{
                      color: '#FF6B00',
                    }}
                  >
                    viver mais.
                  </Box>
                </Typography>

                {/* DESCRIÇÃO */}

                <Typography
                  sx={{
                    maxWidth: 580,
                    color: 'rgba(255,255,255,0.72)',
                    fontSize: {
                      xs: 15,
                      md: 17,
                    },
                    lineHeight: 1.8,
                  }}
                >
                  Somos uma comunidade de jovens que busca viver
                  a fé, construir amizades verdadeiras e descobrir
                  como colocar seus dons a serviço de Deus.
                </Typography>

                {/* BOTÕES */}

                <Stack
                  direction={{
                    xs: 'column',
                    sm: 'row',
                  }}
                  spacing={2}
                  sx={{
                    alignItems: {
                      xs: 'stretch',
                      sm: 'center',
                    },
                  }}
                >
                  <Button
                    variant="contained"
                    size="large"
                    endIcon={<ArrowForward />}
                    sx={{
                      width: {
                        xs: '100%',
                        sm: 'auto',
                      },
                      px: 4,
                      py: 1.7,
                      borderRadius: 2,
                      background: '#FF6B00',
                      fontSize: 15,
                      boxShadow: '0 15px 40px rgba(255,107,0,0.25)',

                      '&:hover': {
                        background: '#E85F00',
                        transform: 'translateY(-2px)',
                      },

                      transition: '0.2s',
                    }}
                  >
                    Quero participar
                  </Button>

                  <Button
                    size="large"
                    sx={{
                      width: {
                        xs: '100%',
                        sm: 'auto',
                      },
                      px: 4,
                      py: 1.7,
                      borderRadius: 2,
                      color: '#FFFFFF',
                      border: '1px solid rgba(255,255,255,0.28)',

                      '&:hover': {
                        background: 'rgba(255,255,255,0.08)',
                        borderColor: '#FFFFFF',
                      },
                    }}
                  >
                    Conhecer o grupo
                  </Button>
                </Stack>

              </Stack>

            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* =====================================================
          SOBRE NÓS
      ====================================================== */}

      <Box
        id="sobre"
        sx={{
          background: '#FFFFFF',
          py: {
            xs: 10,
            md: 15,
          },
        }}
      >
        <Container maxWidth="lg">

          <Grid
            container
            spacing={{
              xs: 5,
              md: 10,
            }}
            alignItems="center"
          >

            {/* ESQUERDA */}

            <Grid item xs={12} md={6}>

              <Box sx={{ maxWidth: 550 }}>

                <Typography
                  sx={{
                    color: '#FF6B00',
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: '0.18em',
                    mb: 2,
                  }}
                >
                  QUEM SOMOS
                </Typography>

                <Typography
                  variant="h2"
                  sx={{
                    fontSize: {
                      xs: '2.8rem',
                      md: '4.4rem',
                    },
                    lineHeight: 1,
                    color: '#171717',
                    mb: 3,
                  }}
                >
                  Não é só
                  <br />
                  um grupo.
                </Typography>

                <Typography
                  sx={{
                    color: '#707070',
                    fontSize: 16,
                    lineHeight: 1.9,
                  }}
                >
                  O Vozes do Verbo é um espaço para jovens que
                  desejam caminhar juntos na fé, construir amizades
                  verdadeiras e descobrir como colocar seus dons
                  a serviço de Deus e da comunidade.
                </Typography>

              </Box>

            </Grid>

            {/* DIREITA */}

            <Grid item xs={12} md={6}>

              <Box
                sx={{
                  width: '100%',
                  minHeight: {
                    xs: 300,
                    md: 390,
                  },
                  borderRadius: 5,
                  background: '#111111',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  p: 5,
                }}
              >

                {/* CÍRCULOS */}

                <Box
                  sx={{
                    position: 'absolute',
                    width: 350,
                    height: 350,
                    borderRadius: '50%',
                    border: '1px solid rgba(255,107,0,0.25)',
                  }}
                />

                <Box
                  sx={{
                    position: 'absolute',
                    width: 220,
                    height: 220,
                    borderRadius: '50%',
                    border: '1px solid rgba(255,107,0,0.20)',
                  }}
                />

                <Box
                  sx={{
                    position: 'relative',
                    zIndex: 2,
                    textAlign: 'center',
                    maxWidth: 420,
                  }}
                >

                  <Box
                    component="img"
                    src={logoVerbo}
                    alt="Verbo Encarnado"
                    sx={{
                      width: 75,
                      mb: 3,
                    }}
                  />

                  <Typography
                    sx={{
                      color: '#FFFFFF',
                      fontSize: {
                        xs: 24,
                        md: 30,
                      },
                      fontWeight: 700,
                      lineHeight: 1.35,
                    }}
                  >
                    Uma comunidade.
                    <br />

                    Uma caminhada.
                    <br />

                    Um propósito.
                  </Typography>

                </Box>

              </Box>

            </Grid>

          </Grid>

        </Container>
      </Box>

      {/* =====================================================
          MISSÃO
      ====================================================== */}

      <Box
        sx={{
          background: '#F6F6F4',
          py: {
            xs: 10,
            md: 15,
          },
        }}
      >
        <Container maxWidth="lg">

          {/* CABEÇALHO DA SEÇÃO */}

          <Box
            sx={{
              maxWidth: 700,
              mb: 7,
            }}
          >

            <Typography
              sx={{
                color: '#FF6B00',
                fontSize: 12,
                fontWeight: 800,
                letterSpacing: '0.18em',
                mb: 2,
              }}
            >
              NOSSA MISSÃO
            </Typography>

            <Typography
              variant="h2"
              sx={{
                fontSize: {
                  xs: '2.8rem',
                  md: '4.5rem',
                },
                lineHeight: 1,
                color: '#171717',
              }}
            >
              Três pilares.
              <br />

              <Box
                component="span"
                sx={{
                  color: '#FF6B00',
                }}
              >
                Um propósito.
              </Box>
            </Typography>

          </Box>

          {/* CARDS */}

          <Grid
            container
            spacing={3}
            alignItems="stretch"
          >

            {pillars.map((pillar) => (
              <Grid
                item
                xs={12}
                md={4}
                key={pillar.number}
                sx={{
                  display: 'flex',
                }}
              >

                <Card
                  sx={{
                    width: '100%',
                    minHeight: 370,
                    p: 4,
                    borderRadius: 5,
                    border: '1px solid #E6E6E4',
                    boxShadow: 'none',
                    background: '#FFFFFF',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.25s ease',

                    '&:hover': {
                      transform: 'translateY(-7px)',
                      borderColor: 'rgba(255,107,0,0.25)',
                      boxShadow:
                        '0 25px 60px rgba(0,0,0,0.08)',
                    },
                  }}
                >

                  {/* TOPO DO CARD */}

                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >

                    <Box
                      sx={{
                        width: 58,
                        height: 58,
                        borderRadius: 2.5,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#FFF3EA',
                        color: '#FF6B00',

                        '& svg': {
                          fontSize: 29,
                        },
                      }}
                    >
                      {pillar.icon}
                    </Box>

                    <Typography
                      sx={{
                        fontSize: 28,
                        fontWeight: 800,
                        color: '#E1E1E1',
                      }}
                    >
                      {pillar.number}
                    </Typography>

                  </Box>

                  {/* CONTEÚDO DO CARD */}

                  <Box
                    sx={{
                      mt: 'auto',
                    }}
                  >

                    <Typography
                      sx={{
                        color: '#171717',
                        fontSize: 22,
                        fontWeight: 800,
                        mb: 1.5,
                      }}
                    >
                      {pillar.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: '#747474',
                        fontSize: 14,
                        lineHeight: 1.8,
                      }}
                    >
                      {pillar.text}
                    </Typography>

                  </Box>

                </Card>

              </Grid>
            ))}

          </Grid>

        </Container>
      </Box>

      {/* =====================================================
          ENCONTROS
      ====================================================== */}

      <Box
        id="encontros"
        sx={{
          background: '#111111',
          color: '#FFFFFF',
          py: {
            xs: 10,
            md: 15,
          },
        }}
      >
        <Container maxWidth="lg">

          <Grid
            container
            spacing={{
              xs: 6,
              md: 10,
            }}
            alignItems="center"
          >

            {/* ESQUERDA */}

            <Grid item xs={12} md={5}>

              <Box sx={{ maxWidth: 500 }}>

                <Typography
                  sx={{
                    color: '#FF6B00',
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: '0.18em',
                    mb: 2,
                  }}
                >
                  NOSSOS ENCONTROS
                </Typography>

                <Typography
                  variant="h2"
                  sx={{
                    fontSize: {
                      xs: '2.8rem',
                      md: '4.4rem',
                    },
                    lineHeight: 1,
                    mb: 3,
                  }}
                >
                  Fé que se
                  <br />

                  vive junto.
                </Typography>

                <Typography
                  sx={{
                    color: 'rgba(255,255,255,0.55)',
                    lineHeight: 1.9,
                    fontSize: 16,
                  }}
                >
                  Nossos encontros são momentos para rezar,
                  conversar, fazer novas amizades e viver a
                  experiência de estar em comunidade.
                </Typography>

              </Box>

            </Grid>

            {/* DIREITA */}

            <Grid item xs={12} md={7}>

              <Stack spacing={2}>

                {/* EVENTO 1 */}

                <Box
                  sx={{
                    width: '100%',
                    minHeight: 105,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 3,
                    p: 2.5,
                    borderRadius: 3,
                    background: 'rgba(255,255,255,0.045)',
                    border:
                      '1px solid rgba(255,255,255,0.08)',
                  }}
                >

                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      flexShrink: 0,
                      borderRadius: 2,
                      background: '#FF6B00',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <CalendarMonth />
                  </Box>

                  <Box>

                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: 17,
                        mb: 0.5,
                      }}
                    >
                      Encontro da Juventude
                    </Typography>

                    <Typography
                      sx={{
                        color: 'rgba(255,255,255,0.48)',
                        fontSize: 13,
                      }}
                    >
                      Sábado • Oração, partilha e convivência.
                    </Typography>

                  </Box>

                </Box>

                {/* EVENTO 2 */}

                <Box
                  sx={{
                    width: '100%',
                    minHeight: 105,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 3,
                    p: 2.5,
                    borderRadius: 3,
                    background: 'rgba(255,255,255,0.045)',
                    border:
                      '1px solid rgba(255,255,255,0.08)',
                  }}
                >

                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      flexShrink: 0,
                      borderRadius: 2,
                      background: 'rgba(255,107,0,0.12)',
                      color: '#FF6B00',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Church />
                  </Box>

                  <Box>

                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: 17,
                        mb: 0.5,
                      }}
                    >
                      Santa Missa
                    </Typography>

                    <Typography
                      sx={{
                        color: 'rgba(255,255,255,0.48)',
                        fontSize: 13,
                      }}
                    >
                      Domingo • Celebração e comunidade.
                    </Typography>

                  </Box>

                </Box>

                {/* EVENTO 3 */}

                <Box
                  sx={{
                    width: '100%',
                    minHeight: 105,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 3,
                    p: 2.5,
                    borderRadius: 3,
                    background: 'rgba(255,255,255,0.045)',
                    border:
                      '1px solid rgba(255,255,255,0.08)',
                  }}
                >

                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      flexShrink: 0,
                      borderRadius: 2,
                      background: 'rgba(255,107,0,0.12)',
                      color: '#FF6B00',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Groups />
                  </Box>

                  <Box>

                    <Typography
                      sx={{
                        fontWeight: 700,
                        fontSize: 17,
                        mb: 0.5,
                      }}
                    >
                      Noite Jovem
                    </Typography>

                    <Typography
                      sx={{
                        color: 'rgba(255,255,255,0.48)',
                        fontSize: 13,
                      }}
                    >
                      Um momento especial de amizade e fé.
                    </Typography>

                  </Box>

                </Box>

              </Stack>

            </Grid>

          </Grid>

        </Container>
      </Box>

      {/* =====================================================
          LOCALIZAÇÃO / INFO
      ====================================================== */}

      <Box
        sx={{
          background: '#FFFFFF',
          py: {
            xs: 8,
            md: 10,
          },
        }}
      >
        <Container maxWidth="lg">

          <Grid
            container
            spacing={3}
          >

            <Grid item xs={12} md={4}>

              <Box
                sx={{
                  height: '100%',
                  p: 4,
                  borderRadius: 4,
                  background: '#F7F7F5',
                }}
              >

                <LocationOn
                  sx={{
                    color: '#FF6B00',
                    fontSize: 30,
                    mb: 2,
                  }}
                />

                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: 18,
                    mb: 1,
                  }}
                >
                  Onde estamos
                </Typography>

                <Typography
                  sx={{
                    color: '#777',
                    fontSize: 14,
                    lineHeight: 1.7,
                  }}
                >
                  Família do Verbo Encarnado
                  <br />
                  São Paulo — SP
                </Typography>

              </Box>

            </Grid>

            <Grid item xs={12} md={4}>

              <Box
                sx={{
                  height: '100%',
                  p: 4,
                  borderRadius: 4,
                  background: '#F7F7F5',
                }}
              >

                <CalendarMonth
                  sx={{
                    color: '#FF6B00',
                    fontSize: 30,
                    mb: 2,
                  }}
                />

                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: 18,
                    mb: 1,
                  }}
                >
                  Quando nos encontramos
                </Typography>

                <Typography
                  sx={{
                    color: '#777',
                    fontSize: 14,
                    lineHeight: 1.7,
                  }}
                >
                  Nossos encontros acontecem
                  <br />
                  regularmente aos sábados.
                </Typography>

              </Box>

            </Grid>

            <Grid item xs={12} md={4}>

              <Box
                sx={{
                  height: '100%',
                  p: 4,
                  borderRadius: 4,
                  background: '#171717',
                  color: '#FFFFFF',
                }}
              >

                <WhatsApp
                  sx={{
                    color: '#FF6B00',
                    fontSize: 30,
                    mb: 2,
                  }}
                />

                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: 18,
                    mb: 1,
                  }}
                >
                  Quer conversar?
                </Typography>

                <Typography
                  sx={{
                    color: 'rgba(255,255,255,0.5)',
                    fontSize: 14,
                    lineHeight: 1.7,
                  }}
                >
                  Entre em contato conosco
                  <br />
                  e venha conhecer a juventude.
                </Typography>

              </Box>

            </Grid>

          </Grid>

        </Container>
      </Box>

      {/* =====================================================
          CTA
      ====================================================== */}

      <Box
        id="participar"
        sx={{
          background:
            'linear-gradient(135deg, #FF6300 0%, #FF852D 100%)',
          color: '#FFFFFF',
          py: {
            xs: 10,
            md: 14,
          },
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">

          <Typography
            variant="h2"
            sx={{
              fontSize: {
                xs: '2.8rem',
                md: '4.7rem',
              },
              lineHeight: 1,
              mb: 3,
            }}
          >
            Seu lugar pode
            <br />
            ser aqui.
          </Typography>

          <Typography
            sx={{
              maxWidth: 560,
              mx: 'auto',
              color: 'rgba(255,255,255,0.85)',
              fontSize: 16,
              lineHeight: 1.8,
            }}
          >
            Venha conhecer o Vozes do Verbo, fazer novas amizades
            e viver uma experiência diferente de comunidade.
          </Typography>

          <Button
            variant="contained"
            size="large"
            startIcon={<WhatsApp />}
            sx={{
              mt: 4,
              px: 4,
              py: 1.7,
              borderRadius: 2,
              background: '#FFFFFF',
              color: '#171717',
              fontSize: 15,
              boxShadow: 'none',

              '&:hover': {
                background: '#F5F5F5',
                boxShadow: 'none',
                transform: 'translateY(-2px)',
              },

              transition: '0.2s',
            }}
          >
            Falar no WhatsApp
          </Button>

        </Container>
      </Box>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <Box
        component="footer"
        sx={{
          background: '#0A0A0A',
          color: '#FFFFFF',
          py: 5,
        }}
      >
        <Container maxWidth="lg">

          <Stack
            direction={{
              xs: 'column',
              md: 'row',
            }}
            justifyContent="space-between"
            alignItems={{
              xs: 'flex-start',
              md: 'center',
            }}
            spacing={3}
          >

            {/* LOGO */}

            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
              }}
            >

              <Box
                component="img"
                src={logoVerbo}
                alt="Vozes do Verbo"
                sx={{
                  width: 42,
                }}
              />

              <Box>

                <Typography
                  sx={{
                    fontWeight: 800,
                    fontSize: 14,
                    letterSpacing: '0.05em',
                  }}
                >
                  VOZES DO VERBO
                </Typography>

                <Typography
                  sx={{
                    color: 'rgba(255,255,255,0.4)',
                    fontSize: 10,
                    mt: 0.3,
                  }}
                >
                  Juventude da Família do Verbo Encarnado
                </Typography>

              </Box>

            </Box>

            {/* REDES */}

            <Stack direction="row" spacing={1}>

              <IconButton
                sx={{
                  width: 42,
                  height: 42,
                  color: '#FFFFFF',
                  background: 'rgba(255,255,255,0.06)',

                  '&:hover': {
                    background: '#FF6B00',
                  },
                }}
              >
                <Instagram />
              </IconButton>

              <IconButton
                sx={{
                  width: 42,
                  height: 42,
                  color: '#FFFFFF',
                  background: 'rgba(255,255,255,0.06)',

                  '&:hover': {
                    background: '#FF6B00',
                  },
                }}
              >
                <WhatsApp />
              </IconButton>

            </Stack>

          </Stack>

          <Divider
            sx={{
              my: 4,
              borderColor: 'rgba(255,255,255,0.08)',
            }}
          />

          <Typography
            sx={{
              color: 'rgba(255,255,255,0.3)',
              fontSize: 11,
            }}
          >
            © {new Date().getFullYear()} Vozes do Verbo — Instituto do Verbo Encarnado.
          </Typography>

        </Container>
      </Box>

    </ThemeProvider>
  );
};

export default Home;
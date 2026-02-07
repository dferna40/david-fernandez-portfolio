import * as React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Chip,
  Grid,
  Card,
  CardContent,
  CardActions,
  Stack,
  Divider,
  Link,
  IconButton,
  Tooltip,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import { useTheme, alpha } from "@mui/material/styles";

import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const sections = [
  { id: "home", label: "Inicio" },
  { id: "projects", label: "Proyectos" },
  { id: "about", label: "Sobre mí" },
  { id: "contact", label: "Contacto" },
];

const skills = [
  "Java",
  "Spring Boot",
  "APIs REST",
  "Swagger/OpenAPI",
  "JPA (Hibernate)",
  "MyBatis",
  "PostgreSQL",
  "Oracle",
  "Docker",
  "Git",
];

const projects = [
  {
    title: "TaskFlow API",
    subtitle: "API REST de gestión de tareas",
    bullets: [
      "JWT + roles",
      "Swagger/OpenAPI",
      "JPA + filtros/paginación",
      "Docker Compose + tests",
    ],
    links: { repo: "#", demo: "#", swagger: "#" },
    tags: ["Spring Boot", "JWT", "JPA", "PostgreSQL"],
  },
  {
    title: "DataBridge Persistence",
    subtitle: "Persistencia avanzada (JPA + MyBatis)",
    bullets: [
      "Consultas complejas",
      "Paginación real",
      "Tests de repos/mappers",
      "Perfiles de entorno",
    ],
    links: { repo: "#", demo: "#", swagger: "#" },
    tags: ["JPA", "MyBatis", "SQL"],
  },
  {
    title: "MiniSuite Microservices",
    subtitle: "Auth + API de negocio (2 servicios)",
    bullets: [
      "Auth service con JWT",
      "API protegida",
      "Docker Compose",
      "Swagger por servicio",
    ],
    links: { repo: "#", demo: "#", swagger: "#" },
    tags: ["Microservicios", "Docker", "JWT"],
  },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function App({ mode, setMode }) {
  const theme = useTheme();
  const isDark = mode === "dark";

  // Paleta de “glow” coherente en light/dark
  const glowA = isDark ? "rgba(25,118,210,0.35)" : "rgba(25,118,210,0.22)";
  const glowB = isDark ? "rgba(156,39,176,0.24)" : "rgba(156,39,176,0.18)";

  const glassBg = isDark ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.75)";

  const glassBorder = isDark
    ? alpha(theme.palette.common.white, 0.1)
    : alpha(theme.palette.common.black, 0.08);

  const sectionBaseSx = {
    position: "relative",
    overflow: "hidden",
    py: { xs: 7, md: 9 },
    "&::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      background:
        `radial-gradient(700px circle at 18% 0%, ${glowA}, transparent 55%),` +
        `radial-gradient(700px circle at 82% 0%, ${glowB}, transparent 55%)`,
      filter: "blur(2px)",
      opacity: 0.9,
      pointerEvents: "none",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      inset: 0,
      backgroundImage: isDark
        ? "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)"
        : "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
      backgroundSize: "48px 48px",
      maskImage:
        "radial-gradient(closest-side at 50% 0%, black 0%, transparent 70%)",
      opacity: isDark ? 0.12 : 0.1,
      pointerEvents: "none",
    },
  };

  const glassPanelSx = {
    position: "relative",
    borderRadius: 4,
    border: `1px solid ${glassBorder}`,
    background: glassBg,
    backdropFilter: "blur(12px)",
    boxShadow: isDark
      ? "0 20px 60px rgba(0,0,0,0.35)"
      : "0 18px 50px rgba(10,20,30,0.12)",
  };

  const chipSx = {
    borderRadius: 999,
    fontWeight: 700,
    border: "1px solid",
    borderColor: isDark ? alpha("#fff", 0.14) : alpha("#000", 0.1),
    backgroundColor: isDark ? alpha("#fff", 0.06) : alpha("#fff", 0.7),
    backdropFilter: "blur(10px)",
  };

  return (
    <>
      {/* NAVBAR (mismo look tech/glass) */}
      <AppBar
        position="sticky"
        elevation={0}
        color="transparent"
        sx={{
          borderBottom: "1px solid",
          borderColor: "divider",
          background: isDark
            ? "linear-gradient(180deg, rgba(10,14,20,0.85), rgba(10,14,20,0.65))"
            : "linear-gradient(180deg, rgba(255,255,255,0.85), rgba(255,255,255,0.65))",
          backdropFilter: "blur(14px)",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", gap: 1 }}>
          <Typography
            variant="h6"
            fontWeight={800}
            sx={{ cursor: "pointer", letterSpacing: -0.2 }}
            onClick={() => scrollToId("home")}
          >
            David Fernández Ramírez
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            sx={{ display: { xs: "none", md: "flex" } }}
          >
            {sections.map((s) => (
              <Button
                key={s.id}
                color="inherit"
                onClick={() => scrollToId(s.id)}
                sx={{
                  borderRadius: 999,
                  textTransform: "none",
                  fontWeight: 700,
                  px: 1.4,
                  "&:hover": {
                    backgroundColor: isDark
                      ? alpha("#fff", 0.06)
                      : alpha("#000", 0.05),
                  },
                }}
              >
                {s.label}
              </Button>
            ))}
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <Button
              variant="outlined"
              size="small"
              component="a"
              href="https://github.com/dferna40"
              target="_blank"
              rel="noreferrer"
              sx={{
                borderRadius: 999,
                textTransform: "none",
                fontWeight: 800,
              }}
            >
              GitHub
            </Button>

            <Button
              variant="contained"
              size="small"
              component="a"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                scrollToId("contact");
              }}
              sx={{
                borderRadius: 999,
                textTransform: "none",
                fontWeight: 800,
              }}
            >
              Contacto
            </Button>

            <Tooltip
              title={
                mode === "light" ? "Activar modo oscuro" : "Activar modo claro"
              }
            >
              <IconButton
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                aria-label="toggle theme"
                sx={{
                  borderRadius: 999,
                  border: "1px solid",
                  borderColor: isDark
                    ? alpha("#fff", 0.18)
                    : alpha("#000", 0.12),
                  backgroundColor: isDark
                    ? alpha("#fff", 0.06)
                    : alpha("#fff", 0.75),
                  backdropFilter: "blur(10px)",
                  "&:hover": {
                    backgroundColor: isDark
                      ? alpha("#fff", 0.1)
                      : alpha("#fff", 0.92),
                  },
                }}
              >
                {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>
            </Tooltip>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* HERO (tu versión tech) */}
      <Box
        id="home"
        sx={{
          py: { xs: 7, md: 11 },
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background:
              `radial-gradient(700px circle at 30% 0%, ${glowA}, transparent 55%),` +
              `radial-gradient(700px circle at 70% 0%, ${glowB}, transparent 55%)`,
            filter: "blur(2px)",
            opacity: 0.95,
            animation: "heroGlow 7s ease-in-out infinite alternate",
            pointerEvents: "none",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            inset: 0,
            backgroundImage: isDark
              ? "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)"
              : "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(closest-side at 50% 0%, black 0%, transparent 70%)",
            opacity: { xs: 0.1, md: 0.14 },
            pointerEvents: "none",
          },
          "@keyframes heroGlow": {
            from: { transform: "translateY(-8px)", opacity: 0.75 },
            to: { transform: "translateY(8px)", opacity: 1 },
          },
        }}
      >
        <Container maxWidth="md" sx={{ position: "relative" }}>
          <Stack spacing={2.5} alignItems="center" textAlign="center">
            <Chip
              label="Backend · Java · Spring Boot"
              sx={{
                fontWeight: 900,
                px: 1,
                borderRadius: 999,
                backgroundColor: alpha(
                  theme.palette.primary.main,
                  isDark ? 0.14 : 0.1,
                ),
                border: `1px solid ${alpha(theme.palette.primary.main, isDark ? 0.35 : 0.25)}`,
                backdropFilter: "blur(10px)",
              }}
            />

            <Typography
              variant="h3"
              fontWeight={950}
              sx={{
                fontSize: { xs: "2.35rem", md: "3.6rem" },
                letterSpacing: -1,
                lineHeight: 1.05,
                textShadow: isDark
                  ? "0 10px 30px rgba(0,0,0,0.35)"
                  : "0 10px 30px rgba(0,0,0,0.10)",
                background: isDark
                  ? "linear-gradient(90deg, rgba(255,255,255,0.95), rgba(25,118,210,0.95), rgba(156,39,176,0.9))"
                  : "linear-gradient(90deg, rgba(20,24,30,0.95), rgba(25,118,210,0.95), rgba(156,39,176,0.9))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Backend Java · Spring Boot
            </Typography>

            <Typography
              sx={{
                maxWidth: 820,
                color: "text.secondary",
                fontSize: { xs: "1.05rem", md: "1.15rem" },
                lineHeight: 1.85,
              }}
            >
              Desarrollo APIs REST seguras y mantenibles con Swagger/OpenAPI,
              JPA/MyBatis y bases de datos SQL. Enfoque en buenas prácticas,
              testing y despliegue con Docker.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1.2}
              sx={{ pt: 1 }}
            >
              <Button
                variant="contained"
                size="large"
                onClick={() => scrollToId("projects")}
              >
                Ver proyectos
              </Button>

              <Button
                variant="outlined"
                size="large"
                component="a"
                href="/CV_David_Fernández_Ramírez.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Ver CV
              </Button>
            </Stack>

            <Grid container spacing={2} sx={{ pt: 2, textAlign: "left" }}>
              {[
                { k: "+7 años", v: "Experiencia en backend" },
                { k: "JWT · Spring Security", v: "APIs seguras" },
                { k: "Oracle · PostgreSQL", v: "Persistencia SQL" },
              ].map((it) => (
                <Grid item xs={12} sm={4} key={it.k}>
                  <Box
                    sx={{
                      p: 2,
                      borderRadius: 3,
                      border: "1px solid",
                      borderColor: "divider",
                      backgroundColor: isDark
                        ? alpha("#fff", 0.06)
                        : alpha("#fff", 0.72),
                      backdropFilter: "blur(10px)",
                      transition:
                        "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: 6,
                        borderColor: alpha(
                          theme.palette.primary.main,
                          isDark ? 0.6 : 0.35,
                        ),
                      },
                    }}
                  >
                    <Typography fontWeight={900} sx={{ fontSize: "1.05rem" }}>
                      {it.k}
                    </Typography>
                    <Typography color="text.secondary" variant="body2">
                      {it.v}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>

            <Stack
              direction="row"
              spacing={1}
              flexWrap="wrap"
              justifyContent="center"
              sx={{ pt: 2 }}
            >
              {skills.slice(0, 6).map((s) => (
                <Chip key={s} label={s} sx={chipSx} />
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Divider sx={{ borderColor: "divider" }} />

      {/* PROYECTOS (look coherente al HERO) */}
      <Box id="projects" sx={sectionBaseSx}>
        <Container maxWidth="lg" sx={{ position: "relative" }}>
          <Box sx={{ ...glassPanelSx, p: { xs: 2.5, md: 4 } }}>
            <Stack spacing={1} sx={{ mb: 3 }}>
              <Typography
                variant="h4"
                fontWeight={900}
                sx={{
                  letterSpacing: -0.6,
                  background: isDark
                    ? "linear-gradient(90deg, rgba(255,255,255,0.95), rgba(25,118,210,0.85))"
                    : "linear-gradient(90deg, rgba(20,24,30,0.95), rgba(25,118,210,0.85))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Proyectos
              </Typography>
              <Typography color="text.secondary">
                Proyectos enfocados a demostrar habilidades reales:
                arquitectura, seguridad, persistencia, documentación y
                despliegue.
              </Typography>
            </Stack>

            <Grid container spacing={3}>
              {projects.map((p) => (
                <Grid item xs={12} md={4} key={p.title}>
                  <Card
                    variant="outlined"
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: 3,
                      borderColor: alpha(
                        theme.palette.primary.main,
                        isDark ? 0.2 : 0.14,
                      ),
                      backgroundColor: isDark
                        ? alpha("#0b1220", 0.55)
                        : alpha("#ffffff", 0.7),
                      backdropFilter: "blur(12px)",
                      transition:
                        "transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease",
                      "&:hover": {
                        transform: "translateY(-7px)",
                        boxShadow: isDark
                          ? "0 18px 70px rgba(0,0,0,0.55)"
                          : "0 18px 60px rgba(10,20,30,0.18)",
                        borderColor: alpha(
                          theme.palette.primary.main,
                          isDark ? 0.7 : 0.45,
                        ),
                      },
                      position: "relative",
                      overflow: "hidden",
                      "&:hover::before": {
                        opacity: 1,
                      },
                      "&::before": {
                        content: '""',
                        position: "absolute",
                        inset: 0,
                        background:
                          `radial-gradient(600px circle at 20% 0%, ${glowA}, transparent 55%),` +
                          `radial-gradient(600px circle at 80% 0%, ${glowB}, transparent 55%)`,
                        opacity: 0,
                        transition: "opacity 180ms ease",
                        pointerEvents: "none",
                      },
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, position: "relative" }}>
                      <Typography
                        variant="h6"
                        fontWeight={900}
                        sx={{ mb: 0.5 }}
                      >
                        {p.title}
                      </Typography>
                      <Typography color="text.secondary" sx={{ mb: 2 }}>
                        {p.subtitle}
                      </Typography>

                      <Stack spacing={1} sx={{ mb: 2 }}>
                        {p.bullets.map((b) => (
                          <Typography key={b} variant="body2">
                            • {b}
                          </Typography>
                        ))}
                      </Stack>

                      <Stack
                        direction="row"
                        spacing={1}
                        flexWrap="wrap"
                        useFlexGap
                      >
                        {p.tags.map((t) => (
                          <Chip key={t} label={t} size="small" sx={chipSx} />
                        ))}
                      </Stack>
                    </CardContent>

                    <CardActions
                      sx={{
                        px: 2,
                        pb: 2,
                        gap: 1,
                        flexWrap: "wrap",
                        position: "relative",
                      }}
                    >
                      <Button
                        size="small"
                        component="a"
                        href={p.links.repo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Repo
                      </Button>
                      <Button
                        size="small"
                        component="a"
                        href={p.links.demo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Demo
                      </Button>
                      <Button
                        size="small"
                        component="a"
                        href={p.links.swagger}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Swagger
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      <Divider sx={{ borderColor: "divider" }} />

      {/* SOBRE MI (coherente al HERO) */}
      <Box id="about" sx={sectionBaseSx}>
        <Container maxWidth="md" sx={{ position: "relative" }}>
          <Box sx={{ ...glassPanelSx, p: { xs: 2.5, md: 4 } }}>
            <Typography
              variant="h4"
              fontWeight={900}
              sx={{
                mb: 2,
                letterSpacing: -0.6,
                background: isDark
                  ? "linear-gradient(90deg, rgba(255,255,255,0.95), rgba(156,39,176,0.85))"
                  : "linear-gradient(90deg, rgba(20,24,30,0.95), rgba(156,39,176,0.85))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Sobre mí
            </Typography>

            <Typography color="text.secondary" sx={{ mb: 2, lineHeight: 1.9 }}>
              Soy desarrollador backend especializado en Java y Spring Boot. Me
              enfoco en construir APIs REST claras, seguras y fáciles de
              mantener, con una base sólida en persistencia (JPA/MyBatis) y
              bases de datos SQL.
            </Typography>

            <Typography color="text.secondary" sx={{ lineHeight: 1.9 }}>
              En este portfolio reúno proyectos prácticos con documentación y
              despliegue para que puedas revisar el código y la forma de
              trabajar.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Divider sx={{ borderColor: "divider" }} />

      {/* CONTACTO (coherente al HERO) */}
      <Box id="contact" sx={sectionBaseSx}>
        <Container maxWidth="md" sx={{ position: "relative" }}>
          <Box sx={{ ...glassPanelSx, p: { xs: 2.5, md: 4 } }}>
            <Typography
              variant="h4"
              fontWeight={900}
              sx={{
                mb: 2,
                letterSpacing: -0.6,
                background: isDark
                  ? "linear-gradient(90deg, rgba(255,255,255,0.95), rgba(25,118,210,0.85))"
                  : "linear-gradient(90deg, rgba(20,24,30,0.95), rgba(25,118,210,0.85))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Contacto
            </Typography>

            <List sx={{ p: 0 }}>
              <ListItem
                disableGutters
                sx={{
                  borderRadius: 2,
                  px: 1,
                  "&:hover": {
                    backgroundColor: isDark
                      ? alpha("#fff", 0.06)
                      : alpha("#000", 0.04),
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 42, color: "text.primary" }}>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Link href="mailto:dferna40@gmail.com" underline="hover">
                      dferna40@gmail.com
                    </Link>
                  }
                />
              </ListItem>

              <ListItem
                disableGutters
                sx={{
                  borderRadius: 2,
                  px: 1,
                  "&:hover": {
                    backgroundColor: isDark
                      ? alpha("#fff", 0.06)
                      : alpha("#000", 0.04),
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 42, color: "text.primary" }}>
                  <GitHubIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Link
                      href="https://github.com/dferna40"
                      target="_blank"
                      rel="noreferrer"
                      underline="hover"
                    >
                      github.com/dferna40
                    </Link>
                  }
                />
              </ListItem>

              <ListItem
                disableGutters
                sx={{
                  borderRadius: 2,
                  px: 1,
                  "&:hover": {
                    backgroundColor: isDark
                      ? alpha("#fff", 0.06)
                      : alpha("#000", 0.04),
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: 42, color: "text.primary" }}>
                  <LinkedInIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Link
                      href="https://www.linkedin.com/in/david-fernandez-ramirez-ba401128/"
                      target="_blank"
                      rel="noreferrer"
                      underline="hover"
                    >
                      linkedin.com/in/david-fernandez-ramirez-ba401128
                    </Link>
                  }
                />
              </ListItem>
            </List>
          </Box>
          {/* FOOTER */}
          <Box
            component="footer"
            sx={{
              py: 2.5,
              borderTop: "0",
              borderColor: "divider",
              background: "transparent", // <-- clave: nada de fondo
            }}
          >
            <Container maxWidth="lg">
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  textAlign: "center",
                  opacity: 0.75,
                }}
              >
                © {new Date().getFullYear()} David Fernández Ramírez. Portfolio
                personal.
              </Typography>
            </Container>
          </Box>
        </Container>
      </Box>
    </>
  );
}

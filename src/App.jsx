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
  "MySQL",
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
    tags: ["Spring Boot", "JWT", "JPA", "MySQL"],
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
  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        color="transparent"
        sx={{
          backgroundColor: "background.paper",
          borderBottom: "1px solid",
          borderColor: "divider",
        }}
      >
        <Toolbar sx={{ gap: 1, justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            fontWeight={700}
            sx={{ cursor: "pointer" }}
            onClick={() => scrollToId("home")}
          >
            David Fernández
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
            >
              Contacto
            </Button>

            <Tooltip
              title={
                mode === "light" ? "Activar modo oscuro" : "Activar modo claro"
              }
            >
              <IconButton
                color="inherit"
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
                aria-label="toggle theme"
              >
                {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>
            </Tooltip>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* HERO */}
      <Box id="home" sx={{ py: { xs: 6, md: 10 } }}>
        <Container maxWidth="md">
          <Stack spacing={2} alignItems="center" textAlign="center">
            <Typography
              variant="h3"
              fontWeight={800}
              sx={{ fontSize: { xs: "2.2rem", md: "3rem" } }}
            >
              Backend Java · Spring Boot
            </Typography>
            <Typography variant="h6" color="text.secondary">
              Desarrollo APIs REST seguras y mantenibles con Swagger/OpenAPI,
              JPA/MyBatis y bases de datos SQL. Enfoque en buenas prácticas,
              testing y despliegue con Docker.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={1}
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
                download
              >
                Descargar CV
              </Button>
            </Stack>

            <Stack
              direction="row"
              spacing={1}
              flexWrap="wrap"
              justifyContent="center"
              sx={{ pt: 2 }}
            >
              {skills.slice(0, 6).map((s) => (
                <Chip key={s} label={s} />
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Divider />

      {/* PROYECTOS */}
      <Box id="projects" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="lg">
          <Stack spacing={1} sx={{ mb: 3 }}>
            <Typography variant="h4" fontWeight={800}>
              Proyectos
            </Typography>
            <Typography color="text.secondary">
              Proyectos enfocados a demostrar habilidades reales: arquitectura,
              seguridad, persistencia, documentación y despliegue.
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
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" fontWeight={800}>
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
                        <Chip key={t} label={t} size="small" />
                      ))}
                    </Stack>
                  </CardContent>

                  <CardActions sx={{ px: 2, pb: 2, gap: 1, flexWrap: "wrap" }}>
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
        </Container>
      </Box>

      <Divider />

      {/* SOBRE MI */}
      <Box id="about" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="md">
          <Typography variant="h4" fontWeight={800} sx={{ mb: 2 }}>
            Sobre mí
          </Typography>

          <Typography color="text.secondary" sx={{ mb: 2 }}>
            Soy desarrollador backend especializado en Java y Spring Boot. Me
            enfoco en construir APIs REST claras, seguras y fáciles de mantener,
            con una base sólida en persistencia (JPA/MyBatis) y bases de datos
            SQL.
          </Typography>

          <Typography color="text.secondary">
            En este portfolio reúno proyectos prácticos con documentación y
            despliegue para que puedas revisar el código y la forma de trabajar.
          </Typography>
        </Container>
      </Box>

      <Divider />

      {/* CONTACTO */}
      <Box id="contact" sx={{ py: { xs: 6, md: 8 } }}>
        <Container maxWidth="md">
          <Typography variant="h4" fontWeight={800} sx={{ mb: 2 }}>
            Contacto
          </Typography>

          <List sx={{ p: 0 }}>
            <ListItem disableGutters>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Link href="mailto:dferna40@gmail.com">
                    dferna40@gmail.com
                  </Link>
                }
              />
            </ListItem>

            <ListItem disableGutters>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <GitHubIcon />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Link
                    href="https://github.com/dferna40"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/dferna40
                  </Link>
                }
              />
            </ListItem>

            <ListItem disableGutters>
              <ListItemIcon sx={{ minWidth: 40 }}>
                <LinkedInIcon />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Link
                    href="https://www.linkedin.com/in/david-fernandez-ramirez-ba401128/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    linkedin.com/in/david-fernandez-ramirez-ba401128
                  </Link>
                }
              />
            </ListItem>
          </List>

          <Typography variant="body2" color="text.secondary" sx={{ mt: 4 }}>
            © {new Date().getFullYear()} David Fernández. Portfolio personal.
          </Typography>
        </Container>
      </Box>
    </>
  );
}

# Lonquimay Tech & Partners - Sitio Web

Un sitio web moderno y responsive para Lonquimay Tech & Partners, empresa especializada en servicios tecnológicos para el agro.

## 🚀 Características

- **Diseño Moderno**: Interfaz minimalista y elegante con colores inspirados en la naturaleza y tecnología
- **Responsive**: Optimizado para dispositivos móviles, tablets y desktop
- **Dark Mode**: Toggle para cambiar entre modo claro y oscuro
- **Animaciones**: Transiciones suaves con Framer Motion
- **Navegación Sticky**: Menú de navegación fijo con scroll suave
- **SEO Optimizado**: Meta tags y estructura semántica

## 🛠️ Tecnologías Utilizadas

- **React 18**: Framework principal
- **Tailwind CSS**: Framework de estilos
- **Framer Motion**: Animaciones y transiciones
- **Lucide React**: Iconografía moderna
- **React Intersection Observer**: Detección de elementos en viewport

## 📦 Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone <url-del-repositorio>
   cd lonquimay-tech-website
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**:
   ```bash
   npm start
   ```

4. **Abrir en el navegador**:
   ```
   http://localhost:3000
   ```

## 🏗️ Estructura del Proyecto

```
src/
├── AgroIntelliWeb.jsx    # Componente principal
├── index.js             # Punto de entrada
└── index.css            # Estilos globales y Tailwind

public/
└── index.html           # HTML principal

tailwind.config.js       # Configuración de Tailwind
postcss.config.js        # Configuración de PostCSS
package.json             # Dependencias y scripts
```

## 🎨 Secciones del Sitio

### 1. **Inicio (Hero Section)**
- Slogan principal: "Tecnología de precisión para un campo más inteligente"
- Imagen de fondo de dron sobre campos
- Botón de llamada a la acción

### 2. **Servicios**
- Mapeo de Conductividad Eléctrica del Suelo (CEM)
- Instalación de Sensores de Humedad
- Análisis Físico-Químico de Suelo
- Drones y Agricultura de Precisión

### 3. **Sobre Nosotros**
- Historia de la empresa
- Valores corporativos
- Estadísticas de impacto

### 4. **Casos de Éxito**
- Testimonios de clientes
- Resultados cuantificables

### 5. **Contacto**
- Formulario de contacto
- Información de contacto
- Horarios de atención

## 🎯 Funcionalidades

- **Navegación Responsive**: Menú hamburguesa en móviles
- **Scroll Suave**: Navegación entre secciones
- **Dark Mode**: Toggle con persistencia
- **Animaciones**: Entrada de elementos con Framer Motion
- **Formulario**: Validación y envío de mensajes
- **Iconografía**: Iconos de Lucide React

## 🚀 Scripts Disponibles

- `npm start`: Ejecuta la aplicación en modo desarrollo
- `npm build`: Construye la aplicación para producción
- `npm test`: Ejecuta las pruebas
- `npm eject`: Expone la configuración de webpack (irreversible)

## 🎨 Paleta de Colores

- **Verde Primario**: `#1e412c` (Verde oscuro)
- **Verde Secundario**: `#2f7c4c` (Verde medio)
- **Gris Acero**: `#5f6368` (Gris tecnológico)
- **Blanco**: `#ffffff`
- **Negro**: `#171717`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Personalización

### Cambiar Colores
Edita `tailwind.config.js` para modificar la paleta de colores:

```javascript
colors: {
  primary: {
    // Tus colores personalizados
  }
}
```

### Agregar Nuevas Secciones
1. Crea el componente de la sección
2. Agrégalo al componente principal
3. Actualiza la navegación

### Modificar Animaciones
Las animaciones están configuradas en `tailwind.config.js` y se pueden personalizar en `src/index.css`.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT.

## 👥 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

Lonquimay Tech & Partners
- Email: contacto@lonquimaytech.cl
- Teléfono: +56 9 1234 5678
- Ubicación: Lonquimay, Región de La Araucanía, Chile

---

Desarrollado con ❤️ para revolucionar la agricultura con tecnología de precisión. 
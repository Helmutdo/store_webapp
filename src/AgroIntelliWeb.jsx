import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Sun, 
  Moon, 
  MapPin, 
  Phone, 
  Mail, 
  Leaf,
  Droplets,
  TestTube,
  Rocket,
  ChevronDown,
  Facebook,
  Instagram,
  Linkedin,
  Twitter
} from 'lucide-react';
import { useScrollSpy } from './hooks/useScrollSpy';
import ContactForm from './components/ContactForm';

const AgroIntelliWeb = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useScrollSpy(['inicio', 'servicios', 'nosotros', 'casos', 'contacto'], 100);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const services = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Mapeo de Conductividad Eléctrica del Suelo (CEM)",
      description: "Análisis detallado para zonificación de parcelas y optimización del riego.",
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: "Instalación de Sensores de Humedad",
      description: "Monitoreo en tiempo real con plataformas IoT para gestión eficiente del agua.",
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: <TestTube className="w-8 h-8" />,
      title: "Análisis Físico-Químico de Suelo",
      description: "Muestras analizadas con laboratorio acreditado para decisiones informadas.",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Drones y Agricultura de Precisión",
      description: "NDVI, fotogrametría y mapeo avanzado para agricultura inteligente.",
      color: "from-purple-500 to-indigo-600"
    }
  ];

  const testimonials = [
    {
      name: "Carlos Mendoza",
      farm: "Finca Los Pinos",
      text: "Reducimos el uso de agua en un 30% gracias al monitoreo de humedad en tiempo real.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "María González",
      farm: "Viñedos del Valle",
      text: "Los mapas de conductividad nos ayudaron a optimizar la fertilización y aumentar rendimientos.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Roberto Silva",
      farm: "Agrícola La Esperanza",
      text: "La tecnología de drones nos permite monitorear 100 hectáreas en solo 2 horas.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    }
  ];

  return (
    <div className={`min-h-screen ${isDark ? 'dark bg-steel-950 text-white' : 'bg-white text-steel-900'}`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-steel-950/80 backdrop-blur-md border-b border-steel-200 dark:border-steel-800">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <Leaf className="w-8 h-8 text-primary-600" />
              <span className="text-xl font-bold text-primary-600">Lonquimay Tech</span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {['inicio', 'servicios', 'nosotros', 'casos', 'contacto'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-primary-600 transition-colors ${
                    activeSection === item ? 'text-primary-600' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-lg hover:bg-steel-100 dark:hover:bg-steel-800 transition-colors"
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-steel-100 dark:hover:bg-steel-800 transition-colors"
              >
                {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-steel-950 border-t border-steel-200 dark:border-steel-800"
            >
              <div className="container-custom py-4 space-y-4">
                {['inicio', 'servicios', 'nosotros', 'casos', 'contacto'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block w-full text-left capitalize hover:text-primary-600 transition-colors py-2"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 gradient-bg opacity-90"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
        
        <div className="relative z-10 container-custom text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Tecnología de precisión para un campo más inteligente
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
              Revolucionamos la agricultura con soluciones tecnológicas avanzadas que optimizan recursos y maximizan rendimientos
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection('contacto')}
              className="btn-primary text-lg px-8 py-4"
            >
              Contáctanos
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="w-6 h-6 text-white/70" />
        </motion.div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="section-padding bg-steel-50 dark:bg-steel-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestros Servicios</h2>
            <p className="text-lg text-steel-600 dark:text-steel-400 max-w-2xl mx-auto">
              Soluciones integrales de agricultura de precisión para optimizar cada aspecto de tu producción
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white dark:bg-steel-800 rounded-xl p-6 h-full card-hover shadow-lg">
                  <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-steel-600 dark:text-steel-400">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre Nosotros</h2>
              <p className="text-lg text-steel-600 dark:text-steel-400 mb-6">
                Somos una empresa lonquimayense fundada por jóvenes ingenieros apasionados por la tecnología y la agricultura. 
                Nuestra misión es democratizar el acceso a tecnologías de precisión para pequeños y medianos productores.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                  <span className="font-medium">Innovación constante</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                  <span className="font-medium">Sustentabilidad ambiental</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-primary-600 rounded-full"></div>
                  <span className="font-medium">Trabajo con comunidades agrícolas</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Nuestra Visión</h3>
                <p className="text-lg mb-6">
                  Ser líderes en la transformación digital del sector agrícola, 
                  contribuyendo a una agricultura más eficiente, sostenible y rentable.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold">50+</div>
                    <div className="text-sm">Clientes Satisfechos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold">1000+</div>
                    <div className="text-sm">Hectáreas Monitoreadas</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Success Cases Section */}
      <section id="casos" className="section-padding bg-steel-50 dark:bg-steel-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Casos de Éxito</h2>
            <p className="text-lg text-steel-600 dark:text-steel-400 max-w-2xl mx-auto">
              Descubre cómo nuestros clientes han transformado sus operaciones agrícolas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-steel-800 rounded-xl p-6 card-hover shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-primary-600">{testimonial.farm}</div>
                  </div>
                </div>
                <p className="text-steel-600 dark:text-steel-400 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Contáctanos</h2>
            <p className="text-lg text-steel-600 dark:text-steel-400 max-w-2xl mx-auto">
              ¿Listo para transformar tu agricultura? Conversemos sobre cómo podemos ayudarte
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ContactForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-xl font-semibold mb-4">Información de Contacto</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary-600" />
                    <span>Lonquimay, Región de La Araucanía, Chile</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-primary-600" />
                    <span>+56 9 1234 5678</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-primary-600" />
                    <span>contacto@lonquimaytech.cl</span>
                  </div>
                </div>
              </div>

              <div className="bg-steel-100 dark:bg-steel-800 rounded-xl p-6">
                <h4 className="font-semibold mb-3">Horarios de Atención</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Lunes - Viernes:</span>
                    <span>8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado:</span>
                    <span>9:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo:</span>
                    <span>Cerrado</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-steel-900 dark:bg-steel-950 text-white py-12">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Leaf className="w-8 h-8 text-primary-400" />
                <span className="text-xl font-bold">Lonquimay Tech & Partners</span>
              </div>
              <p className="text-steel-400 mb-4 max-w-md">
                Tecnología de precisión para un campo más inteligente. 
                Transformamos la agricultura con soluciones innovadoras y sustentables.
              </p>
              <div className="flex space-x-4">
                <a href="/" className="text-steel-400 hover:text-primary-400 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="/" className="text-steel-400 hover:text-primary-400 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="/" className="text-steel-400 hover:text-primary-400 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="/" className="text-steel-400 hover:text-primary-400 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Servicios</h4>
              <ul className="space-y-2 text-steel-400">
                <li><a href="/" className="hover:text-primary-400 transition-colors">Mapeo CEM</a></li>
                <li><a href="/" className="hover:text-primary-400 transition-colors">Sensores IoT</a></li>
                <li><a href="/" className="hover:text-primary-400 transition-colors">Análisis de Suelo</a></li>
                <li><a href="/" className="hover:text-primary-400 transition-colors">Drones Agrícolas</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-steel-400">
                <li><a href="/" className="hover:text-primary-400 transition-colors">Términos y Condiciones</a></li>
                <li><a href="/" className="hover:text-primary-400 transition-colors">Política de Privacidad</a></li>
                <li><a href="/" className="hover:text-primary-400 transition-colors">Aviso Legal</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-steel-800 mt-8 pt-8 text-center text-steel-400">
            <p>&copy; 2024 Lonquimay Tech & Partners. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AgroIntelliWeb; 
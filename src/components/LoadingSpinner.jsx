import React from 'react';
import { motion } from 'framer-motion';
import { Leaf } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-steel-950 flex items-center justify-center z-50">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
        className="relative"
      >
        <Leaf className="w-12 h-12 text-primary-600" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="ml-4 text-lg font-medium text-steel-700 dark:text-steel-300"
      >
        Cargando...
      </motion.div>
    </div>
  );
};

export default LoadingSpinner; 
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect } from 'react';

interface ImageLightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
  projectTitle: string;
}

export function ImageLightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrevious,
  projectTitle,
}: ImageLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === 'ArrowLeft') onPrevious();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onNext, onPrevious]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Close Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        whileHover={{ scale: 1.1, rotate: 90 }}
        whileTap={{ scale: 0.9 }}
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-3 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
      >
        <X className="w-6 h-6" />
      </motion.button>

      {/* Image Counter */}
      <div className="absolute top-6 left-6 z-50 px-4 py-2 rounded-full border border-white/20 text-white text-sm font-medium"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
        {currentIndex + 1} / {images.length}
      </div>

      {/* Project Title */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 z-50 px-6 py-2 rounded-full border border-white/20 text-white font-semibold"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}>
        {projectTitle}
      </div>

      {/* Previous Button */}
      {images.length > 1 && (
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            onPrevious();
          }}
          className="absolute left-6 top-1/2 transform -translate-y-1/2 z-50 p-4 rounded-full border border-white/20 text-white hover:bg-white/20 transition-colors"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
        >
          <ChevronLeft className="w-8 h-8" />
        </motion.button>
      )}

      {/* Next Button */}
      {images.length > 1 && (
        <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          whileHover={{ scale: 1.1, x: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-50 p-4 rounded-full border border-white/20 text-white hover:bg-white/20 transition-colors"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
        >
          <ChevronRight className="w-8 h-8" />
        </motion.button>
      )}

      {/* Image Container */}
      <div
        className="relative max-w-7xl max-h-[85vh] w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={images[currentIndex]}
            alt={`${projectTitle} - Image ${currentIndex + 1}`}
            initial={{ opacity: 0, scale: 0.95, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.95, x: -100 }}
            transition={{ duration: 0.3 }}
            className="w-full h-full object-contain rounded-2xl shadow-2xl"
          />
        </AnimatePresence>

        {/* Image Thumbnails */}
        {images.length > 1 && (
          <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 flex gap-2 p-3 rounded-2xl border border-white/20"
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            {images.map((image, index) => (
              <motion.button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  const diff = index - currentIndex;
                  if (diff > 0) {
                    for (let i = 0; i < diff; i++) onNext();
                  } else if (diff < 0) {
                    for (let i = 0; i < Math.abs(diff); i++) onPrevious();
                  }
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentIndex
                    ? 'border-purple-500 ring-2 ring-purple-500/50'
                    : 'border-white/30 opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.button>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

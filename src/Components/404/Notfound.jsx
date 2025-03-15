import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Notfound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6 text-center">
      {/* Animated 404 */}
      <motion.h1
        className="text-6xl sm:text-8xl md:text-9xl font-extrabold text-red-600 font-mono"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        404
      </motion.h1>

      {/* Page Not Found */}
      <motion.h2
        className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Looks like you took a wrong turn at the stage! 🎤
      </motion.h2>

      {/* Event-Themed Joke */}
      <motion.p
        className="text-gray-400 text-sm sm:text-base mt-2 mb-4"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        Even the DJ can’t mix this URL back together. 😅
      </motion.p>

      {/* Go Home Button */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <Link
          to="/"
          className="px-6 py-3 bg-red-600 text-white font-bold uppercase rounded-md text-sm sm:text-base transition-all hover:bg-red-700"
        >
          Back to the Main Stage 🎶
        </Link>
      </motion.div>
    </div>
  );
};

export default Notfound;

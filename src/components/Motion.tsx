import { motion } from "framer-motion";

const Motion = () => {
  return (
    <motion.div animate={{ rotate: [0, 200, 0] }}>
      <div className="motion"></div>
    </motion.div>
  );
};

export default Motion;

/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { AnimationControls, motion } from "framer-motion";
type TSectionProps = {
  animate?: AnimationControls & {y: number}, 
  children: React.ReactElement
}
export const SectionAnimation = (props: TSectionProps) => {
const {children, animate} = props;
  return (
    <motion.div
      style={{opacity: 0}}
      animate={{opacity: 1, ...animate}}
      transition={{duration: 0.7}}
    >
        {children}
    </motion.div>
  );
}
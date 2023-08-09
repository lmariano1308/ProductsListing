import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
    children: ReactNode;
    index?: number;
}

const SlideInLeft = ({ children, index = 0 }: Props) => {
    const ANIMATION_DELAY = 0.1 * index;

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2, delay: ANIMATION_DELAY }}>
            {children}
        </motion.div>
    );
};

export default SlideInLeft;

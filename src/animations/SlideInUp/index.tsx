import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
    children: ReactNode;
    index?: number;
}

const SlideInUp = ({ children, index = 0 }: Props) => {
    const ANIMATION_DELAY = 0.1 * index;

    return (
        <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.2, delay: ANIMATION_DELAY }}>
            {children}
        </motion.div>
    );
};

export default SlideInUp;

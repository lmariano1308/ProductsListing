import { ReactNode, useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

interface Props {
    children: ReactNode;
}

const FadeIn = ({ children }: Props) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible');
        }
    }, [isInView]);

    return (
        <motion.div
            initial="hidden"
            animate={mainControls}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={{
                visible: { opacity: 1 },
                hidden: { opacity: 0 },
            }}
            ref={ref}>
            {children}
        </motion.div>
    );
};

export default FadeIn;

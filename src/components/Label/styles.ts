import styled from "styled-components";
import { COLORS } from "../../misc/colors";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
    border-bottom: 1px solid ${COLORS.PRIMARY_FONT};
    padding: 1rem 0;
`;

export const Text = styled.h1`
    font-size: 1.8rem;
    font-weight: 400;
    color: ${COLORS.PRIMARY_FONT};
    font-family: 'Gotham', sans-serif;
`;
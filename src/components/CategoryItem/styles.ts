import styled from "styled-components";
import { COLORS } from "../../misc/colors";
import { motion } from "framer-motion";

export const Container = styled(motion.li)`
    align-items: center;
    display: flex;
    gap: 1rem;
`;

export const Label = styled.h1`
    color: ${COLORS.PRIMARY_FONT};
    font-size: 1.6rem;
    cursor: pointer;
    transition: all .2s ease-in-out;
    &:hover {
        text-decoration: underline;
        transform: scale(1.05);
    }
`;
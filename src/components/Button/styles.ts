import styled from 'styled-components';
import { COLORS } from '../../misc/colors';
import { motion } from 'framer-motion';

export const Wrapper = styled(motion.button)`
    align-items: center;
    background-color: ${COLORS.PRIMARY};
    border: none;
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    display: flex;
    justify-content: center;
    overflow: hidden;
    padding: 1rem;
`;

export const Label = styled.h1`
    color: ${COLORS.SECONDARY};
    cursor: pointer;
    font-size: 1.6rem;
    transition: all 0.2s ease-in-out;
    &:hover {
        text-decoration: underline;
        transform: scale(1.05);
    }
`;

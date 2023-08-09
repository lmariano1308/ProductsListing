import { motion } from 'framer-motion';
import styled from 'styled-components';
import { COLORS } from '../../misc/colors';

export const SvgBox = styled(motion.button)`
    flex-basis: 25px;
    flex-shrink: 0;
    height: 25px;
    width: 25px;
    border: 1px solid ${COLORS.SECONDARY_FONT};
    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    cursor: pointer;
    transition: 0.3s ease background-color;
    &:disabled {
        cursor: not-allowed;
    }
`;

export const Svg = styled(motion.svg)`
    width: 100%;
    height: 100%;
    stroke: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Path = styled(motion.path)``;
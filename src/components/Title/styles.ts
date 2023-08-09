import styled from 'styled-components';
import { COLORS } from '../../misc/colors';

export const Text = styled.h1`
    font-size: 3.6rem;
    font-weight: 700;
    color: ${COLORS.PRIMARY_FONT};
    text-transform: uppercase;
    font-family: 'Gotham', sans-serif;
    @media screen and (max-width: 768px) {
        font-size: 2.8rem;
    }

`;
import styled from 'styled-components';
import { COLORS } from '../../misc/colors';

export const Container = styled.div`
    align-items: center;
    border-bottom: 1px solid ${COLORS.SECONDARY};
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: space-between;
    max-height: 4rem;
    max-width: 34rem;
    padding: 1rem 0;
    @media screen and (max-width: 768px) {
        max-width: 100%;
    }
`;

export const Field = styled.input`
    background-color: transparent;
    border: none;
    color: ${COLORS.PRIMARY};
    flex: 1;
    font-size: 2rem;
    font-weight: 500;
    height: 100%;
    outline: none;
    &::placeholder {
        color: ${COLORS.SECONDARY};
        text-transform: uppercase;
    }
    @media screen and (max-width: 768px) {
        font-size: 1.8rem;
    }
`;

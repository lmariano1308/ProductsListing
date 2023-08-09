import styled from 'styled-components';
import { COLORS } from '../../misc/colors';
import Button from '../../components/Button';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: 20px;
    box-sizing: border-box;
`;

export const TopContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-bottom: 3rem;
`;

export const InputContainer = styled.div`
    width: 30%;
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`;

export const MiddleContainer = styled.div`
    display: flex;
    flex: 1;
    gap: 2rem;
    @media screen and (max-width: 768px) {
        flex-direction: column;
    }
`;

export const TextContainer = styled.div`
    border-bottom: 1px solid ${COLORS.PRIMARY_FONT};
    padding: 1rem 0;
`;

export const Label = styled.label`
    font-size: 2.2rem;
    font-weight: 400;
    color: ${COLORS.PRIMARY_FONT};
`;

export const ItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 100%;
`;

export const ProductsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    @media screen and (max-width: 768px) {
        justify-content: center;
    }
`;

export const BackToTop = styled(Button)`
    position: fixed;
    bottom: 20px;
    right: 20px;
    border-radius: 50%;
    z-index: 100;
    @media screen and (max-width: 768px) {
        bottom: 10px;
        right: 10px;
    }
`;

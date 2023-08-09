import styled from 'styled-components';
import { COLORS } from '../../misc/colors';

export const Container = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 30%;
    transition: 0.3s;
    &:hover {
        transform: scale(1.05);
    }
    &:focus {
        outline: none;
    }
`;

export const Image = styled.img`
    aspect-ratio: 1/1;
    object-fit: contain;
`;

export const Name = styled.h1`
    font-size: 1.8rem;
    font-weight: 700;
    margin: 10px 0;
    text-align: center;
    color: ${COLORS.PRIMARY_FONT};
`;

export const Description = styled.h2`
    font-size: 16px;
    font-weight: 400;
    text-align: center;
    color: #666;
`;

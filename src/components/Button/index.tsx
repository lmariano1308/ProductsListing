import React from 'react';
import * as S from './styles';
import { MotionProps } from 'framer-motion';
import SlideInUp from '../../animations/SlideInUp';

interface Props extends MotionProps {
    children: React.ReactNode;
    onClick: () => void;
}

const Button = ({ children, onClick, ...props }: Props) => {
    return (
        <S.Wrapper
            onClick={onClick}
            {...props}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}>
            <SlideInUp>{typeof children === 'string' ? <S.Label>{children}</S.Label> : children}</SlideInUp>
        </S.Wrapper>
    );
};

export default Button;

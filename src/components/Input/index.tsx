import React, { ReactNode } from 'react';
import * as S from './styles';
import FadeIn from '../../animations/FadeIn';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    left?: ReactNode;
    right?: ReactNode;
}

const Input = ({ left, right, ...props }: Props) => {
    return (
        <FadeIn>
            <S.Container>
                {left}
                <S.Field {...props} />
                {right}
            </S.Container>
        </FadeIn>
    );
};

export default Input;

import React, { ReactNode } from 'react';
import * as S from './styles';
import FadeIn from '../../animations/FadeIn';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    right: ReactNode;
}

const Input = ({ right, ...props }: Props) => {
    return (
        <FadeIn>
            <S.Container>
                <S.Field {...props} />
                {right}
            </S.Container>
        </FadeIn>
    );
};

export default Input;

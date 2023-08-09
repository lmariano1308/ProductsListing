import { ReactNode } from 'react';
import * as S from './styles';
import Reveal from '../../animations/Reveal';
import { MotionProps } from 'framer-motion';

interface Props extends MotionProps {
    children: ReactNode;
    left?: ReactNode;
    right?: ReactNode;
}

const Label = ({ children, left, right, ...props }: Props) => {
    return (
        <S.Container layout {...props}>
            {left}
            <Reveal>{typeof children === 'string' ? <S.Text>{children}</S.Text> : children}</Reveal>
            {right}
        </S.Container>
    );
};

export default Label;

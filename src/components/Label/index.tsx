import { ReactNode } from 'react';
import * as S from './styles';
import Reveal from '../../animations/Reveal';
import { MotionProps } from 'framer-motion';

interface Props extends MotionProps {
    children: ReactNode;
    icon?: ReactNode;
}

const Label = ({ children, icon, ...props }: Props) => {
    return (
        <S.Container layout {...props}>
            <Reveal>{typeof children === 'string' ? <S.Text>{children}</S.Text> : children}</Reveal>
            {icon}
        </S.Container>
    );
};

export default Label;

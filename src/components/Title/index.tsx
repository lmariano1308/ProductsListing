import { ReactNode } from 'react';
import * as S from './styles';
import Reveal from '../../animations/Reveal';

interface Props {
    children: ReactNode;
}

const Title = ({ children }: Props) => {
    return (
        <Reveal>
            <S.Text>{children}</S.Text>
        </Reveal>
    );
};

export default Title;

import { ReactNode } from 'react';
import * as S from './styles';
import { MotionProps } from 'framer-motion';

interface Props extends MotionProps {
    children: ReactNode;
}

const Category = ({ children, ...props }: Props) => {
    return <S.Container {...props}>{children}</S.Container>;
};

export default Category;

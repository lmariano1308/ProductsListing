import { ReactNode } from 'react';
import * as S from './styles';

interface Props {
    children: ReactNode;
}

const Category = ({ children }: Props) => {
    return <S.Container>{children}</S.Container>;
};

export default Category;

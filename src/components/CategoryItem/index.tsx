import CheckBox from '../CheckBox';
import * as S from './styles';

interface Props {
    name: string;
    count: number;
    checked: boolean;
    onClick: (category: string) => void;
}

const CategoryItem = ({ name, count, checked, onClick }: Props) => {
    const onSelect = (category: string) => () => {
        onClick(category);
    };

    return (
        <S.Container>
            <CheckBox checked={checked} onClick={onSelect(name)} />
            <S.Label onClick={onSelect(name)}>
                {name} ({count})
            </S.Label>
        </S.Container>
    );
};

export default CategoryItem;

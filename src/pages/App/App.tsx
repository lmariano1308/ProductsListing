import { useState, useEffect } from 'react';
import { MagnifyingGlass, ArrowUp } from '@phosphor-icons/react';
import { AnimatePresence } from 'framer-motion';
import Title from '../../components/Title';
import Input from '../../components/Input';
import Filter from '../../components/Filter';
import Items from '../../components/Items';
import products from '../../assets/products (1).json';
import { normalizeString } from '../../helpers/helpers';
import { Node } from '../../types/json';
import * as S from './styles';
import { COLORS } from '../../misc/colors';
import MobileFilter from '../../components/MobileFilter';

const { SECONDARY: SECONDARY_FONT } = COLORS;

function App() {
    const [value, setValue] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [filteredProducts, setFilteredProducts] = useState<Node[]>(products.data.nodes);
    const [pagePosition, setPagePosition] = useState(0);
    const [openFilter, setOpenFilter] = useState(false);
    const isMobile = window.innerWidth <= 768;
    const categories = products.data.nodes.reduce((acc, product) => {
        const category = product.category.name;
        acc.set(category, (acc.get(category) || 0) + 1);
        return acc;
    }, new Map<string, number>());

    function getYAfterScroll() {
        setPagePosition(window.scrollY);
    }

    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        window.addEventListener('scroll', getYAfterScroll);
        return () => window.removeEventListener('scroll', getYAfterScroll);
    }, []);

    useEffect(() => {
        const normalizedValue = normalizeString(value);

        const filteredByValue = products.data.nodes.filter(product => {
            const normalizedProductName = normalizeString(product.name);
            return normalizedProductName.includes(normalizedValue);
        });

        let filteredProductsResult = filteredByValue;

        if (selectedCategory) {
            filteredProductsResult = filteredByValue.filter(product => product.category.name === selectedCategory);
        }

        setFilteredProducts(filteredProductsResult);
    }, [value, selectedCategory]);

    return (
        <S.Container>
            <S.TopContainer>
                <Title>
                    O Que você <span style={{ color: SECONDARY_FONT }}>está procurando?</span>
                </Title>
                <Input
                    right={<MagnifyingGlass size={20} color={SECONDARY_FONT} />}
                    placeholder="busque aqui"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
            </S.TopContainer>
            <S.MiddleContainer>
                {isMobile ? (
                    <MobileFilter
                        categories={categories}
                        selected={selectedCategory}
                        onSelect={setSelectedCategory}
                        isOpen={openFilter}
                        onPress={() => setOpenFilter(!openFilter)}
                    />
                ) : (
                    <Filter categories={categories} selected={selectedCategory} onSelect={setSelectedCategory} />
                )}
                <Items data={filteredProducts} />
            </S.MiddleContainer>
            <AnimatePresence mode="wait">
                {pagePosition > 100 && (
                    <S.BackToTop onClick={scrollToTop}>
                        <ArrowUp size={20} color={SECONDARY_FONT} />
                    </S.BackToTop>
                )}
            </AnimatePresence>
        </S.Container>
    );
}

export default App;

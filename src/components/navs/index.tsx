import { Divider } from '@mui/material';
import data from '../../data/navs.json';
import CategoryComponent from './category';
import { Category } from './types';

const categories = data as Category[];

export default () => {
    return (
        <>
            {
                categories
                    .map<React.ReactNode>((category) => (<CategoryComponent key={category.id} category={category as Category} />))
                    .reduce((prev, curr, index) => [prev, (<Divider key={index} />), curr])
            }
        </>
    );
};

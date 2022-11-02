import { Card, CardContent, CardHeader } from '@mui/material';
import { Category } from './types';
import Tiles from './tile';
import Icon from './icon';

interface CategoryProps {
    category: Category;
}

export default (props: CategoryProps) => {
    return (
        <Card id={props.category.id} variant='elevation' elevation={0}>
            {
                props.category.title
                    ? (
                        <CardHeader
                            avatar={<Icon title={props.category.title} icon={props.category.icon} />}
                            title={props.category.title}
                        />
                    )
                    : null
            }
            <CardContent>
                {
                    props.category.navs
                        ? (<Tiles navs={props.category.navs} />)
                        : null
                }
            </CardContent>
        </Card>
    );
};

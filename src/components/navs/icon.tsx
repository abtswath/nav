import { Avatar } from '@mui/material';
import stringIcon from '../../libs/string-icon';


export default (props: { icon?: string, title: string }) => {
    if (props.icon) {
        return (
            <Avatar src={props.icon} alt={props.title} />
        );
    }
    const { bgcolor, children } = stringIcon(props.title);
    return (
        <Avatar sx={{ bgcolor }} alt={props.title}>
            {children}
        </Avatar>
    );
}

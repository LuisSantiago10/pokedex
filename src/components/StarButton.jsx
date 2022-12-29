import { StarFilled, StarOutlined } from "@ant-design/icons";
import { Button } from "antd";

const StarButton = ({ isFavorite,onclick}) =>{
    const Icon = isFavorite ? StarFilled : StarOutlined
    return <Button icon={<Icon />} onClick={onclick}/>
}

export default StarButton;
import { StarOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import Meta from 'antd/es/card/Meta';

const PokemonCard = ({ name,image }) => {
  return (
    <Card
        style={{width:250}}
        title={name}
        cover={<img src={image} alt={name}/>}
        extra={<StarOutlined />}
    >
        <Meta description="fire,magic"/>
    </Card>
  )
}

export default PokemonCard;
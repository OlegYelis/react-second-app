import { Button } from 'components/UI/Button/Button';
import { useContext } from 'react';
import { AuthContext } from 'store/auth-context';
import { Card } from '../UI/Card/Card';

export const Home = props => {
  const ctx = useContext(AuthContext);
  return (
    <Card className="home">
      <h1>Рады Вас Видеть Снова!</h1>
      <Button onClick={ctx.onLogout}>Выход</Button>
    </Card>
  );
};

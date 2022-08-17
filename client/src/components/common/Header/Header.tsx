import { useSelector } from 'react-redux';
import { RootState } from '../../../modules';
import { HeaderWrapper } from './Header.style';

const Header = () => {
  const { header } = useSelector((state: RootState) => state.layout);

  return (
    <HeaderWrapper>
      <h1>{header.title}</h1>
    </HeaderWrapper>
  );
};

export default Header;

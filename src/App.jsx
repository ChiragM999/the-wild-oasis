import styled from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import Button from './ui/Button';
import Input from './ui/Input';
import Heading from './ui/Heading';

const StylesApp = styled.div`
	padding: 20px;
`;

function App() {
	return (
		<>
			<GlobalStyles />
			<StylesApp>
				<Heading>The Wild Oasis</Heading>
				<Button onClick={() => alert('Check In')}>Check In</Button>
				<Input placeholder="Number of guest" />
			</StylesApp>
		</>
	);
}

export default App;

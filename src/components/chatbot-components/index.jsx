import { Container, Modal } from 'react-bootstrap';

import Chatbot from 'react-chatbot-kit';
import config from '../chatbot-components/config';
import MessageParser from '../chatbot-components/MessageParser';
import ActionProvider from '../chatbot-components/ActionProvider';

import 'react-chatbot-kit/build/main.css';

const MyBot = ({handleClose, show}) => {

	return (
		<Container id='bottom'>
			<Modal
				aria-labelledby='contained-modal-title-vcenter'
				show={show}
				onHide={handleClose}
				size='sm'
				centered>
				<Modal.Header closeButton>
					<h2 className='times'>FAQ Bot</h2>
				</Modal.Header>
				<Modal.Body className='d-flex justify-content-center'>
					<Chatbot
						config={config}
						messageParser={MessageParser}
						actionProvider={ActionProvider}
					/>
				</Modal.Body>
			</Modal>
		</Container>
	);
};

export default MyBot;

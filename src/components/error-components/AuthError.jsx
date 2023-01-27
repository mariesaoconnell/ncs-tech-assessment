import React from 'react';
import { Modal } from 'react-bootstrap';

function AuthError({show, handleClose, error}) {
  return (
		<Modal className='vertically-align' show={show} onHide={handleClose} centered>
			<Modal.Header closeButton>Error Message:</Modal.Header>
			<Modal.Body className='text-center p-5'>
				<h2>
					An Error Occurred: <em>{error}</em>
				</h2>
			</Modal.Body>
		</Modal>
	);
}

export default AuthError;

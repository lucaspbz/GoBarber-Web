import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast hasDescription>
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível fazer login na aplicacao</p>

          <button type="button">
            <FiXCircle size={18} />
          </button>
        </div>
      </Toast>

      <Toast hasDescription={false} type="success">
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um erro</strong>

          <button type="button">
            <FiXCircle size={18} />
          </button>
        </div>
      </Toast>

      <Toast hasDescription type="error">
        <FiAlertCircle size={20} />

        <div>
          <strong>Aconteceu um erro</strong>
          <p>Não foi possível fazer login na aplicacao</p>

          <button type="button">
            <FiXCircle size={18} />
          </button>
        </div>
      </Toast>
    </Container>
  );
};

export default ToastContainer;

import Button from 'components/Button';

import Modal from '..';

import { ButtonContainer, Container } from './style';

interface Props {
  message: string;
  handleStage: () => void;
  onClose: () => void;
}

const AnswerModal = ({ message, handleStage, onClose }: Props) => {
  const onClick = () => {
    handleStage();
    onClose();
  };

  return (
    <Modal>
      <Container>
        <p>{message}</p>
        <ButtonContainer>
          <Button onClick={onClick}>다음 문항</Button>
        </ButtonContainer>
      </Container>
    </Modal>
  );
};

export default AnswerModal;

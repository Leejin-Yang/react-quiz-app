import { useNavigate } from 'react-router-dom';
import { useRecoilValue, useResetRecoilState } from 'recoil';

import Button from 'components/Button';
import { studyNoteListState, studyNoteToggleState } from 'states/quiz';

import Note from './Note';

import { ButtonWrapper, Container, CustomDiv, ListContainer, NoteList, Section } from './style';

const StudyNote = () => {
  const studyNoteList = useRecoilValue(studyNoteListState);
  const resetNoteToggle = useResetRecoilState(studyNoteToggleState);
  const navigate = useNavigate();

  return (
    <Container>
      <Section>
        <h1>Study Note</h1>
        <p>Click Question and Show Answer</p>
        <CustomDiv>
          <Button onClick={resetNoteToggle}>Fold All</Button>
        </CustomDiv>
        <ListContainer>
          <NoteList>
            {studyNoteList.map((note, index) => (
              <Note key={note.question} note={note} index={index} />
            ))}
          </NoteList>
        </ListContainer>
      </Section>
      <ButtonWrapper>
        <Button onClick={() => navigate('/')}>돌아가기</Button>
        <Button onClick={() => navigate('/quizzes', { replace: true })}>다시 풀기</Button>
      </ButtonWrapper>
    </Container>
  );
};

export default StudyNote;

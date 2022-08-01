import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import Button from 'components/Button';
import { studyNoteListState } from 'states/quiz';

import Note from './Note';

import { ButtonWrapper, Container, ListContainer, NoteList, Section } from './style';

const StudyNote = () => {
  const studyNoteList = useRecoilValue(studyNoteListState);
  const navigate = useNavigate();

  return (
    <Container>
      <Section>
        <h1>Study Note</h1>
        <p>Click Question and Show Answer</p>
        <ListContainer>
          <NoteList>
            {studyNoteList.map((note, index) => (
              <Note key={note.question} note={note} index={index} />
            ))}
          </NoteList>
        </ListContainer>
      </Section>
      <ButtonWrapper>
        <Button onClick={() => navigate('/quizzes', { replace: true })}>다시 풀기</Button>
      </ButtonWrapper>
    </Container>
  );
};

export default StudyNote;

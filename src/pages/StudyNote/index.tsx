import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMount } from 'react-use';
import { useResetRecoilState } from 'recoil';
import store from 'store';

import Button from 'components/Button';
import { studyNoteToggleState } from 'states/quiz';
import { INote } from 'types/quiz';

import Note from './Note';

import { ButtonWrapper, Container, CustomDiv, ListContainer, NoteList, Section } from './style';

const StudyNote = () => {
  const [studyNoteList, setStudyNoteList] = useState<INote[]>([]);

  const navigate = useNavigate();
  const resetNoteToggle = useResetRecoilState(studyNoteToggleState);

  useMount(() => {
    const localStudyNoteList = store.get('quiz-study-note');

    if (!localStudyNoteList) return;

    setStudyNoteList(localStudyNoteList);
  });

  const deleteNote = (question: string) => {
    const newStudyNoteList = studyNoteList.filter((item) => item.question !== question);

    setStudyNoteList(newStudyNoteList);
    store.set('quiz-study-note', newStudyNoteList);
  };

  return (
    <Container>
      <Section>
        <h1>Study Note</h1>
        <p>Click Question and Show Answer</p>
        <CustomDiv>
          <Button onClick={resetNoteToggle}>Fold All</Button>
        </CustomDiv>
        <ListContainer>
          {studyNoteList.length === 0 && (
            <p>
              No Questions in the Note. <br /> Play Quiz and fill in the Note.
            </p>
          )}
          {studyNoteList.length > 0 && (
            <NoteList>
              {studyNoteList.map((note, index) => (
                <Note key={note.question} note={note} index={index} deleteNote={deleteNote} />
              ))}
            </NoteList>
          )}
        </ListContainer>
      </Section>
      <ButtonWrapper>
        <Button onClick={() => navigate('/')}>돌아가기</Button>
        <Button onClick={() => navigate('/quizzes', { replace: true })}>퀴즈 풀기</Button>
      </ButtonWrapper>
    </Container>
  );
};

export default StudyNote;

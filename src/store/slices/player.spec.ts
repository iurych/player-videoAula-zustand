import { describe, it, expect } from 'vitest';
import { player as reducer, play, next, iPlayerState } from './player';

const mockTestAble: iPlayerState = {
  course: {
    id: 1,
    modules: [
      {
        id: 1,
        title: 'Iniciando com React',
        lessons: [
          {
            id: 'Jai8w6K_GnY',
            title: 'CSS Modules',
            duration: '13:45',
          },
          {
            id: 'w-DW4DhDfcw',
            title: 'Estilização do Post',
            duration: '10:05',
          },
        ],
      },
      {
        id: 2,
        title: 'Estrutura da aplicação',
        lessons: [
          {
            id: 'gE48FQXRZ_o',
            title: 'Componente: Comment',
            duration: '13:45',
          },
          { id: 'Ng_Vk4tBl0g', 
            title: 'Responsividade', 
            duration: '10:05' },
        ],
      },
    ],
  },
  isLoading: false,
  currentModuleIndex: 0,
  currentLessonIndex: 0,
};


describe('player slice', () => {
  it('it should be able to play', () => {
    const state = reducer(mockTestAble, play([1, 2]));

    expect(state.currentModuleIndex).toEqual(1);
    expect(state.currentLessonIndex).toEqual(2);
  });

  it('it should be able to automatically play next video', () => {
    const state = reducer(mockTestAble, next());

    expect(state.currentModuleIndex).toEqual(0);
    expect(state.currentLessonIndex).toEqual(1);
  });
  
  it('it should be able to automatically jump to the next module', () => {
    const state = reducer({
        ...mockTestAble,
        currentLessonIndex: 1,
    }, next());

    expect(state.currentModuleIndex).toEqual(1);
    expect(state.currentLessonIndex).toEqual(0);
  });
 
  it('it should not be able to update to empty module and lesson', () => {
    const state = reducer({
        ...mockTestAble,
        currentLessonIndex: 1,
        currentModuleIndex: 1,
    }, next());

    expect(state.currentModuleIndex).toEqual(1);
    expect(state.currentLessonIndex).toEqual(1);
  });
});

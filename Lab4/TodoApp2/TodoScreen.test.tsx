import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import TodoScreen from './TodoScreen';

//TDD
describe('TodoScreen', () => {
  it('debe agregar una nueva tarea cuando se presiona el botón "Add Task"', () => {
    render(<TodoScreen />);
    // se buscan los elementos de la UI
    const input = screen.getByTestId('taskInput');
    const addButton = screen.getByTestId('addButton');
    //se simula escribir en el campo de texto y se presiona el botón
    fireEvent.changeText(input, 'New Task');
    fireEvent.press(addButton);
    // se verifica que la tarea aparece en la lista
    const taskText = screen.getByText('New Task');
    expect(taskText).toBeTruthy();  // La tarea debería estar en la lista
  });
});

//BDD
// Given a list of tasks, including an incomplete task,
// When the user taps “Complete” on the task,
// Then the task’s text should appear with a strikethrough.

describe('TodoScreen BDD', () => {
    it('debe marcar una tarea como completa con un estilo de strikethrough', () => {
        render(<TodoScreen />);
        const {debug}=render(<TodoScreen />);
        // se agrega una tarea para probar
        const input = screen.getByTestId('taskInput');
        const addButton = screen.getByTestId('addButton');
        fireEvent.changeText(input, 'Tarea incompleta');
        fireEvent.press(addButton);
        // se busca el botón de Complete
        const completeButton = screen.getByText('Complete');
        fireEvent.press(completeButton);
        // se verifica que el texto de la tarea tiene el estilo de strikethrough
        const taskText = screen.getByText('Tarea incompleta');
        expect(taskText.props.style.textDecorationLine).toBe('line-through');
      });    
});


//ATDD
// When the user taps “Delete” on a task,
// Then the task should no longer appear in the list.
describe('TodoScreen ATDD', () => {
    it('debe eliminar una tarea de la lista cuando se presiona el botón "Delete"', () => {
        render(<TodoScreen />);
        //se agrega una tarea para probar
        const input = screen.getByTestId('taskInput');
        const addButton = screen.getByTestId('addButton');
        fireEvent.changeText(input, 'Tarea a eliminar');
        fireEvent.press(addButton);
        // se busca el botón de eliminar
        const deleteButton = screen.getByText('Delete');
        fireEvent.press(deleteButton);
        // se verifica que la tarea ya no está en la lista
        const taskText = screen.queryByText('Tarea a eliminar');
        expect(taskText).toBeNull();  // La tarea no debe existir
      });  
});
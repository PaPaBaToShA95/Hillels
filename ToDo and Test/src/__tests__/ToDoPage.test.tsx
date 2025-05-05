import { render, screen, fireEvent } from '@testing-library/react';
import TodoPage from '@/pages/TodoPage';
import { describe, test, expect, beforeEach } from 'vitest';
import { vi } from 'vitest';

vi.mock('uuid', () => ({
    v4: vi.fn().mockReturnValue('test-id-123'),
}));

describe('TodoPage', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test('have title TODO', () => {
        render(<TodoPage />);
        const title = screen.getByText('Список справ (TODO)');
        expect(title).toBeInTheDocument();
    });

    test('input apply value', () => {
        render(<TodoPage />);
        const input = screen.getByPlaceholderText('Додати нову справу...');

        fireEvent.change(input, { target: { value: 'Тестовий текст' } });
        expect(input).toHaveValue('Тестовий текст');

        fireEvent.change(input, { target: { value: '12345' } });
        expect(input).toHaveValue('12345');

        fireEvent.change(input, { target: { value: 'Тест 123' } });
        expect(input).toHaveValue('Тест 123');
    });

    test('empty input when click add button not add todo', () => {
        render(<TodoPage />);
        const addButton = screen.getByText('Додати');

        expect(screen.getByText('Список порожній. Додайте першу справу!')).toBeInTheDocument();


        fireEvent.click(addButton);

        expect(screen.getByText('Список порожній. Додайте першу справу!')).toBeInTheDocument();
        expect(screen.queryAllByRole('listitem')).toHaveLength(0);
    });

    test('after click add button add todo', () => {
        render(<TodoPage />);
        const input = screen.getByTestId('add-todo');
        const addButton = screen.getByText('Додати');

        const todoText = 'Нова тестова справа';
        fireEvent.change(input, { target: { value: todoText } });

        fireEvent.click(addButton);

        expect(input).toHaveValue('');

        const todoItem = screen.getByText(todoText);
        expect(todoItem).toBeInTheDocument();

        expect(screen.queryByText('Список порожній. Додайте першу справу!')).not.toBeInTheDocument();
    });


});
describe('TodoPage', () => {
    beforeEach(() => {
        cy.visit('/');
       
        cy.clearLocalStorage();
    });

    it('має заголовок "Список справ (TODO)"', () => {
        cy.contains('Список справ (TODO)').should('be.visible');
    });

    it('можна вводити цифри та літери у поле', () => {
        cy.get('input[placeholder="Додати нову справу..."]').type('Тест 123').should('have.value', 'Тест 123');
    });

    it('не додає todo, якщо поле пусте', () => {
        cy.contains('Додати').click();
        cy.contains('Список порожній. Додайте першу справу!').should('be.visible');
        cy.get('li').should('not.exist');
    });

    it('додає справу після вводу і кліку', () => {
        const text = 'Протестувати додавання';

        cy.get('input[placeholder="Додати нову справу..."]').type(text);
        cy.contains('Додати').click();

        cy.contains(text).should('be.visible');
        cy.get('input[placeholder="Додати нову справу..."]').should('have.value', '');
    });

    it('залишається після перезавантаження сторінки', () => {
        const todoText = 'Справу не забути!';

        cy.get('input[placeholder="Додати нову справу..."]').type(todoText);
        cy.contains('Додати').click();

        cy.reload();

        cy.contains(todoText).should('exist');
    });

    it('можна відзначити справу як виконану', () => {
        const todoText = 'Виконати перевірку';

        cy.get('input[placeholder="Додати нову справу..."]').type(todoText);
        cy.contains('Додати').click();

        cy.contains(todoText).click();
        cy.contains(todoText).should('have.class', 'line-through');
    });

    it('можна видалити справу', () => {
        const todoText = 'Цю справу буде видалено';

        cy.get('input[placeholder="Додати нову справу..."]').type(todoText);
        cy.contains('Додати').click();

        cy.contains(todoText).parent().parent().find('button[type="delete"]').click();

        cy.contains(todoText).should('not.exist');
    });
});

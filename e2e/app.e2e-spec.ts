import { EjercicioViviendasPage } from './app.po';

describe('ejercicio-viviendas App', () => {
  let page: EjercicioViviendasPage;

  beforeEach(() => {
    page = new EjercicioViviendasPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

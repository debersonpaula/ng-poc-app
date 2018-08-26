import { DscFormsModule } from './dsc-forms.module';

describe('DscFormsModule', () => {
  let dscFormsModule: DscFormsModule;

  beforeEach(() => {
    dscFormsModule = new DscFormsModule();
  });

  it('should create an instance', () => {
    expect(dscFormsModule).toBeTruthy();
  });
});

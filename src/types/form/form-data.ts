export interface FormProps<DATA> {
  data?: DATA;
  onSubmit: (vars: DATA) => void;
  disabled?: boolean;
  id?: string;
  validationSchema?: any;
}

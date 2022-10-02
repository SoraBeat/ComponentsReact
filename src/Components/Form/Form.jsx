const FormLogin = ({ formik, children }) => {
  return <form onSubmit={formik.handleSubmit}>{children}</form>;
};
export default FormLogin;

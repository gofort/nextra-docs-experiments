const EnvVariables = () => {
  return (
    <div>
      <p>API URL: {process.env.PUBLIC_ENV}</p>
      <p>API Key: {process.env.SECRET_ENV}</p>
    </div>
  );
};

export default EnvVariables;
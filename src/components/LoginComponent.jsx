const LoginComponent = (props) => {
  return (
    <div>
      <h1>Login</h1>
      <label htmlFor="username">username:</label>
      <form onSubmit={props.handleSubmit}>
        <input
          type="text"
          name="username"
          id="username"
          onChange={props.handleChange}
        />
        <label htmlFor="password">password:</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={props.handleChange}
        />
        <input type="submit"></input>
      </form>
    </div>
  );
};

export default LoginComponent;

const LoginComponent = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="username">username:</label>
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

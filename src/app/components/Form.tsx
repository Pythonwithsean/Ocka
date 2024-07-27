export default function Form() {
  return (
    <form action="">
      <label htmlFor="username">Username</label>
      <input type="text" name="username" id="username" />
      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" />
      <p>
        Dont have an Account? <a href="/signup">signup</a>
      </p>
    </form>
  );
}

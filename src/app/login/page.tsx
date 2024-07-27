import trpc from '../utils/trpc-client';
export default async function Login() {
  const state = await trpc.health.query();
  console.log(state);
  return <h1>Login</h1>;
}

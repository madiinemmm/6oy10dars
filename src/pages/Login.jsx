import { Link } from "react-router-dom";
import { useRef, useState } from "react";
function Login() {
  const [loading, setLoading] = useState(false);
  const usernameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  function validate() {
    return true;
  }
  function handleRegister(e) {
    e.preventDefault();
    const isValid = validate();
    if (isValid) {
      const user = {
        username: usernameRef.current.value,
        password: passwordRef.current.value,
      };

      //   setLoading(true);
      //   fetch("https://auth-rg69.onrender.com/api/auth/signin", {
      //     method: "POST",
      //     headers: {
      //       "Content-type": "application/json",
      //     },
      //     body: JSON.stringify(),
      //   })
      //     .then((res) => res.json())
      //     .then((data) => {
      //       console.log(data);
      //     })
      //     .catch((err) => {
      //       console.log(err);
      //     })
      //     .finally(() => {
      //       setLoading(false);
      //     });
    }
  }
  return (
    <div>
      <form
        onSubmit={handleRegister}
        className="w-25 mx-auto mt-5
       shadow-lg p-5 mb-5 rounded "
      >
        <h1 className="text-center">Login</h1>
        <input
          type="text"
          class="form-control mt-5"
          placeholder="Enter username"
          ref={usernameRef}
        />

        <input
          type="number"
          class="form-control mt-3"
          placeholder="Enter password"
          ref={passwordRef}
        />
        <button
          type="button"
          disabled={loading ? true : false}
          class="btn mt-3 btn-primary w-100"
          onClick={handleRegister}
        >
          {loading ? "Loading..." : "Register"}
        </button>
        <Link to={"/register"} className="text-decoration-none">
          Register
        </Link>
      </form>
    </div>
  );
}

export default Login;
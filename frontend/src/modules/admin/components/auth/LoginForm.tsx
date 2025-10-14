interface LoginFormProps {
  formData: {
    email: string;
    password: string;
  };
  onInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onGoToRegister: () => void;
  errors: string[];
}

export default function LoginForm({
  formData,
  onInputChange,
  onSubmit,
  onGoToRegister,
  errors
}: LoginFormProps) {
  return (
    <div className="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
      <div className="my-auto mx-auto xl:ml-20 bg-white dark:bg-darkmode-600 xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
        <h2 className="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">
          Sign In
        </h2>
        <div className="intro-x mt-2 text-slate-400 dark:text-slate-400 xl:hidden text-center">
          Log in to access your account and manage everything in one place.
        </div>

        <form className="intro-x mt-8" onSubmit={onSubmit}>
          {errors.length > 0 && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-5">
              <strong className="font-bold">⚠️ Error!</strong>
              <ul className="list-disc list-inside mt-2">
                {errors.map((err, index) => (
                  <li key={index}>{err}</li>
                ))}
              </ul>
            </div>
          )}

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={onInputChange}
            className="intro-x login__input form-control py-3 px-4 block"
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={onInputChange}
            className="intro-x login__input form-control py-3 px-4 block mt-4"
            placeholder="Password"
            required
          />

          <div className="intro-x mt-5 xl:mt-8 text-center xl:text-left">
            <button
              type="submit"
              className="btn btn-primary py-3 px-4 w-full xl:w-32 xl:mr-3 align-top"
            >
              Login
            </button>
            <button
              type="button"
              onClick={onGoToRegister}
              className="btn btn-outline-secondary py-3 px-4 w-full xl:w-32 mt-3 xl:mt-0 align-top"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

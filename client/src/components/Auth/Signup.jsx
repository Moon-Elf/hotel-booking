import { Formik } from "formik";
import { ChevronLeft, CircleUserRound, Key } from "lucide-react";
import { useRegisterMutation } from "../../features/auth/authApi";
import Button from "../ui/Button";

const Signup = ({ data, setStep }) => {
  const [register] = useRegisterMutation();
  const formValidation = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = "Required";
    } else if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length <= 3)
      errors.password = "Password should be at least 4 characters";
    else if (!values.confirmPassword) {
      errors.confirmPassword = "Required";
    } else if (values.confirmPassword != values.password) {
      errors.confirmPassword = "Passwords do not match";
    }
    return errors;
  };
  const formSubmit = async (values) => {
    await register({
      name: values.name,
      phone: data.phone,
      password: values.password,
    });
  };

  return (
    <div className="text-white">
      <p className="text-sm mb-1">
        <span
          className="underline cursor-pointer flex justify-center items-center"
          onClick={() => setStep(1)}
        >
          <ChevronLeft size={20} /> Go back
        </span>
      </p>
      <h3 className="text-sm mb-2">
        Create an account today not to miss the best deals on rooms*
      </h3>
      <Formik
        initialValues={{ name: "", password: "", confirmPassword: "" }}
        validate={formValidation}
        onSubmit={formSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form
            className="w-full max-w-md mx-auto grid gap-2"
            onSubmit={handleSubmit}
          >
            {/* Name */}
            <div className="relative">
              <div className="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <CircleUserRound className="stroke-blue-500" size={20} />
              </div>
              <input
                type="text"
                name="name"
                className="w-full text-black p-4 ps-10 text-sm rounded-md border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Name here..."
                required
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <p className="text-red-500 font-semibold text-start">
              {errors.name && touched.name && errors.name}
            </p>
            {/* Password */}
            <div className="relative">
              <div className="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <Key className="stroke-blue-500" size={20} />
              </div>
              <input
                type="password"
                name="password"
                className="text-black w-full p-4 ps-10 text-sm rounded-md border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Password here..."
                required
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <p className="text-red-500 font-semibold text-start">
              {errors.password && touched.password && errors.password}
            </p>
            {/* Confirm Password */}
            <div className="relative">
              <div className="absolute inset-y-0 rtl:inset-x-0 start-0 flex items-center ps-3.5 pointer-events-none">
                <Key className="stroke-blue-500" size={20} />
              </div>
              <input
                type="password"
                name="confirmPassword"
                className="text-black w-full p-4 ps-10 text-sm rounded-md border-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Confirm Password here..."
                required
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <p className="text-red-500 font-semibold text-start">
              {errors.confirmPassword &&
                touched.confirmPassword &&
                errors.confirmPassword}
            </p>
            <div className="w-full">
              <Button
                type="submit"
                msg="Signup"
                disabled={
                  !values.name ||
                  !values.password ||
                  !values.confirmPassword ||
                  isSubmitting
                }
              />
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Signup;

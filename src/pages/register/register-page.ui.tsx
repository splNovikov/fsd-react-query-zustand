import { Formik, Form, Field, ErrorMessage, useFormikContext } from 'formik';
import { withErrorBoundary } from 'react-error-boundary';
import { Link } from 'react-router-dom';
import {
  sessionContracts,
  sessionQueries,
  sessionTypes,
} from '~entities/session';
import { pathKeys } from '~shared/lib/react-router';
import { formikContract } from '~shared/lib/zod';
import { ErrorHandler } from '~shared/ui/error';

function Page() {
  const {
    mutate: createUser,
    isPending,
    isError,
    error,
  } = sessionQueries.useCreateUserMutation();

  return (
    <div>
      <h1>Sign up</h1>
      <p>
        <Link to={pathKeys.login()}>Have an account?</Link>
      </p>

      {isError && <ErrorHandler error={error} />}

      <Formik
        initialValues={initialUser}
        validate={formikContract(sessionContracts.CreateUserDtoSchema)}
        onSubmit={(user) => createUser({ user })}
      >
        <Form>
          <fieldset disabled={isPending}>
            <fieldset>
              <Field name="firstName" type="text" placeholder="First Name" />
              <ErrorMessage name="firstName" />
            </fieldset>

            <fieldset>
              <Field name="lastName" type="text" placeholder="Last Name" />
              <ErrorMessage name="lastName" />
            </fieldset>

            <fieldset>
              <Field name="phone" type="text" placeholder="Phone" />
              <ErrorMessage name="phone" />
            </fieldset>

            <fieldset>
              <Field name="email" type="text" placeholder="Email" />
              <ErrorMessage name="email" />
            </fieldset>

            <fieldset>
              <Field name="password" type="password" placeholder="Password" />
              <ErrorMessage name="password" />
            </fieldset>
            <SubmitButton />
          </fieldset>
        </Form>
      </Formik>
    </div>
  );
}

const initialUser: sessionTypes.CreateUserDto = {
  email: '',
  firstName: '',
  lastName: '',
  password: '',
  phone: '',
};

function SubmitButton() {
  const { isValidating, isValid } = useFormikContext();

  return (
    <button
      className="btn btn-lg btn-primary pull-xs-right"
      type="submit"
      disabled={!isValid || isValidating}
    >
      Sign up
    </button>
  );
}

export const RegisterPage = withErrorBoundary(Page, {
  fallbackRender: ({ error }) => <ErrorHandler error={error} />,
});

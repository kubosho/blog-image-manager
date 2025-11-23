import preview from '../../../.storybook/preview';
import { ERROR_REASON } from '../../constants/error-reason';
import { Error } from '../Error';

const meta = preview.meta({
  component: Error,
});

export const ErrorWithNotSetAwsEnvironmentVariables = meta.story({
  args: {
    errorReason: ERROR_REASON.NOT_SET_AWS_ENVIRONMENT_VARIABLES,
  },
});

export const ErrorWithGeneralError = meta.story({
  args: {
    errorReason: ERROR_REASON.GENERAL_ERROR,
  },
});

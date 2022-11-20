// ! This component is very unfinished.
import { ExclamationCircleIcon } from '@heroicons/react/outline';
import React from 'react';
import { Text } from '../display/Text';
import { Props } from '../types';
import {
  forwardRefWithAs,
  useClassNames,
  useIdentifier,
  themes as t,
  INPUT_SIZES,
  INPUT_PRIMARY_THEME,
  INPUT_COMMON_STYLES,
} from '../utils';

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  size?: 'sm' | 'md' | 'lg';
  error?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  trailingOverrideError?: boolean;
  wrapperClassName?: string;
  label?: string | React.ReactNode;
}

const DEFAULT_INPUT_TAG = 'input';

export const Input = forwardRefWithAs(function Input<
  TTag extends React.ElementType = typeof DEFAULT_INPUT_TAG
>(
  {
    size = 'md',
    error,
    leadingIcon,
    trailingIcon,
    trailingOverrideError,
    type = 'text',
    wrapperClassName,
    label,
    className,
    autoComplete = 'off',
    autoCapitalize = 'off',
    spellCheck = false,
    children,
    ...props
  }: Props<TTag, 'size'> & InputProps,
  ref: React.Ref<HTMLInputElement>
) {
  const classNames = useClassNames(() => {
    const base = `${INPUT_COMMON_STYLES} peer`;

    const themeClass = INPUT_PRIMARY_THEME({
      error: !!error,
    });

    const leftPadding = !!leadingIcon && 'pl-10';
    const rightPadding = (!!trailingIcon || error) && 'pr-10';

    return [
      base,
      INPUT_SIZES[size],
      themeClass,
      leftPadding,
      rightPadding,
      className,
    ];
  }, [size, error, className, leadingIcon, trailingIcon]);

  const wrapperClassNames = useClassNames(() => {
    const base = 'w-full block';
    return [base, !!label && '', wrapperClassName];
  }, [wrapperClassName, label]);

  const id = useIdentifier(props?.id);

  return (
    <div className={wrapperClassNames}>
      {label && (
        <Text
          variant="label"
          as="label"
          htmlFor={id}
          className={`mb-1.5 ${size === 'lg' ? 'text-base' : ''}`}
        >
          {label}
        </Text>
      )}
      <div
        className={!!leadingIcon || !!trailingIcon || !!error ? 'relative' : ''}
      >
        <input
          ref={ref}
          {...props}
          autoComplete={autoComplete}
          autoCapitalize={autoCapitalize}
          spellCheck={spellCheck}
          type={type}
          className={classNames}
          id={id}
        />
        {leadingIcon && (
          <div
            className={`${
              !!error
                ? t.error['text-active']
                : 'text-light-primary-border peer-focus:text-light-primary-border-active dark:text-dark-primary-border peer-focus:dark:text-dark-primary-border-active'
            } absolute inset-y-0
              left-0 flex items-center pl-2.5 transition`}
          >
            {leadingIcon}
          </div>
        )}
        {trailingIcon && (!error || trailingOverrideError) && (
          <div
            className={`absolute inset-y-0 right-0 flex items-center pr-2.5 ${
              !!error
                ? t.error['text-active']
                : 'text-light-primary-border peer-focus:text-light-primary-border-active dark:text-dark-primary-border peer-focus:dark:text-dark-primary-border-active'
            }`}
          >
            {trailingIcon}
          </div>
        )}
        {error && !trailingOverrideError && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <ExclamationCircleIcon
              className={`${t.error['text-active']} h-5 w-5`}
              aria-hidden
            />
          </div>
        )}
      </div>
      {error && (
        <div className={wrapperClassNames}>
          <Text
            variant="body2"
            className="mt-1 text-light-error-bg dark:text-light-error-bg"
          >
            {error}
          </Text>
        </div>
      )}
    </div>
  );
});

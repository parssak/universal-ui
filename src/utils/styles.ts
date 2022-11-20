// primary | secondary | success | info | warning | error | purple
export const themes = {
  primary: {
    bg: 'bg-light-primary-bg dark:bg-dark-primary-bg',
    'disabled:bg':
      'disabled:bg-light-primary-bg disabled:dark:bg-dark-primary-bg',
    'bg-flipped': 'bg-dark-primary-bg dark:bg-light-primary-bg',
    'hover:bg-flipped':
      'hover:bg-dark-primary-bg dark:hover:bg-light-primary-bg',
    'bg-active': 'bg-light-primary-bg-active dark:bg-dark-primary-bg-active',
    ring: 'ring-light-primary-ring dark:ring-dark-primary-ring',
    border: 'border-light-primary-border dark:border-dark-primary-border',
    'border-active':
      'border-light-primary-border-active dark:border-dark-primary-border-active',
    'hover:border-active':
      'hover:border-light-primary-border-active dark:hover:border-dark-primary-border-active',
    'focus:border-active':
      'focus:border-light-primary-border-active dark:focus:border-dark-primary-border-active',
    'focus-within:border-active':
      'focus-within:border-light-primary-border-active dark:focus-within:border-dark-primary-border-active',
    text: 'text-light-primary-text dark:text-dark-primary-text',
    'disabled:text':
      'disabled:text-light-primary-text disabled:dark:text-dark-primary-text',
    'text-active':
      'text-light-primary-text-active dark:text-dark-primary-text-active',
    'text-flipped': 'text-dark-primary-text dark:text-light-primary-text',
    'hover:text-flipped':
      'hover:text-dark-primary-text dark:hover:text-light-primary-text',
    'hover:text-active':
      'hover:text-light-primary-text-active dark:hover:text-dark-primary-text-active',
    divide:
      'divide-light-primary-border-divide dark:divide-dark-primary-border-divide',
    shadow:
      'shadow-light-primary-border-active/5 dark:shadow-dark-primary-border-active/5',
  },
  secondary: {
    bg: 'bg-light-secondary-bg dark:bg-dark-secondary-bg',
    'disabled:bg':
      'disabled:bg-light-secondary-bg disabled:dark:bg-dark-secondary-bg',
    'bg-flipped': 'bg-dark-secondary-bg dark:bg-light-secondary-bg',
    'hover:bg-flipped':
      'hover:bg-dark-secondary-bg dark:hover:bg-light-secondary-bg',
    'bg-active':
      'bg-light-secondary-bg-active dark:bg-dark-secondary-bg-active',
    ring: 'ring-light-secondary-ring dark:ring-dark-secondary-ring',
    border: 'border-light-secondary-border dark:border-dark-secondary-border',
    'border-active':
      'border-light-secondary-border-active dark:border-dark-secondary-border-active',
    'hover:border-active':
      'hover:border-light-secondary-border-active dark:hover:border-dark-secondary-border-active',
    'focus:border-active':
      'focus:border-light-secondary-border-active dark:focus:border-dark-secondary-border-active',
    'focus-within:border-active':
      'focus-within:border-light-secondary-border-active dark:focus-within:border-dark-secondary-border-active',
    text: 'text-light-secondary-text dark:text-dark-secondary-text',
    'disabled:text':
      'disabled:text-light-secondary-text disabled:dark:text-dark-secondary-text',
    'text-active':
      'text-light-secondary-text-active dark:text-dark-secondary-text-active',
    'text-flipped': 'text-dark-secondary-text dark:text-light-secondary-text',
    'hover:text-flipped':
      'hover:text-dark-secondary-text dark:hover:text-light-secondary-text',
    'hover:text-active':
      'hover:text-light-secondary-text-active dark:hover:text-dark-secondary-text-active',
    divide:
      'divide-light-secondary-border-divide dark:divide-dark-secondary-border-divide',
    shadow:
      'shadow-light-secondary-border-active/10 dark:shadow-dark-secondary-border-active/10',
  },
  success: {
    bg: 'bg-light-success-bg dark:bg-dark-success-bg',
    'disabled:bg':
      'disabled:bg-light-success-bg disabled:dark:bg-dark-success-bg',
    'bg-flipped': 'bg-dark-success-bg dark:bg-light-success-bg',
    'hover:bg-flipped':
      'hover:bg-dark-success-bg dark:hover:bg-light-success-bg',
    'bg-active': 'bg-light-success-bg-active dark:bg-dark-success-bg-active',
    ring: 'ring-light-success-ring dark:ring-dark-success-ring',
    border: 'border-light-success-border dark:border-dark-success-border',
    'border-active':
      'border-light-success-border-active dark:border-dark-success-border-active',
    'hover:border-active':
      'hover:border-light-success-border-active dark:hover:border-dark-success-border-active',
    'focus:border-active':
      'focus:border-light-success-border-active dark:focus:border-dark-success-border-active',
    'focus-within:border-active':
      'focus-within:border-light-success-border-active dark:focus-within:border-dark-success-border-active',
    text: 'text-light-success-text dark:text-dark-success-text',
    'disabled:text':
      'disabled:text-light-success-text disabled:dark:text-dark-success-text',
    'text-active':
      'text-light-success-text-active dark:text-dark-success-text-active',
    'text-flipped': 'text-dark-success-text dark:text-light-success-text',
    'hover:text-flipped':
      'hover:text-dark-success-text dark:hover:text-light-success-text',
    'hover:text-active':
      'hover:text-light-success-text-active dark:hover:text-dark-success-text-active',
    divide:
      'divide-light-success-border-divide dark:divide-dark-success-border-divide',
    shadow:
      'shadow-light-success-border-active/10 dark:shadow-dark-success-border-active/10',
  },
  warning: {
    bg: 'bg-light-warning-bg dark:bg-dark-warning-bg',
    'disabled:bg':
      'disabled:bg-light-warning-bg disabled:dark:bg-dark-warning-bg',
    'bg-flipped': 'bg-dark-warning-bg dark:bg-light-warning-bg',
    'hover:bg-flipped':
      'hover:bg-dark-warning-bg dark:hover:bg-light-warning-bg',
    'bg-active': 'bg-light-warning-bg-active dark:bg-dark-warning-bg-active',
    ring: 'ring-light-warning-ring dark:ring-dark-warning-ring',
    border: 'border-light-warning-border dark:border-dark-warning-border',
    'border-active':
      'border-light-warning-border-active dark:border-dark-warning-border-active',
    'hover:border-active':
      'hover:border-light-warning-border-active dark:hover:border-dark-warning-border-active',
    'focus:border-active':
      'focus:border-light-warning-border-active dark:focus:border-dark-warning-border-active',
    'focus-within:border-active':
      'focus-within:border-light-warning-border-active dark:focus-within:border-dark-warning-border-active',
    text: 'text-light-warning-text dark:text-dark-warning-text',
    'disabled:text':
      'disabled:text-light-warning-text disabled:dark:text-dark-warning-text',
    'text-active':
      'text-light-warning-text-active dark:text-dark-warning-text-active',
    'text-flipped': 'text-dark-warning-text dark:text-light-warning-text',
    'hover:text-flipped':
      'hover:text-dark-warning-text dark:hover:text-light-warning-text',
    'hover:text-active':
      'hover:text-light-warning-text-active dark:hover:text-dark-warning-text-active',
    divide:
      'divide-light-warning-border-divide dark:divide-dark-warning-border-divide',
    shadow:
      'shadow-light-warning-border-active/10 dark:shadow-dark-warning-border-active/10',
  },
  error: {
    bg: 'bg-light-error-bg dark:bg-dark-error-bg',
    'disabled:bg': 'disabled:bg-light-error-bg disabled:dark:bg-dark-error-bg',
    'bg-flipped': 'bg-dark-error-bg dark:bg-light-error-bg',
    'hover:bg-flipped': 'hover:bg-dark-error-bg dark:hover:bg-light-error-bg',
    'focus:bg-flipped': 'focus:bg-dark-error-bg dark:focus:bg-light-error-bg',
    'bg-active': 'bg-light-error-bg-active dark:bg-dark-error-bg-active',
    ring: 'ring-light-error-ring dark:ring-dark-error-ring',
    border: 'border-light-error-border dark:border-dark-error-border',
    'border-active':
      'border-light-error-border-active dark:border-dark-error-border-active',
    'hover:border-active':
      'hover:border-light-error-border-active dark:hover:border-dark-error-border-active',
    'focus:border-active':
      'focus:border-light-error-border-active dark:focus:border-dark-error-border-active',
    'focus-within:border-active':
      'focus-within:border-light-error-border-active dark:focus-within:border-dark-error-border-active',
    text: 'text-light-error-text dark:text-dark-error-text',
    'disabled:text':
      'disabled:text-light-error-text disabled:dark:text-dark-error-text',
    'text-active':
      'text-light-error-text-active dark:text-dark-error-text-active',
    'text-flipped': 'text-dark-error-text dark:text-light-error-text',
    'hover:text-flipped':
      'hover:text-dark-error-text dark:hover:text-light-error-text',
    'focus:text-flipped':
      'focus:text-dark-error-text dark:focus:text-light-error-text',
    'hover:text-active':
      'hover:text-light-error-text-active dark:hover:text-dark-error-text-active',
    divide:
      'divide-light-error-border-divide dark:divide-dark-error-border-divide',
    shadow:
      'shadow-light-error-border-active/10 dark:shadow-dark-error-border-active/10',
  },
  info: {
    bg: 'bg-light-info-bg dark:bg-dark-info-bg',
    'disabled:bg': 'disabled:bg-light-info-bg disabled:dark:bg-dark-info-bg',
    'bg-flipped': 'bg-dark-info-bg dark:bg-light-info-bg',
    'hover:bg-flipped': 'hover:bg-dark-info-bg dark:hover:bg-light-info-bg',
    'bg-active': 'bg-light-info-bg-active dark:bg-dark-info-bg-active',
    ring: 'ring-light-info-ring dark:ring-dark-info-ring',
    border: 'border-light-info-border dark:border-dark-info-border',
    'border-active':
      'border-light-info-border-active dark:border-dark-info-border-active',
    'hover:border-active':
      'hover:border-light-info-border-active dark:hover:border-dark-info-border-active',
    'focus:border-active':
      'focus:border-light-info-border-active dark:focus:border-dark-info-border-active',
    'focus-within:border-active':
      'focus-within:border-light-info-border-active dark:focus-within:border-dark-info-border-active',
    text: 'text-light-info-text dark:text-dark-info-text',
    'disabled:text':
      'disabled:text-light-info-text disabled:dark:text-dark-info-text',
    'text-active':
      'text-light-info-text-active dark:text-dark-info-text-active',
    'text-flipped': 'text-dark-info-text dark:text-light-info-text',
    'hover:text-flipped':
      'hover:text-dark-info-text dark:hover:text-light-info-text',
    'hover:text-active':
      'hover:text-light-info-text-active dark:hover:text-dark-info-text-active',
    divide:
      'divide-light-info-border-divide dark:divide-dark-info-border-divide',
    shadow:
      'shadow-light-info-border-active/10 dark:shadow-dark-info-border-active/10',
  },
  purple: {
    bg: 'bg-light-purple-bg dark:bg-dark-purple-bg',
    'disabled:bg':
      'disabled:bg-light-purple-bg disabled:dark:bg-dark-purple-bg',
    'bg-flipped': 'bg-dark-purple-bg dark:bg-light-purple-bg',
    'hover:bg-flipped': 'hover:bg-dark-purple-bg dark:hover:bg-light-purple-bg',
    'bg-active': 'bg-light-purple-bg-active dark:bg-dark-purple-bg-active',
    ring: 'ring-light-purple-ring dark:ring-dark-purple-ring',
    border: 'border-light-purple-border dark:border-dark-purple-border',
    'border-active':
      'border-light-purple-border-active dark:border-dark-purple-border-active',
    'hover:border-active':
      'hover:border-light-purple-border-active dark:hover:border-dark-purple-border-active',
    'focus:border-active':
      'focus:border-light-purple-border-active dark:focus:border-dark-purple-border-active',
    'focus-within:border-active':
      'focus-within:border-light-purple-border-active dark:focus-within:border-dark-purple-border-active',
    text: 'text-light-purple-text dark:text-dark-purple-text',
    'disabled:text':
      'disabled:text-light-purple-text disabled:dark:text-dark-purple-text',
    'text-active':
      'text-light-purple-text-active dark:text-dark-purple-text-active',
    'text-flipped': 'text-dark-purple-text dark:text-light-purple-text',
    'hover:text-flipped':
      'hover:text-dark-purple-text dark:hover:text-light-purple-text',
    'hover:text-active':
      'hover:text-light-purple-text-active dark:hover:text-dark-purple-text-active',
    divide:
      'divide-light-purple-border-divide dark:divide-dark-purple-border-divide',
    shadow:
      'shadow-light-purple-border-active/10 dark:shadow-dark-purple-border-active/10',
  },
} as const;

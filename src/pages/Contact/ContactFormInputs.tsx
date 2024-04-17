import { Email, EmojiPeople } from '@mui/icons-material';

export interface InputProps {
  label: string;
  name: string;
  placeholder: string;
  type?: string;
  icon?: JSX.Element;
  rows?: number;
}

const ContactFormInputs: InputProps[] = [
  {
    label: 'Name',
    name: 'user_name',
    placeholder: 'Your Name',
    type: 'text',
    icon: <EmojiPeople />,
  },
  {
    label: 'Email',
    name: 'user_email',
    placeholder: 'Your Email',
    type: 'email',
    icon: <Email />,
  },
  {
    label: 'Message',
    name: 'message',
    placeholder: 'Your Message',
    rows: 6,
  },
];

export default ContactFormInputs;

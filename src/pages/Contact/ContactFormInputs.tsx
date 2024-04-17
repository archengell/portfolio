import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';

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
    icon: <EmojiPeopleIcon />,
  },
  {
    label: 'Email',
    name: 'user_email',
    placeholder: 'Your Email',
    type: 'email',
    icon: <EmailIcon />,
  },
  {
    label: 'Message',
    name: 'message',
    placeholder: 'Your Message',
    rows: 6,
  },
];

export default ContactFormInputs;

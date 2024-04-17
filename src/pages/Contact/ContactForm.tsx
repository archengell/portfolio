import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, InputAdornment, Stack, TextField } from '@mui/material';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Colors } from '@lib/constants/colors';
import useTheme from '@/store/theme';
import { Themes } from '@/theme/types';
import EmailIcon from '@mui/icons-material/Email';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

type TFormData = {
  name: string;
  textarea: string | '';
  email: string;
  mobile: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>();
  const onSubmit = (data: TFormData) => console.log(data);
  const [themeMode] = useTheme();
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack direction="column">
        <TextField
          placeholder="Name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmojiPeopleIcon sx={{ color: Colors.Blue8 }} />
              </InputAdornment>
            ),
          }}
          sx={{ border: `1px solid ${Colors.Blue8}` }}
          {...register('name', { required: true })}
        />
        <TextField
          placeholder="Email"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon sx={{ color: Colors.Blue8 }} />
              </InputAdornment>
            ),
          }}
          sx={{ border: `1px solid ${Colors.Blue8}` }}
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
        />
        <TextField
          type="tel"
          placeholder="Mobile number"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PhoneAndroidIcon sx={{ color: Colors.Blue8 }} />
              </InputAdornment>
            ),
          }}
          sx={{ border: `1px solid ${Colors.Blue8}` }}
          {...register('mobile', { required: true, minLength: 6, maxLength: 12 })}
        />
        <TextField
          multiline
          maxRows={10}
          placeholder="what would you like to talk about?"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <HeadsetMicIcon sx={{ color: Colors.Blue8 }} />
              </InputAdornment>
            ),
          }}
          sx={{ border: `1px solid ${Colors.Blue8}` }}
          {...register('textarea', {})}
        />

        <Button
          type="submit"
          variant="outlined"
          sx={{
            color: Colors.Blue8,
            border: `1px solid ${Colors.Blue8}`,
            backgroundColor: themeMode === Themes.DARK ? Colors.Dark5 : Colors.Light2,
          }}
          startIcon={<ArrowCircleRightIcon />}
        >
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default ContactForm;

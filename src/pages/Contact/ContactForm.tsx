import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, InputAdornment, Stack, TextField } from '@mui/material';
import {
  ArrowCircleRight,
  Email,
  EmojiPeople,
  HeadsetMic,
  PhoneAndroid,
} from '@mui/icons-material';
import { Colors } from '@lib/constants/colors.ts';
import useTheme from '@/store/theme/index.ts';
import { Themes } from '@/theme/types.ts';

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
                <EmojiPeople sx={{ color: Colors.Blue8 }} />
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
                <Email sx={{ color: Colors.Blue8 }} />
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
                <PhoneAndroid sx={{ color: Colors.Blue8 }} />
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
                <HeadsetMic sx={{ color: Colors.Blue8 }} />
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
          startIcon={<ArrowCircleRight />}
        >
          Submit
        </Button>
      </Stack>
    </form>
  );
};

export default ContactForm;

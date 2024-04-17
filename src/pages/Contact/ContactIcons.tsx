import { Divider, IconButton, Link, Stack, Tooltip } from '@mui/material';
import { Email, GitHub, LinkedIn } from '@mui/icons-material';
import { Colors } from '@lib/constants/colors.ts';

const GITHUB_URL = `https://github.com/archengeI`;
const LINKEDIN_URL = `https://www.linkedin.com/in/kelly-justin-wilson/`;
const EMAIL = 'kjwilsondfl@gmail.com';

const ContactIcons = () => {
  return (
    <>
      <Stack
        sx={{ justifyContent: 'center' }}
        maxWidth="5px"
        direction="row"
        divider={<Divider orientation="vertical" variant="middle" flexItem />}
      >
        <Tooltip title={'Send email'} placement="left" arrow>
          <Link href={`mailto: ${EMAIL}`} target="_blank" rel="noreferrer">
            <IconButton aria-label="email" size="large">
              <Email sx={{ color: Colors.Blue8 }} />
            </IconButton>
          </Link>
        </Tooltip>
        <Tooltip title={'Github'} placement="bottom" arrow>
          <Link href={GITHUB_URL} target="_blank" rel="noreferrer">
            <IconButton aria-label="github" size="large">
              <GitHub sx={{ color: Colors.Blue8 }} />
            </IconButton>
          </Link>
        </Tooltip>
        <Tooltip title={'LinkedIn'} placement="right" arrow>
          <Link href={LINKEDIN_URL} target="_blank" rel="noreferrer">
            <IconButton aria-label="linkedin" size="large">
              <LinkedIn sx={{ color: Colors.Blue8 }} />
            </IconButton>
          </Link>
        </Tooltip>
      </Stack>
    </>
  );
};

export default ContactIcons;

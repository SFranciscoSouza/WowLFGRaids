import { Typography, Avatar, Grid, useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';

const AvatarPageTitle = styled(Avatar)(
  ({ theme }) => `
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      color: ${theme.colors.primary.main};
      margin-right: ${theme.spacing(2)};
      background: ${theme.colors.alpha.trueWhite[10]};
`
);

function PageHeader() {
  const theme = useTheme();

  return (
    <Grid container alignItems="center">
      <Grid item>
        <AvatarPageTitle variant="rounded">
          <EmojiEventsTwoToneIcon fontSize="large" />
        </AvatarPageTitle>
      </Grid>
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Raid Listings
        </Typography>
        <Typography variant="subtitle2">
          Browse and book World of Warcraft raid carries
        </Typography>
      </Grid>
    </Grid>
  );
}

export default PageHeader;

import { FC } from 'react';
import {
  Box,
  Card,
  CardActionArea,
  Grid,
  Typography,
  Avatar,
  Badge,
  Chip,
  useTheme
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ShieldTwoToneIcon from '@mui/icons-material/ShieldTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import FlashOnTwoToneIcon from '@mui/icons-material/FlashOnTwoTone';
import HelpIcon from '@mui/icons-material/Help';
import {
  RaidPost,
  formatGold,
  getDifficultyLabel,
  getDifficultyColor
} from 'src/models/raid';
import Text from 'src/components/Text';

interface RaidsGridProps {
  raids: RaidPost[];
}

const RaidCard = styled(Card)(
  ({ theme }) => `
    margin-bottom: ${theme.spacing(2)};
    background: ${theme.colors.alpha.black[5]};
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: translateY(-2px);
    }
`
);

const PosterAvatar = styled(Avatar)(
  ({ theme }) => `
    width: ${theme.spacing(7)};
    height: ${theme.spacing(7)};
    border: 2px solid ${theme.colors.primary.main};
`
);

const RoleIcon = styled(Box)(
  ({ theme }) => `
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    margin-right: ${theme.spacing(0.5)};
`
);

const StatsBox = styled(Box)(
  ({ theme }) => `
    display: flex;
    align-items: center;
    gap: ${theme.spacing(0.5)};
`
);

const formatTimeAgo = (timestamp: number): string => {
  const now = Date.now();
  const diff = now - timestamp;
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 0) return `${days}d ago`;
  if (hours > 0) return `${hours}h ago`;
  if (minutes > 0) return `${minutes}m ago`;
  return 'Just now';
};

const RaidsGrid: FC<RaidsGridProps> = ({ raids }) => {
  const theme = useTheme();

  if (raids.length === 0) {
    return (
      <Box sx={{ textAlign: 'center', py: 5 }}>
        <Typography variant="h4" color="text.secondary">
          No raids found matching your filters
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Try adjusting your filter criteria
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={2}>
      {raids.map((raid) => (
        <Grid item xs={12} key={raid.id}>
          <RaidCard>
            <Box sx={{ p: 2 }}>
              <Grid container spacing={2} alignItems="center">
                {/* Poster Avatar */}
                <Grid item xs={12} md={1}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Badge
                      overlap="circular"
                      anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'right'
                      }}
                      variant="dot"
                      color={raid.poster.isOnline ? 'success' : 'error'}
                    >
                      <PosterAvatar
                        src={raid.poster.avatar}
                        alt={raid.poster.name}
                      />
                    </Badge>
                  </Box>
                </Grid>

                {/* Main Card Content */}
                <Grid item xs={12} md={11}>
                  <CardActionArea sx={{ p: 1 }}>
                    <Grid container spacing={2}>
                      {/* Raid Info */}
                      <Grid item xs={12} sm={6} md={3.5}>
                        <Box>
                          <Typography variant="h4">
                            <Text color="info">{raid.raidName}</Text>
                          </Typography>
                          <Box sx={{ mt: 1 }}>
                            <Chip
                              size="small"
                              label={getDifficultyLabel(raid.difficulty)}
                              color={getDifficultyColor(raid.difficulty)}
                            />
                            <Chip
                              size="small"
                              label={raid.gameVersion.toUpperCase()}
                              variant="outlined"
                              sx={{ ml: 1 }}
                            />
                          </Box>
                          <Box sx={{ mt: 1 }}>
                            <Typography variant="body2" color="text.secondary">
                              <Text color="warning">{raid.avgPayTime} Avg Pay</Text>
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              <Text color="secondary">
                                {raid.payLimit} Pay Limit
                              </Text>
                            </Typography>
                          </Box>
                        </Box>
                      </Grid>

                      {/* Price and Time */}
                      <Grid item xs={12} sm={6} md={3}>
                        <Box>
                          <Typography variant="h3" sx={{ color: theme.colors.warning.main }}>
                            {formatGold(raid.price)}
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            Gold
                          </Typography>
                          <Typography
                            variant="subtitle2"
                            sx={{ mt: 1, color: theme.colors.warning.main }}
                          >
                            Posted {formatTimeAgo(raid.postedAt)}
                          </Typography>
                        </Box>
                      </Grid>

                      {/* Faction and Server */}
                      <Grid item xs={12} sm={6} md={2.5}>
                        <Box>
                          <StatsBox>
                            <Typography
                              variant="h5"
                              sx={{
                                color:
                                  raid.faction === 'horde'
                                    ? theme.colors.error.main
                                    : theme.colors.info.main,
                                textTransform: 'capitalize'
                              }}
                            >
                              {raid.faction}
                            </Typography>
                          </StatsBox>
                          <Typography
                            variant="h5"
                            sx={{ color: theme.colors.error.main }}
                          >
                            {raid.server}
                          </Typography>
                          <Box sx={{ mt: 1 }}>
                            <StatsBox>
                              <Typography variant="body2">
                                {raid.poster.credit.toFixed(2)} Credit
                              </Typography>
                              <HelpIcon
                                sx={{ fontSize: 14 }}
                                color="primary"
                              />
                            </StatsBox>
                            <StatsBox>
                              <Typography variant="body2">
                                {raid.poster.karma} Karma
                              </Typography>
                              <HelpIcon
                                sx={{ fontSize: 14 }}
                                color="primary"
                              />
                            </StatsBox>
                          </Box>
                        </Box>
                      </Grid>

                      {/* Roles and Signups */}
                      <Grid item xs={12} sm={6} md={3}>
                        <Box>
                          <Typography variant="subtitle2" sx={{ mb: 0.5 }}>
                            LF:
                          </Typography>
                          <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {raid.rolesNeeded.includes('tank') && (
                              <RoleIcon>
                                <ShieldTwoToneIcon
                                  sx={{
                                    color: theme.colors.info.main,
                                    fontSize: 20
                                  }}
                                />
                              </RoleIcon>
                            )}
                            {raid.rolesNeeded.includes('healer') && (
                              <RoleIcon>
                                <FavoriteTwoToneIcon
                                  sx={{
                                    color: theme.colors.success.main,
                                    fontSize: 20
                                  }}
                                />
                              </RoleIcon>
                            )}
                            {raid.rolesNeeded.includes('dps') && (
                              <RoleIcon>
                                <FlashOnTwoToneIcon
                                  sx={{
                                    color: theme.colors.error.main,
                                    fontSize: 20
                                  }}
                                />
                              </RoleIcon>
                            )}
                          </Box>
                          <Typography
                            variant="subtitle2"
                            sx={{ mt: 1, color: theme.colors.warning.main }}
                          >
                            {raid.signups} Signups
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardActionArea>
                </Grid>
              </Grid>
            </Box>
          </RaidCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default RaidsGrid;
